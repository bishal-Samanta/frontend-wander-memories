import { AppAction } from "./actions";
import { AppState } from "./store";

const reducer = (state : AppState , action: AppAction ): AppState =>{
    switch(action.type){
        case "":
            return {...state , }

        default :
            return state;
    }
}

export default reducer ;