import Tabletop from 'tabletop';
import yaml from 'js-yaml';
import fs from 'fs';

export default cb => {
    const config = yaml.safeLoad(fs.readFileSync(`${__dirname}/../../config.yml`, 'utf8'));

    Tabletop.init({
        debug: true,
        key: config.google.sheet.key,
        callback(sheets, tabletop) {
            let result = {};

            Object.keys(sheets).forEach((key) => {
                 result[key] = sheets[key].elements;
            });

            cb(null,result);
        }
        // simpleSheet: true
    });
};
