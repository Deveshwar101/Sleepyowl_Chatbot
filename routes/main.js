const express = require('express');
const router = express.Router();
const path = require('path');

// Route for the home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Route for the healthy habits page
router.get('/habits', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/habits.html'));
});

// Route for the nutrition and sleep page
router.get('/nutrition', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/nutrition.html'));
});

// Route for the sleep disorders page
router.get('/disorders', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/disorders.html'));
});

// Route for the resources page
router.get('/resources', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/resources.html'));
});

// Route for the contact page
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contact.html'));
});

module.exports = router;
