import React from "react";
import "./Header.css"
//Arrow head function
const Header = ({headTitle, headerExpanded}) => {
    return (
        <div className="head-cont">
            <img 
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" 
                alt="Name It" 
                className={`head-img ${headerExpanded ? 'head-img-expanded' : 'head-img-contracted'}`}
            />
            <h1 className={`head-txt ${headerExpanded ? 'head-txt-expanded' : 'head-txt-contracted'}`}>{headTitle}</h1>
        </div>
    )
}

export default Header;