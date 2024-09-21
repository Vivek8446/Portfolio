import React, { useEffect, useState } from "react";
import "./Preloader.css"; // Import the CSS file for animation

const PreLoader = () => {

  return (
     (
      <div className="preloader-container">
        <div className="preloader-text">
        
          <span className="text1">&lt; Eat</span>
          <span className="text2">Sleep</span>
          <span className="text3">Code</span>
          <span className="text4">Repeat /&gt;</span>

        </div>
      </div>
    )
  );
};

export default PreLoader;
