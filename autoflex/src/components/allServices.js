import React, { useEffect, useState } from 'react';
import '../css/allServices.css';
import {RiPulseFill} from 'react-icons/ri'
import servicesData from '../json/service.json';

const AllServices = () => {
    const [services] = useState(servicesData);
    useEffect(() => {
    }, []);
    

    return (
        <div className="services">
            <div className="services-header">
                <RiPulseFill className="icon" />
                <h3>ČO PONÚKAME?</h3>
            </div>
            <h1>OBJAVTE NAŠE SLUŽBY</h1>
            
            <div className="services-boxes">
                {services.map((service, index) => (
                    <div className="service-box" key={index}>
                        <img src={service.photoUrl} alt={service.title} className="service-photo" />
                        <h4 className="service-title">{service.title}</h4>
                    </div>
                ))}
            </div>
            <div className='lastRec'>
                <h2>VIAC O NAŠÍCH SLUŽBÁCH</h2>
            </div>
        </div>
    );
};

export default AllServices;