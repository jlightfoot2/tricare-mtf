import {schema, normalize} from 'normalizr';

const servicesSchema = new schema.Entity('services');
const serviceArraySchema = new schema.Array(servicesSchema);

export interface ServiceInterface{
  id: number;
  title: string;
  facebook: string;
  image: string;
  icon: string;
}


export const makeServie = (id:number, title: string,facebook: string, image: string = '', icon: string = '') => {
  return {
    id,
    title,
    facebook,
    image,
    icon
  }
}



export const ArmyInfo = makeServie(
  1, 
  'Army',
  'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FOfficialArmyMedicine%2F'
  );
export const NavyInfo = makeServie(
  2, 
  'Navy',
  'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUSNavyMedicine%2F'
);
export const AirForceInfo = makeServie(
  3, 
  'Air Force',
  'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAirForceMedicalService%2F'
);

const serviceData:ServiceInterface[] = [
 ArmyInfo,
 NavyInfo,
 AirForceInfo
];


export const normalizedServices = normalize(serviceData, serviceArraySchema );
export const defaultServices = normalizedServices.entities.services;
export const defaultServiceIds = normalizedServices.result;

