const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'results.json');

// In-memory storage for Vercel (temporary)
let memoryResults = [];

app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.htm'));
});

async function loadResults() {
    // Try file system first (local dev)
    if (process.env.NODE_ENV !== 'production') {
        try {
            const data = await fs.readFile(DATA_FILE, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }
    // Use in-memory for production (Vercel)
    return memoryResults;
}

async function saveResults(results) {
    // Save to file system (local dev)
    if (process.env.NODE_ENV !== 'production') {
        await fs.writeFile(DATA_FILE, JSON.stringify(results, null, 2), 'utf8');
    }
    // Save to memory (Vercel)
    memoryResults = results;
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

        const results = await loadResults();
        
        const newResult = {
            id: Date.now(),
            name,
            scores,
            topGift,
            timestamp: new Date().toISOString()
        };
        
        results.push(newResult);
        await saveResults(results);
        
        res.json({ success: true, data: newResult });
    } catch (error) {
        console.error('Error saving result:', error);
        res.status(500).json({ success: false, error: 'Failed to save result' });
    }
});

app.delete('/api/delete/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const results = await loadResults();
        
        const filteredResults = results.filter(r => r.id !== id);
        
        if (filteredResults.length === results.length) {
            return res.status(404).json({ success: false, error: 'Record not found' });
        }
        
        await saveResults(filteredResults);
        res.json({ success: true, message: 'Record deleted successfully' });
    } catch (error) {
        console.error('Error deleting result:', error);
        res.status(500).json({ success: false, error: 'Failed to delete result' });
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running at http://localhost:${PORT}`);
        console.log(`📊 Spiritual Gift Survey Dashboard ready!`);
    });
}

module.exports = app;
