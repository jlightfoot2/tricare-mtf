import {schema, normalize} from 'normalizr';

const servicesSchema = new schema.Entity('services');
const serviceArraySchema = new schema.Array(servicesSchema);

export interface ServiceInterface{
  id: number;
  title: string;
  image: string;
  icon: string;
}


export const makeServie = (id:number, title: string, image: string = '', icon: string = '') => {
  return {
    id,
    title,
    image,
    icon
  }
}



export const ArmyInfo = makeServie(
  1, 
  'Army',
  'tricare-army-leadership.png'
  );
export const NavyInfo = makeServie(2, 'Navy');
export const AirForceInfo = makeServie(3, 'Air Force');

const serviceData:ServiceInterface[] = [
 ArmyInfo,
 NavyInfo,
 AirForceInfo
];


export const normalizedServices = normalize(serviceData, serviceArraySchema );
export const defaultServices = normalizedServices.entities.services;
export const defaultServiceIds = normalizedServices.result;

