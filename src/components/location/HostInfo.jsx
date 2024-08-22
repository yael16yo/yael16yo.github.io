import React from 'react';
import RatingStars from "@/components/location/RatingStars";

const HostInfo = ({ host, rating }) => (
    <div className='wrapper__titles-and-informations__host-logo-rating'>
        <div className='wrapper__titles-and-informations__host-logo-rating__host'>
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
        </div>
        <div className='wrapper__titles-and-informations__host-logo-rating__stars'>
            <RatingStars rating={parseInt(rating)} />
        </div>
    </div>
);

export default HostInfo;