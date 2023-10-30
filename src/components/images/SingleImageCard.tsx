import React from "react";
import { GeolocationData, ImageData } from "../../services/imageServices";

export const ImageCard: React.FC<ImageData<GeolocationData>> = ({ url, name, geolocations }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold text-gray-800">Name: {name}</h2>
      <img src={url} alt={name} className="w-full h-auto rounded-lg my-4" />
      {geolocations?.map((el) => (
        <div key={el.id} className="text-gray-600 my-2">
          <span className="text-sm text-gray-400">Latitude: {el.lat}</span>
          <span className="mx-2">|</span>
          <span className="text-sm text-gray-400">Longitude: {el.long}</span>
        </div>
      ))}
    </div>
  );
};
