import models from '../models';
import fs from 'fs';

function saveData() {
    models.sheets((err, sheets) => {
        fs.writeFileSync(__dirname + '/../data/sheets.json',JSON.stringify({
            sheets: sheets
        }));
    });
}

if (!module.parent) {
    saveData();
}

export default saveData;
