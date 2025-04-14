//  TODO: To be expanded in later releases 
import { yaml } from 'js-yaml';
import { fs } from 'fs';

import { log } from './Logger';

let config = {};

try {
  const fileContents = fs.readFileSync('../../configs/config.yaml', 'utf8');
  config = yaml.load(fileContents);

  log.info("Configuration file found at './configs/config.yaml'");

} catch (err) {
  log.warn("Configuration file wasn't found at './configs/config.yaml'"); 
}

export default config;

