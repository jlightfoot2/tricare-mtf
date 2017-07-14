import {schema, normalize} from 'normalizr';

const hotlineSchema = new schema.Entity('hotlines');
const hotlineArraySchema = new schema.Array(hotlineSchema);

export interface HotlineInterface {
  id: number;
  title: string;
  numberDisplay: string;
  numberDial: string;
}


export const makeHotline = (id:number, title: string, numberDisplay: string, numberDial: string = ''):HotlineInterface  => {
  return {
    id,
    title,
    numberDisplay,
    numberDial
  }
}
//TODO double check phone #s
const data:HotlineInterface[] = [
  makeHotline(1,"Nurse Advice Line", "1-800-874-2273","18008742273"),
  makeHotline(2,"Suicide Prevention Hotline", "1-800-273-8255 (Press 1)","18002738255"),
  makeHotline(3,"DoD Safe Helpline", "1-877-995-5247","18779955247"),
  makeHotline(4,"Veterans Crisis Line", "1-800-273-8255","18002738255"),
  makeHotline(5,"TRICARE North Region", "1-877-874-2273","18778742273"),
  makeHotline(6,"TRICARE South Region", "1-800-444-5445","18004445445"),
  makeHotline(7,"TRICARE West Region", "1-877-988-9378","18779889378")
] 

export const normalizedHotlines = normalize(data, hotlineArraySchema);
export const defaultHotlines = normalizedHotlines.entities.hotlines;
export const defaultHotlineIds = normalizedHotlines.result;