import React from 'react';
import DropDown from "@/components/dropdown/dropdown";

const LocationDetails = ({ description, equipments }) => (
    <div className='wrapper__dropdown'>
        <div className='wrapper__dropdown__column'>
            <DropDown title='Description' text={description} />
        </div>
        <div className='wrapper__dropdown__column'>
            <DropDown title='Equipements' text={equipments.map((equipment, index) => (
                <span key={index}>{equipment}</span>
            ))} />
        </div>
    </div>
);

export default LocationDetails;