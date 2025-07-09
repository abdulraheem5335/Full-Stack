import React, { useEffect } from "react";

const Navbar = ({ color }) => {

    // CASE 1: RUN ON EVERY RENDER
    useEffect(() => {
        alert("HEY I will run on every render!")
    })

    // CASE 2: RUN ONLY ON FIRST RENDER
    useEffect(() => {
        alert("Hey Welcome to my page. This is the first render!")
    }, [])

    // CASE 3: RUN ONLY WHEN CERTAIN VALUE CHANGES
    useEffect(() => {
        alert(`Hey I am running because color was changed!`)
    }, [color])

    
    useEffect(() => {
        alert("Hey I am mounted")

        return () => {
            alert("Hey I am Dismounting!!")
        }
    }, [])

    return (
        <div>
            I am navbar of {color} color hehe...
        </div>
    )
}

export default Navbar;