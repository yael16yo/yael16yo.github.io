import React, { useRef } from "react";
import FilledStar from "@/assets/img/stars-filled.svg";
import EmptyStar from "@/assets/img/stars-empty.svg";

export default function RatingStars({ rating }) {
    const totalStars = useRef(5);
  
    return (
        <div className="rating-stars">
            {[...Array(totalStars.current)].map((_, index) => (
                    <img src={index < rating ? FilledStar : EmptyStar} alt="" key={index}/>
            ))}
        </div>
    );
  }