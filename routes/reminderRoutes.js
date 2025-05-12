const express = require('express');
const router = express.Router();
const Reminder = require('../models/reminder')

router.post('/reminders', async(req,res)=>{
    try{
        const {date,time,message,reminderType} = req.body;
        if (!date || !time || !message || !reminderType) {
            return res.status(400).json({ error: 'Please fill all fields' });
        }

        const newReminder = new Reminder({
            date,
            time,
            message,
            reminderType
        })

        await newReminder.save();
        res.status(201).json({message:'Reminder created successfully'});
    }
    catch(err){
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
})

module.exports = router;