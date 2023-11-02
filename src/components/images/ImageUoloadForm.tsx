import { getLocations } from "../../services/locationAutocomplete";
import getCurrentLocation from "../../utils/getCurrentLocationFromBrowser";
import { useContext } from "react"
import { AppContext } from "../../context/AppContextProvider";
import { searchLocationActionCreator, updateImageUploadDataActionCreator } from "../../reducer/actionCreators";

export const ImageUoloadForm = () => {
 
  const { state, dispatch} = useContext(AppContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)

    dispatch(updateImageUploadDataActionCreator("locationData" , e.target.value));

    if (e.target.value.length >= 3) {
      getLocations(e.target.value)
        .then((res: { data: { features: [] } }) => {
          console.log(res);
          dispatch(searchLocationActionCreator(res.data.features));
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      dispatch(searchLocationActionCreator([]));
    }
  };

  const handleSelectedLocation = (locationName : string , latitude : number , longitude: number ) => {
    dispatch(updateImageUploadDataActionCreator("locationData" , locationName));
    dispatch(updateImageUploadDataActionCreator("latitude" , latitude.toString() ));
    dispatch(updateImageUploadDataActionCreator("longitude" , longitude.toString() ));

    dispatch(searchLocationActionCreator([]));
    console.log(latitude , longitude)
  };

 

  const handleGetCurrentLocation = () => {
    getCurrentLocation()
      .then((res: any ) => {

        if ( Array.isArray(res.data.results) && res.data.results.length > 0) {
          const location =
            res.data.results[0]?.address_line1 + ' : ' + res.data.results[0]?.county;
   
          dispatch(updateImageUploadDataActionCreator("locationData" , location));
          dispatch(searchLocationActionCreator([]));
        } else {
          console.log('No results found');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <>
      <div className="relative">
        <div className="flex flex-row">
          <div className="relative w-full" >
            <input
              type="text"
              className="w-full px-5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              value={state.uploadImageForm.locationData}
              onChange={handleChange}
              placeholder="Enter your search..."
            />

            <ul className="absolute z-10 w-full mt-2 py-1 bg-white border border-gray-300 rounded-lg shadow-md">
              {state.uploadImageForm.locationAutoCompleteData?.map(
                (el: {
                  properties: {
                    address_line1: string;
                    lat: number;
                    lon: number;
                    place_id: string;
                  };
                }) => {
                  return (
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      key={el.properties.place_id}
                      onClick={() =>
                        handleSelectedLocation(
                          el.properties.address_line1,
                          el.properties.lat,
                          el.properties.lon
                        )
                      }
                    >
                      {el.properties.address_line1}
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          <div className="flex items-center ml-2" >
          <svg
            className="h-8 w-8 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={()=> handleGetCurrentLocation()}
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
            </svg>

          </div>
        </div>
      </div>
    </>
  );
};
