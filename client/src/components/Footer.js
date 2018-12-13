import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';


const Footer = () => {
    return (
        
        <div className="footer">
                <div className="logo">
                    CHORLTON
                </div>
                <div className="wrapper">
                    <div className="left">
                        <h2>Contact information</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faCompass}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Address</div>
                                    <div>GRAEMES HOUSE</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Phone</div>
                                    <div>0161 881 0000</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Working hours</div>
                                    <div>Mon-Fri/ 8am - 6.30pm</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Email</div>
                                    <div>chorlton@info.uk</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="rightside">
                    <div className="right_item">
                        <h2>Be the first to know</h2>
                        <div>
                            <div>
                            Get all the latest information on events, sales and offers.You can miss out.
                            </div>
                        </div>
                    </div>  
                
                    <div className="right_item">
        
                        <h2>Copyright 2018</h2>
                        <div>
                            <div>
                            Full design rights by Steven Webster
                            </div>
                        </div>
                    </div> 
                    </div>         
                </div>
        </div>
    
    );
};

export default Footer;