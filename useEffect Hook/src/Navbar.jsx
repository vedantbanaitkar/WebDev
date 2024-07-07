import React, {useEffect} from "react";

const Navbar = ({ color }) => {

    useEffect(() => {
        alert("I'll run on every render")
    });

    useEffect(() => {
      alert("I'll run on first render");
    }, [])

    useEffect(() => {
      
      return () => {
        alert("component unmounted")
      }
    }, [])
    
    
    useEffect(() => {
      alert("color was changed")
    }, [color])
    
  return <div style={{ color: color }}>I am a Navbar of color {color}</div>;
};

export default Navbar;
