
import { FILE_UPLOAD_ONCHANGE, GET_ALL_DAIRIES, GET_ALL_IMAGES, LOCATION_SEARCH_THROUGH_API, REMOVE_IMAGE_FROM_UPLOAD, UPDATE_IMAGE_UPLOAD_DATA } from "./actions";

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


export const fileUploadOnchangeActionCreator = (files: unknown[]) =>{
    return {
        type: FILE_UPLOAD_ONCHANGE,
        payload : [...files]
    }
}

export const removImageFromUpload = (files : unknown[]) =>{
    return {
        type: REMOVE_IMAGE_FROM_UPLOAD,
        payload : [...files]
    }
}

export const searchLocationActionCreator = (data : any[]) =>{
    return{
        type: LOCATION_SEARCH_THROUGH_API,
        payload : [...data]
    }
}


export const updateImageUploadDataActionCreator = (key : string , value : string) =>{
    console.log(key , value)
    return{
        type: UPDATE_IMAGE_UPLOAD_DATA,
        payload : {
            keyName : key,
            value : value
        }
    }
}
