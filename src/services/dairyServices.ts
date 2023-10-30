import api from "./api";

export interface Dairy<T> {
    data: T[];
    httpStatus: string;
    message: string;
    statusCode: number;
    timeStamp: number; 
}

export interface DairyData {
    createdAt: string; 
    description: string;
    id: number;
    title: string;
    userId: number | null;
}




export const getDairies = () =>{
   return api.get<Dairy<DairyData>>(`/dairies`);
}

