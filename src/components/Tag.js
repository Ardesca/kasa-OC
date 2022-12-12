import React from "react";
import "./css/tag.css";

function Tag({nom}) {
    return(
        <span className="tag">{nom}</span>
    );
}

export default Tag;