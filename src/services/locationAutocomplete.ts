import axios from "axios";



const getLocations = (searchKey : string ) =>{

    const config = {
        method: 'get',
        url: `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchKey}&apiKey=${import.meta.env.VITE_GEOAPIFY_API_KEY}`,
    };

    return axios(config).then((res) =>{
        // console.log(res)
        return res;
    }).catch((err) =>{
        return err;
    })

}





const getAddressFromLatitudeLongitude = (latitude: number , longitude: number) =>{
    const config = {
        method: 'get',
        url : `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${import.meta.env.VITE_GEOAPIFY_API_KEY}`
    }
    
    return axios(config).then((res : any ) =>{
        return res;
    }).catch((err) =>{
        alert("Some error while api request")
        return err;
    })
}


export {getLocations , getAddressFromLatitudeLongitude }