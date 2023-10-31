import { getAddressFromLatitudeLongitude } from "../services/locationAutocomplete";





const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
  
            getAddressFromLatitudeLongitude(latitude, longitude)
              .then((res : any ) => {
                resolve(res );
              })
              .catch((err) => {
                reject(err);
              });
          },
          (error) => {
            alert( "Some Error while getting the location")
            console.error('Error getting location:', error);
            reject(error);
          }
        );
      } else {
        alert('Geolocation is not supported in this browser.')
        console.error('Geolocation is not supported in this browser.');
        reject('Geolocation not supported');
      }
    });
};
  

export default getCurrentLocation;