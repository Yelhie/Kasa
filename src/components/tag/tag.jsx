import React from "react";
import './tag.scss';

function Tags({ tags }) {
    return (
        <div className="tags">
            <ul className="tag_texte">
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tags;