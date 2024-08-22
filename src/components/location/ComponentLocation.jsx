import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Database from '@/assets/datas/database.json';
import Error from "@/components/error/error";
import CustomCarousel from "./CustomCarousel";
import HostInfo from "./HostInfo";
import LocationDetails from "./LocationDetails";
import Tags from "./Tags";

export default function ComponentLocation() {
    let { id } = useParams();
    const [data, setData] = useState(null);
  
    useEffect(() => {
        const locationData = Database.find((data) => data.id === id);
        setData(locationData);
    }, [id]);
  
    if (!data) {
        return <Error />;
    }

    return (
        <div className='wrapper__information-location'>
            <div className='wrapper__information-location__carousel'>
                <CustomCarousel images={data.pictures} />
            </div>
            <div className="wrapper__titles-and-informations">
                <div className="wrapper__titles-and-informations__title-location-tags">
                    <h2>{data.title}</h2>
                    <p>{data.location}</p>
                    <Tags tags={data.tags} />
                </div>
                <HostInfo host={data.host} rating={data.rating} />
            </div>
            <LocationDetails description={data.description} equipments={data.equipments} />
        </div>
    );
}
