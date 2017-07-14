export const getDistanceFromLatLonInMiles = (lat1,lon1,lat2,lon2) => {
  //var R = 6371; // Radius of the earth in km
  var R = 3959; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


/**
 * you must install cordova-plugin-inappbrowser for this to work in cordova apps
 * 
 * @return ref
 */
export  const externalLink = (absolutePath:string,target: string = '_system') => {
    return () => {
      if(typeof (window as any).cordova === 'undefined' || typeof (window as any).cordova.InAppBrowser === 'undefined'){
        return window.open(absolutePath,target)
      }
      return (window as any).cordova.InAppBrowser.open(absolutePath, target, 'location=no');
    }

}

export const isHospitalFavorite = (hospital:{id: number},ids:number[]) =>  {
   return ids.indexOf(hospital.id) > -1;
}

export const calcDistance = (hospital: {distance: number,latitude: number, longitude: number},refLatitue,refLongitude) => {
  const dist = getDistanceFromLatLonInMiles(hospital.latitude,hospital.longitude,refLatitue,refLongitude);
 
  hospital.distance = Math.round(dist*100)/100;
  return hospital;
}

export const distanceCompare = (hospitalA: {distance: number}, hospitalB: {distance: number}) => {
  
  if(hospitalA.distance < hospitalB.distance){
    return -1;
  }

  if(hospitalA.distance > hospitalB.distance){
    return 1;
  }
  return 0;
}

export const distanceSort = (direction:string = 'asc') => {
  return (hospitalA: {distance: number}, hospitalB: {distance: number}) => {
  
    if(hospitalA.distance < hospitalB.distance){
      return direction === 'asc' ? -1 : 1;
    }

    if(hospitalA.distance > hospitalB.distance){
      return direction === 'asc' ? 1 : -1;
    }
    return 0;
  }
}

export const alphaSort = (propName: string, direction:string = 'asc') => {
  return (itemA, itemB) => {
  
    if(itemA[propName] < itemB[propName]){
      return direction === 'asc' ? -1 : 1;
    }

    if(itemA[propName] > itemB[propName]){
      return direction === 'asc' ? 1 : -1;
    }
    return 0;
  }
}

export const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
}




