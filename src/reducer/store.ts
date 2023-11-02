import { DairyData } from "../services/dairyServices";
import { ImageData , GeolocationData } from "../services/imageServices";


interface UploadImagesForm {
    locationData: string;
    locationAutoCompleteData: any[];
    latitude : string,
    longitude : string,
}

export interface AppState {
    count : number;
    dairies: DairyData[] | null; //All Dairies from API Request
    images: ImageData<GeolocationData>[] | null ; //All Images from API Request 
    selectedImages: any | null; //All Images for uploading 
    uploadImageForm : UploadImagesForm;
}



const store:AppState = {
    count: 0,
    dairies: null,
    images: null,
    selectedImages : null,
    uploadImageForm : {
        locationData : "",
        locationAutoCompleteData : [],
        latitude : "",
        longitude : ""
    }
}

export default store;