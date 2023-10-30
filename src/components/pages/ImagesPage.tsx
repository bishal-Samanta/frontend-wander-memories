import React, { useEffect, useState } from "react";
import { getImages } from "../../services/imageServices";
import { ImageData, GeolocationData } from "../../services/imageServices";
import { ImageCard } from "../images/SingleImageCard";

interface ImageProps {}

export const Images: React.FC<ImageProps> = () => {
  const [images, setImages] = useState<ImageData<GeolocationData>[] | null>(
    null
  );

  useEffect(() => {
    getImages()
      .then((res) => {
        setImages(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Images</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 lg:px-16">
        {images?.map((el) => {
          return <ImageCard {...el} key={el.id} />;
        })}
      </div>
    </div>
  );
};
