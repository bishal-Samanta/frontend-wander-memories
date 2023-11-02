
import { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import axios from "axios";

export const UploadToS3 = () => {
  
  const {state} = useContext(AppContext);

  const handleS3Upload = () =>{


    //Make post request to get presigned url - Here also transfer the file length 
    //To calculate duration from backend 

    for ( const singleFile in state.selectedImages){

        const singleFileData = state.selectedImages[singleFile];

        console.log(singleFileData)

        const dataToSend = {
            fileName: singleFileData.name,
            contentType: singleFileData.type
        };

        //Making post request to server for getting the signed url and authentication
        axios.post(`${import.meta.env.VITE_API_ROOT_URL}/images/upload` , dataToSend ).then((res)=>{
            
            const awsUrl : string = res.data.data.url;
            const imageKey : string  = res.data.data.key;
            const imageType : string = res.data.data.contentType;

            //Now make put request to aws for uploading in the bucket - using siigned url 
            axios.put( awsUrl , state.selectedImages[singleFile] , {
                headers: {
                    'Content-Type' : imageType,
                    "Access-Control-Allow-Headers" : "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
                }
            }).then((res) =>{

                //Status - 200 means image successfully uploaded on s3 bucket. 
                if(res.status === 200){
                    console.log("Uploaded SSuccessfully in aws...")
                    
                    //Now add image in database 
                    const imageUrl = `rootlink/${imageKey}`
                    console.log(imageUrl)

                }

                
            }).catch((err) =>{

                console.log(err);
            })


        }).catch((err) =>{
            console.log(err);
        })

    }

    //Run for loop on each file and upload the file 

  }  


  return (
    <div className=" mt-3">
        <button onClick={handleS3Upload} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Upload to S3
        </button>
    </div>
  )
}
