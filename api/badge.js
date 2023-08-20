const { createBadge } = require('badge-maker');

module.exports = (req, res) => {
    const label = req.query.label || 'example';
    const message = req.query.message || 'dynamic';

    const format = {
        label: label,
        message: message,
        color: 'blue',
        style: 'flat',
    };

    const svgBadge = createBadge(format);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svgBadge);
};


