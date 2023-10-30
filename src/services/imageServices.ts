import api from "./api";

export interface Image<T> {
    data: T[];
    httpStatus: string;
    message: string;
    statusCode: number;
    timeStamp: number; 
}


export interface ImageData<G> {
    id: number;
    url: string;
    name: string;
    diaryId: number;
    geolocations: G[];
}
  
export interface GeolocationData {
    id: number;
    name: string;
    lat: number;
    long: number;
    imageId: number;
  }


export const getImages = () =>{
    return  api.get<Image<ImageData<GeolocationData>>>("/images")
}