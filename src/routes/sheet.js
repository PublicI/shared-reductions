import express from 'express';
import models from '../models';

const router = express.Router();

router.get('/sheets.json', (req, res, next) => {
    models.sheets((err, sheets) => {
        res.json({
            sheets: sheets
        });
    });
});

export default router;
