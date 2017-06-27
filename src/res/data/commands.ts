import {schema, normalize} from 'normalizr';
import commandsDataRaw from './command-hospitals-data';

const commandsDataWithImages = commandsDataRaw.map(item => { //run images through webpack
  item.img = require('../images/commands/' + item.img);
  item.icon = require('../images/commands/icons/' + item.icon);
  return item;
});

const commandsSchema = new schema.Entity('commands');
const commandsArraySchema = new schema.Array(commandsSchema);

export interface CommandInterface{
  id: number;
  title: string;
  phone: string;
  website: string;
  facebook: string;
  address: string;
  latitude: number;
  longitude: number;
  img: string;
  icon: string;
}

export const normalizedCommands = normalize(commandsDataWithImages, commandsArraySchema);
export const defaultCommands = normalizedCommands.entities.commands;
export const defaultCommandIds = normalizedCommands.result;




