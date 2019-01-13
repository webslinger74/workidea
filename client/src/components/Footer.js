import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import App from './MediaPlayer';

const Footer = () => {

    window.addEventListener("load", function(e){
        const nodes =  document.querySelectorAll('[data-popup');
        for(let i=0; i<nodes.length; i++){
           let ctrl = document.createElement("span");
           ctrl.innerHTML = "&times;";
           ctrl.setAttribute("data-control", "close");
           ctrl.addEventListener("click", function(e){
               this.parentNode.setAttribute("data-popup", "closed");
           });
           nodes[i].appendChild(ctrl);
        } 
        
        
        var outerNodes = document.querySelectorAll('[href^="#"]');
        for(let i=0; i<outerNodes.length; i++){
            outerNodes[i].addEventListener("click", function(e){
                let box = document.querySelector(this.getAttribute("href"));
                if(box != null && box.hasAttribute("data-popup")){
                    box.setAttribute("data-popup", "open");
                }
            })
        }
        });


    return (
        
        <div className="footer">
    
                <div className="logo">
                    SITE NAME
                </div>
                <div className="wrapper">
                    <div className="left">
                        <h2>Contact information</h2>
                        <div className="business_nfo">
                            <div className="tag">
                             <a href="#box1"><FontAwesomeIcon
                                    icon={faCompass}
                                    className="icon"
                                /></a>
                                <article id="box1" data-popup>Goods House,
                                                         Walters Road,
                                                         Chiltern,
                                                         UK,
                                                         M1 5DD</article>
                                <div className="nfo">
                                    <div>Address</div>
                                    <div>GOODS HOUSE</div>
                                </div>
                            </div>
                            <div className="tag">
                            <a href="#box2"><FontAwesomeIcon
                                    icon={faPhone}
                                    className="icon"
                                /></a>
                                  <article id="box2" data-popup>Main: 0143 881 5454,
                                                                    BST: 0143 881 3423</article>
                                <div className="nfo">
                                    <div>Phone</div>
                                    <div>0143 881 0000</div>
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
                                    <div>goods@info.uk</div>
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
        
                        <h2>Copyright 2019</h2>
                        <div>
                            <div>
                            Full design rights by ***
                            </div>
                        </div>
                    </div> 
                    </div>         
                </div>
        </div>
    
    );
};

export default Footer;