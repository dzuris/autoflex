import React, { useEffect, useState } from 'react';
import '../css/allServices.css';
import {RiPulseFill} from 'react-icons/ri'
import servicesData from '../json/service.json';
import { Link } from 'react-router-dom';

const AllServices = () => {
    const [services] = useState(servicesData);
    useEffect(() => {
    }, []);
    

    return (
        <div className="all-services">
            <div className="all-services-header">
                <RiPulseFill className="all-icon-r" />
                <h3>ČO PONÚKAME?</h3>
            </div>
            <h1>OBJAVTE NAŠE SLUŽBY</h1>
            
            <div className="all-services-boxes">
                {services.map((service, index) => (
                    <div className="all-service-box" key={index}>
                        <img src={service.photoUrl} alt='As' className="all-service-photo" />
                        <h4 className="all-service-title">{service.title}</h4>
                    </div>
                ))}
            </div>
                <div className='all-lastRec'>
                    <Link to="/service" className="all-lastRec">
                        <span>VIAC O NAŠÍCH SLUŽBÁCH</span>
                    </Link>
                </div>
        </div>
    );
};

export default AllServices;
