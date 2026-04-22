const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = 'spiritual-gift-survey';
let db = null;

async function connectDB() {
    if (db) return db;
    try {
        const client = await MongoClient.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = client.db(DB_NAME);
        console.log('✅ Connected to MongoDB');
        return db;
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        throw error;
    }
}

app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.htm'));
});

async function loadResults() {
    try {
        const database = await connectDB();
        const results = await database.collection('results').find({}).toArray();
        return results;
    } catch (error) {
        console.error('Error loading results:', error);
        return [];
    }
}

async function saveResult(result) {
    try {
        const database = await connectDB();
        await database.collection('results').insertOne(result);
        return true;
    } catch (error) {
        console.error('Error saving result:', error);
        throw error;
    }
}

app.get('/api/results', async (req, res) => {
    try {
        const results = await loadResults();
        res.json(results);
    } catch (error) {
        console.error('Error loading results:', error);
        res.status(500).json({ error: 'Failed to load results' });
    }
});

app.post('/api/save', async (req, res) => {
    try {
        const { name, scores, topGift } = req.body;
        
        if (!name || !scores || !topGift) {
            return res.status(400).json({ success: false, error: 'Missing required fields' });
        }

        const newResult = {
            name,
            scores,
            topGift,
            timestamp: new Date().toISOString()
        };
        
        await saveResult(newResult);
        
        res.json({ success: true, data: newResult });
    } catch (error) {
        console.error('Error saving result:', error);
        res.status(500).json({ success: false, error: 'Failed to save result' });
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running at http://localhost:${PORT}`);
        console.log(`📊 Spiritual Gift Survey Dashboard ready!`);
    });
}

module.exports = app;
