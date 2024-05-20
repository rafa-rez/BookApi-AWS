const express = require('express');
const booksController = require('../controller/controller');
const router = express.Router();

router.get('/overview', async (req, res) => {
    const params = req.query
    try {
        const data = await booksController.overview(params);
        res.json(data);
        console.log("deu certo - overview");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
