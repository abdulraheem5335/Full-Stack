import React from "react";

const Navbar = (props) => {
    return(
        <>
        <div className="logo">{props.logoText}</div>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        </>
    );
}

export default Navbar;