import React from "react";
import ImageUpload from "./images/ImageUploadButton";
import { NavButton } from "./NavButton";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full p-4 text-center flex gap-3 justify-around bg-cover backdrop-blur-md">
      <ImageUpload isUploadFromGalary={false} />
      <ImageUpload isUploadFromGalary={true} />
      <NavButton name="Dairies" link="/dairies" />
      <NavButton name="Images" link="/images" />
    </div>
  );
};
