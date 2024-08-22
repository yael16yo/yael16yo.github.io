import React from 'react';
import Database from '@/assets/datas/database.json';
import { Link } from "react-router-dom";

const Card = ({ id, title, imageUrl }) => {
    const cardStyle = {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
  
    return (
      <Link to={`/viewlocation/${id}`} key={id} className='main-content__wrapper__container-locations__location' style={cardStyle}>
        <span></span>
        <p>{title}</p>
      </Link>
    );
  }

  

  export default function Cards() {
    const listLocations = Database.map(location =>
      <Card
        key={location.id}
        id={location.id}
        title={location.title}
        imageUrl={location.pictures[0]}
      />
    );
  
    return <div className='main-content__wrapper__container-locations'>{listLocations}</div>;
  }