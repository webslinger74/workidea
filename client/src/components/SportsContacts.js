import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sports from './Sports';
import { withRouter } from 'react-router-dom';
import { deleteContact, getContacts, getSiteEmail, deleteSiteEmail } from '../actions/sportsActions';

class SportsContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

         componentDidMount(){
            this.props.getContacts();
            this.props.getSiteEmail();
        }

    showContacts = (contacts) => (

        
       contacts && contacts.map(contact => (
           <div key={contact._id}>
               
             <div className="indSportsContactDetails">
          
                    <div>
                    {contact.images && contact.images.length > 0 ?
                           <div>
                               {contact.images.map((image, index) => (
                                   <img key={index} className="sportsContactsImg" src={image.url}></img>
                               ))                 }
                               </div> : null
                    }
                   <div> <h3> {contact.contactName} </h3> </div>
                    </div>         
                           
            
                <div> <h3 style={{paddingLeft:'5px', paddingRight:'25px', color:'green'}}> {contact.contactEmail}</h3> 
                        <h4> {contact.position}  </h4></div>

            <div onClick={()=> this.props.deleteContact({id:contact._id}, this.props.history)} className="delete">Del</div>
                        
             </div>
               <div className="contactBorder"></div>
           </div>   
         ))
      
        )

        showSiteEmail = (siteEmail) => {

            if(siteEmail && siteEmail[0]) {
                return (
                      <div className="latestMessageContacts" key={siteEmail[0]._id}>
                    <div>
                    <div><span style={{fontSize:'35px'}}>Sports & Social Email Address: </span> {siteEmail[0].siteEmail} </div>
                         </div>

                    <div onClick={()=> this.props.deleteSiteEmail({id:siteEmail[0]._id}, this.props.history)} className="delete">DEL</div>
                        </div>
                )
                             }

                 }
      
            
           
             

      render(){

        const { contacts, siteEmail } = this.props;

    return (
        <Sports>
        <div>

                            {this.showSiteEmail(siteEmail)}

        <div className="sportsContactsContainer">
                             {this.showContacts(contacts)}
                             </div>

      </div>
      </Sports>
      )
    }
}

const actions = {
    deleteContact,
    getContacts,
    getSiteEmail,
    deleteSiteEmail
}

const mapStateToProps = (state) => ({
    contacts:state.sports.contacts,
    siteEmail:state.sports.siteEmail
})
 
export default connect(mapStateToProps, actions)(withRouter(SportsContacts));