const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json("GET /colors")
});

router.get('/:name', (req, res) => {
    const name = req.params.name;
    const response = `GET /colors/${name}`
    res.json(response);
});

router.post('/:name/css-styles/:styles', (req, res) => {
    res.json("POST /colors/:name/css-styles");
});

router.delete('/:name/css-styles/:styles', (req, res) => {
    res.json("DELETE '/:name/css-styles/:styles'");
});

module.exports = router;



