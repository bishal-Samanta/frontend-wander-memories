import React from "react"
import { Link } from "react-router-dom";


interface NavButtonProps {
    name: string ;
    link: string ;
}

export const NavButton : React.FC<NavButtonProps> = ({name , link }) => {
  return (
    <div>
        <div className="rounded-md shadow-md hover:bg-blue-600">
            <Link id="dairies" to={link} className="block px-4 py-2 bg-blue-500 text-white cursor-pointer rounded-md">
            {name}
            </Link>
        </div>
    </div>
  )
}
