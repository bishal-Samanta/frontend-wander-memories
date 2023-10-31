
import { GET_ALL_DAIRIES, GET_ALL_IMAGES } from "./actions";

export const getAllDairies = ( data : unknown[]) =>{
    return {
        type : GET_ALL_DAIRIES,
        payload : [...data ]
    }
}

export const getAllImages = ( data : unknown[]) =>{
    return {
        type : GET_ALL_IMAGES,
        payload : [...data ]
    }
}