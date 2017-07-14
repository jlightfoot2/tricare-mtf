import {schema, normalize} from 'normalizr';
import commandsDataRaw from './command-hospitals-data';

const commandsDataWithImages = commandsDataRaw.map(item => { //run images through webpack

  if(item.img.length > 0){
    item.img = require('../images/commands/' + item.img);
  }
  if(item.icon.length > 0){
    item.icon = require('../images/commands/icons/' + item.icon);
  }
  item['distance'] = -1;
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
  twitter: string;
  address: string;
  latitude: number;
  longitude: number;
  img: string;
  icon: string;
  distance: number;
}

export const normalizedCommands = normalize(commandsDataWithImages, commandsArraySchema);
export const defaultCommands = normalizedCommands.entities.commands;
export const defaultCommandIds = normalizedCommands.result;




