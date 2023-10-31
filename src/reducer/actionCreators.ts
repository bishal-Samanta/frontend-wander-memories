
import { FILE_UPLOAD_ONCHANGE, GET_ALL_DAIRIES, GET_ALL_IMAGES, REMOVE_IMAGE_FROM_UPLOAD } from "./actions";

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