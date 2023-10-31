import { DairyData } from "../services/dairyServices";
import { ImageData , GeolocationData } from "../services/imageServices";

export interface AppState {
    count : number;
    dairies: DairyData[] | null;
    images: ImageData<GeolocationData>[] | null ;
}



const store:AppState = {
    count: 0,
    dairies: null,
    images: null,
}

export default store;