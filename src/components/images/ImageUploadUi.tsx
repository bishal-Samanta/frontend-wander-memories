
import { useContext }from "react";
import { AppContext } from "../../context/AppContextProvider";
import { removImageFromUpload } from "../../reducer/actionCreators";

interface ImageUploadUiProps {

}


export const ImageUploadUi : React.FC<ImageUploadUiProps> = () => {

  const {state , dispatch } = useContext(AppContext);

  const handleRemoveImage = (index: number) =>{
    const updatedSelectedImages = state.selectedImages? [...state.selectedImages] : [];

    if(updatedSelectedImages){
        updatedSelectedImages.splice(index , 1);
        dispatch(removImageFromUpload([...Array.from(updatedSelectedImages)]));
    }
  }

  return (
    <>
    <div className="bg-gray-100 p-4 rounded-lg">
        {state.selectedImages && state.selectedImages.length > 0 && (
        <div>
            <ul className="list-disc list-inside flex">
            {state.selectedImages.map((image, index) => (
                <li key={index} className="text-lg relative mb-4 list-none ml-4">
                <img
                    src={URL.createObjectURL(image)}
                    alt={image.name}
                    className="w-16 h-16 object-cover rounded-md mr-2"
                />
                <span
                    className="absolute top-0 right-0 cursor-pointer font-normal text-xs bg-red-500 text-white rounded-full px-1"
                    onClick={()=> handleRemoveImage(index)}
                >
                    X
                </span>
                
                </li>
            ))}
        </ul>
      </div>
    )}
  </div>





  </>
  )
}


