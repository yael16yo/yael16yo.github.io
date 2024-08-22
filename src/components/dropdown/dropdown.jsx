import React, { useState, useRef, useEffect } from 'react';
import ChevronDropdown from '@/assets/img/dropdown.svg';

export default function DropDown({id, title, text}) {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const detailsRef = useRef(null);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setHeight(isOpen ? `${detailsRef.current.scrollHeight}px` : '0px');
    }, [isOpen]);
    

    return (
        <>
            <div className='dropdown' key={id}>
                <div className='summary'>
                    <div>{title}</div>
                    <div onClick={toggleDropdown}><img className={`chevron_dropdown ${isOpen ? 'open' : ''}`} src={ChevronDropdown} alt='Dropdown icon'/></div>
                </div>
                <div ref={detailsRef} className='details_dropdown' style={{ height, transition: 'height 0.25s ease' }} key={id}>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}