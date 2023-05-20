const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017/';
const dbName = 'calendarapp';

app.use(cors());
app.use(express.json());

MongoClient.connect(url, { useNewUrlParser: true })
    .then((client) => {
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        const collection = db.collection('events');

        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });

        // Endpoint to add an event
        app.post('/api/add_event', (req, res) => {
            console.log('Adding event');
            console.log('req.body', req.body);
            const eventData = req.body;
            console.log(eventData);
            collection.insertOne(eventData)
                .then(() => {
                    console.log('Event added');
                    res.status(200).json({ message: 'Event added successfully' });
                })
                .catch((err) => {
                    console.error('Error occurred while adding event', err);
                    res.status(500).json({ error: 'Failed to add event' });
                });
        });

        // Endpoint to get events for a specific date
        app.post('/api/get_events', (req, res) => {
            const { year, month, date } = req.body;
            console.log('Getting events for', year, month, date);
            collection.find({ year, month, date }).toArray()
                .then((events) => {
                    console.log('Found events', events);
                    res.status(200).json({ events });
                })
                .catch((err) => {
                    console.error('Error occurred while retrieving events', err);
                    res.status(500).json({ error: 'Failed to retrieve events' });
                });
        });
    })
    .catch((err) => {
        console.error('Error occurred while connecting to MongoDB', err);
    });
