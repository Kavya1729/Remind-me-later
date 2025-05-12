# Remind-me-later – Backend API

## Overview

The **Remind-me-later** backend is a simple REST API that allows storing reminders with a date, time, message, and delivery method (SMS or Email). It is built using **Node.js**, **Express**, and **MongoDB**, and is designed for easy integration with a frontend UI.

---

## Features

- Create reminders with:
  - `date` (e.g., "2025-05-13")
  - `time` (e.g., "14:30")
  - `message` (e.g., "Doctor appointment")
  - `reminderType` ("sms" or "email")
- Stores all reminders in a MongoDB collection.
- Built with scalability in mind for adding more reminder types in the future.

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **dotenv** for environment variable management

---

## API Usage

### Endpoint

**POST** `/api/reminders`

### Request Body - Example

```json
{
  "date": "2025-05-12",
  "time": "21:45",
  "message": "Trial",
  "reminderType": "email"
}
