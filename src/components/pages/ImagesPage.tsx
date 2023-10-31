import React, { useEffect , useContext } from "react";
import { getImages } from "../../services/imageServices";
// import { ImageData, GeolocationData } from "../../services/imageServices";
import { ImageCard } from "../images/SingleImageCard";
import { AppContext } from "../../context/AppContextProvider";
import { getAllImages } from "../../reducer/actionCreators";


interface ImageProps {}

export const Images: React.FC<ImageProps> = () => {
  
  const {state , dispatch} = useContext(AppContext);

  useEffect(() => {
    getImages()
      .then((res) => {
        dispatch(getAllImages(res.data.data));
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div>
      <h2>Images</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 lg:px-16">
        {state.images?.map((el) => {
          return <ImageCard {...el} key={el.id} />;
        })}
      </div>
    </div>
  );
};
