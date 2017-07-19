import {schema, normalize} from 'normalizr';

const servicesSchema = new schema.Entity('services');
const serviceArraySchema = new schema.Array(servicesSchema);

export interface ServiceInterface{
  id: number;
  title: string;
  facebook: string;
  twitter: string;
  youtube: string;
  website: string;
  resources: ServiceResourcesInterface[];
}

export interface ServiceResourcesInterface{
  id: number,
  title: string,
  url: string
}
export const makeServieResource = (id: number,title: string,url: string):ServiceResourcesInterface => {
  return {
    id,
    title,
    url
  }
}


export const makeServie = (id:number, title: string,facebook: string, twitter: string, youtube: string, website: string, resources: ServiceResourcesInterface[] = []) => {
  return {
    id,
    title,
    facebook,
    twitter,
    youtube,
    website,
    resources
  }
}

const triCareUrl = "https://www.tricareonline.com"; 

export const ArmyInfo = makeServie(
  1, 
  'Army',
  'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FOfficialArmyMedicine%2F',
  'https://twitter.com/ArmyMedicine',
  'https://www.youtube.com/user/ArmyMedicine',
  'http://armymedicine.mil',
    [
      makeServieResource(13,'Ombudsman Program','http://www.wct.army.mil/modules/soldier/s1-ombudsman.html'),
      makeServieResource(19,'SHARP','http://armymedicine.mil/Pages/SHARP.aspx'),
      makeServieResource(20,'Ready and Resilient','https://www.army.mil/readyandresilient/'),

      makeServieResource(18,'Health Finders','https://healthfinder.gov/HealthTopics/'),
      makeServieResource(14,'Medline Plus','https://medlineplus.gov'),
      makeServieResource(15,'Military OneSource','http://www.militaryonesource.mil/service/army'),
      makeServieResource(16,'Veteran\'s Health Library','http://www.veteranshealthlibrary.org'),
      makeServieResource(17,'TRICARE',triCareUrl)
    ]
  );
export const NavyInfo = makeServie(
  2, 
  'Navy',
  'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUSNavyMedicine%2F',
  'https://twitter.com/NavyMedicine',
  'https://www.youtube.com/user/USNavyMedicine',
  'http://www.med.navy.mil',
    [
      makeServieResource(1,'Health Finders','https://healthfinder.gov/HealthTopics/'),
      makeServieResource(2,'Medline Plus','https://medlineplus.gov'),
      makeServieResource(3,'Military OneSource','http://www.militaryonesource.mil/service/navy'),
      makeServieResource(4,'Veteran\'s Health Library','http://www.veteranshealthlibrary.org'),
      makeServieResource(5,'Navy and Marine Corps Public Health Center','http://www.med.navy.mil/sites/nmcphc/Pages/Home.aspx'),
      makeServieResource(6,'TRICARE',triCareUrl)
    ]
);
export const AirForceInfo = makeServie(
  3, 
  'Air Force',
  'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAirForceMedicalService%2F',
  'https://twitter.com/usafhealth',
  'https://www.youtube.com/user/airforcemedicine',
  'http://www.airforcemedicine.af.mil',
    [
      makeServieResource(7,'Health Finders','https://healthfinder.gov/HealthTopics/'),
      makeServieResource(8,'Medline Plus','https://medlineplus.gov'),
      makeServieResource(9,'Military OneSource','http://www.militaryonesource.mil/service/airforce'),
      makeServieResource(10,'Veteran\'s Health Library','http://www.veteranshealthlibrary.org'),
      makeServieResource(12,'TRICARE',triCareUrl)
    ]
);

const serviceData:ServiceInterface[] = [
 ArmyInfo,
 NavyInfo,
 AirForceInfo
];


export const normalizedServices = normalize(serviceData, serviceArraySchema );
export const defaultServices = normalizedServices.entities.services;
export const defaultServiceIds = normalizedServices.result;

