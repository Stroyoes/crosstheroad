import yaml from 'js-yaml';
import fs from 'fs';

let config = {};

try {
  const fileContents = fs.readFileSync('../../configs/config.yaml', 'utf8');
  config = yaml.load(fileContents);

} catch (err) {
  //  TODO: Add logger logic here  
}

export default config;

