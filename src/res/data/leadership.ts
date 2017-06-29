import {schema, normalize} from 'normalizr';
import leadershipDataRaw from './leadership-data';

const leadershipDataWithImages = leadershipDataRaw.map(item => { //run images through webpack

  if(item.photo.length > 0){
    item.photo = require('../images/leadership/' + item.photo);
  }
  
  return item;
});

const leadershipSchema = new schema.Entity('leaders');
const leadershipArraySchema = new schema.Array(leadershipSchema);

export interface LeadersInterface{
  id: number,
  service_id: number,
  name: string,
  title: string,
  photo: string,
  sub_title: string,
  bio: string,
  sort_weight: number
}

export const normalizedCommands = normalize(leadershipDataWithImages, leadershipArraySchema);
export const defaultLeaders = normalizedCommands.entities.leaders;
export const defaultLeaderIds = normalizedCommands.result;