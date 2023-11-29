import React from "react";

function Tags({ tags }) {
    return (
        <div className="Tag">
            <ul className="TagTxt">
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tags;