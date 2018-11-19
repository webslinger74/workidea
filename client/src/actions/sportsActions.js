import { ADD_BINGO_NUMBERS, GET_BINGO_NUMBERS,
         GET_ERRORS, ADD_SPORTS_EVENT, GET_EVENTS, 
         ADD_CHRISTMAS_PARTY, GET_CHRISTMAS_PARTY, ADD_CELEBRATION_DAY,
        GET_CELEBRATION_DAY, ADD_CHARITY, GET_CHARITY, ADD_SITE_EMAIL, ADD_CONTACT,
        GET_CONTACTS, DELETE_CONTACT, GET_SITE_EMAIL
     }from '../types/types';

import axios from 'axios';


export const addBingoNumber = (number) => (dispatch) => {
    axios.post('/api/sports/bingo', number)
    .then(response => {
        console.log(response, "this is the response from axios in action is it bingo number")
        dispatch({
            type:ADD_BINGO_NUMBERS,
            payload:response.data
        })
    })
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })



}

export const getBingoNumbers = () => (dispatch) => {
    axios.get('/api/sports/bingo')
        .then(response => {
            console.log(response, "the response from get bingo numbers");
            dispatch({
                type:GET_BINGO_NUMBERS,
                payload:response.data
            })
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const addSportsEvent = (event, history) => (dispatch) => {
    axios.post('/api/sports/event', event)
        .then(response => {
            dispatch({
                type:ADD_SPORTS_EVENT,
                payload:response.data
            })
            history.push('/events')
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const addChristmasParty = (party, history) => (dispatch) => {
    axios.post('/api/sports/christmasparty', party)
        .then(response => {
            dispatch({
                type:ADD_CHRISTMAS_PARTY,
                payload:response.data
            })
            history.push('/christmas')
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const deleteChristmasParty = (partyId) => (dispatch) => {
    axios.post('/api/sports/delchristmasparty', partyId)
        .then(response => {
            dispatch(getChristmasParty());
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const addCelebrationDay = (event, history) => (dispatch) => {
    axios.post('/api/sports/celebrationday', event)
        .then(response => {
            dispatch({
                type:ADD_CELEBRATION_DAY,
                payload:response.data

            })
            history.push('/celebration');
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}
export const deleteCelebrationDay = (celebrationId) => (dispatch) => {
    axios.post('/api/sports/delcelebrationday', celebrationId)
        .then(response => {
            dispatch(getCelebrationDay());
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const getCelebrationDay = () => (dispatch) => {
    axios.get('/api/sports/celebrationday')
       
        .then(response => {
            console.log(response, "is this all the events???")
            dispatch({
                type:GET_CELEBRATION_DAY,
                payload:response.data
            })
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}
export const getChristmasParty = () => (dispatch) => {
    axios.get('/api/sports/christmasparty')
       
        .then(response => {
            console.log(response, "is this all the events???")
            dispatch({
                type:GET_CHRISTMAS_PARTY,
                payload:response.data
            })

        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const deleteEvent = (id, history, url) => (dispatch) => {

    console.log(history, "the history")
    console.log(id, "this is the id of the message???")
    axios.post('/api/sports/deleteEvent', id)
    .then(response => {
        dispatch(getEvents());
    })

    url.forEach(element => {
        axios.get(`/api/users/removeimage?public_id=${element.public_id}`)
        .then((response) => {
            console.log("image deleted from cloudinary", url);
            })
            .catch(err => {
                dispatch({
                    type:GET_ERRORS,
                    payload:err
                })
            })
    })

}


export const getEvents = () => (dispatch) => {
    axios.get('/api/sports/events')
       
        .then(response => {
            dispatch({
                type:GET_EVENTS,
                payload:response.data
            })
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const addCharity = (charityDets, history) => (dispatch) => {
        axios.post('/api/sports/charity', charityDets)
        .then(response => {
            console.log(response, "is this all the events???")
            dispatch({
                type:ADD_CHARITY,
                payload:response.data
            })
            history.push('/charity');
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}


export const getCharity = () => (dispatch) => {
    axios.get('/api/sports/charity')
       
        .then(response => {
            console.log(response, "is this all the charity???")
            dispatch({
                type:GET_CHARITY,
                payload:response.data
            })
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const deleteCharity = (id) => (dispatch) => {

    axios.post('/api/sports/deleteCharity', id)
    .then(response => {
        dispatch(getCharity());
    })
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })

}

export const addContact = (contactDets, history) => (dispatch) => {
    axios.post('/api/sports/contact', contactDets)
    .then(response => {
        history.push('/sports/contacts');
    })
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })
}
export const getContacts = () => (dispatch) => {
    axios.get('/api/sports/contacts')
       
        .then(response => {
            dispatch({
                type:GET_CONTACTS,
                payload:response.data
            })
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const deleteContact = (id) => (dispatch) => {

    axios.post('/api/sports/deleteContact', id)
    .then(response => {
        dispatch(getContacts());
    })
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })

}
export const addSiteEmail = (siteEmail, history) => (dispatch) => {
    axios.post('/api/sports/siteEmail', siteEmail)
    .then(response => {
        console.log(response, "is this all the events???")
        dispatch({
            type:ADD_SITE_EMAIL,
            payload:response.data
        })
        history.push('/sports/contacts');
    })
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })
}
export const getSiteEmail = () => (dispatch) => {
    axios.get('/api/sports/siteEmail')
       
        .then(response => {
            dispatch({
                type:GET_SITE_EMAIL,
                payload:response.data
            })
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const deleteSiteEmail = (id) => (dispatch) => {

    axios.post('/api/sports/deleteSiteEmail', id)
    .then(response => {
        dispatch(getSiteEmail());
    })
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })

}