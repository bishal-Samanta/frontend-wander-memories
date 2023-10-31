export interface AppAction {
    type : string;
    payload? :  unknown[] | object;
}



//Dairies 
export const GET_ALL_DAIRIES : string = "GET_ALL_DAIRIES";
export const GET_ALL_IMAGES : string = "GET_ALL_IMAGES";