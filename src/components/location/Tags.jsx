import React from 'react';

const Tags = ({ tags }) => (
    <div className='wrapper__titles-and-informations__title-location-tags__tags'>
        {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
        ))}
    </div>
);

export default Tags;