import React from "react";
import "./seach-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
      return   <input
        //syntetic events
   className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    
};
