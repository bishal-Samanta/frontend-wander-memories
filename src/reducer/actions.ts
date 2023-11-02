export interface AppAction {
    type : string;
    payload? :  any;
}



//Dairies 
export const GET_ALL_DAIRIES : string = "GET_ALL_DAIRIES";

//Images
export const GET_ALL_IMAGES : string = "GET_ALL_IMAGES";


//Upload Images 
export const FILE_UPLOAD_ONCHANGE = "FILE_UPLOAD_ONCHANGE";
export const REMOVE_IMAGE_FROM_UPLOAD = "REMOVE_IMAGE_FROM_UPLOAD";
export const LOCATION_SEARCH_THROUGH_API = "LOCATION_SEARCH_THROUGH_API";
export const UPDATE_IMAGE_UPLOAD_DATA = "UPDATE_IMAGE_UPLOAD_DATA"