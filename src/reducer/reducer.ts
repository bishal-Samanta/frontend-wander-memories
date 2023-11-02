import { AppAction, FILE_UPLOAD_ONCHANGE, GET_ALL_DAIRIES, GET_ALL_IMAGES, LOCATION_SEARCH_THROUGH_API, REMOVE_IMAGE_FROM_UPLOAD, UPDATE_IMAGE_UPLOAD_DATA } from "./actions";
import { AppState } from "./store";

const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case GET_ALL_DAIRIES:
      if (Array.isArray(action.payload)) {
        return { ...state, dairies: [...action.payload] };
      }
      return state;

    case GET_ALL_IMAGES:
      if (Array.isArray(action.payload)) {
        return { ...state, images: [...action.payload] };
      }
      return state;

    case FILE_UPLOAD_ONCHANGE:
      if (action.payload !== null && Array.isArray(action.payload)) {
        return { ...state, selectedImages: state.selectedImages? [...state.selectedImages , ...action.payload ] : [...action.payload ] };
      }
      return state;


    case REMOVE_IMAGE_FROM_UPLOAD:
      return {...state , selectedImages : state.selectedImages && Array.isArray(action.payload) ? [...action.payload ] : []}

    
    case LOCATION_SEARCH_THROUGH_API : 
      return {...state , uploadImageForm : {...state.uploadImageForm , locationAutoCompleteData : Array.isArray(action.payload) ? [...action.payload] : [...state.uploadImageForm.locationAutoCompleteData] }}
    
    
    
    case UPDATE_IMAGE_UPLOAD_DATA :
     
        return {...state , uploadImageForm : { ...state.uploadImageForm ,  [action.payload?.keyName] : [action.payload?.value] } }  

    
    default:
      return state; // Always return the current state for unhandled actions

    
  }
}

export default reducer;
