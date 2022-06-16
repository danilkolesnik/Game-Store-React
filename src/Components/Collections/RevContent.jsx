import React from "react";
import './RevContent.css'

function RevContent() {
  return (
    <div>
      <h1 className = 'caption'>New Games in Our Store:</h1>
      <div className = 'vit_container'>
        <div className="squad"></div>
        <div className="orcs"></div>
        <div className="core-keeper"></div>
        <div className="graveyard-keeper"></div>
      </div>
    </div>
  );
}

export default RevContent;