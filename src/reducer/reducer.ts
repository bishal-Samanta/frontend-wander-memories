import { AppAction, GET_ALL_DAIRIES, GET_ALL_IMAGES } from "./actions";
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


    default:
      return state; // Always return the current state for unhandled actions
  }
}

export default reducer;