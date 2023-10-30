import React from "react";
import { DairyData } from "../../services/dairyServices";

export const DairyCard: React.FC<DairyData> = ({ description, title, userId, createdAt }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 my-2">{description}</p>
      <p className="text-sm text-gray-400">
        {userId ? `User ID: ${userId}` : "Not Assigned to a user"}
      </p>
      <p className="text-sm text-gray-400">{createdAt}</p>
    </div>
  );
};
