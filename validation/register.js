const Validator = require('validator');
const isEmpty = require('./is-Empty');

const ValidateRegisterInput = (data) => {
    let errors = {};


    data.name = !isEmpty(data.name) ? data.name : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.role = !isEmpty(data.role) ? data.role : 1;

    if(!Validator.isLength(data.name, {min:8, max:8})){
        errors.name = "Staff number must be 8 characters";
    }
    if(Validator.isEmpty(data.name)) {
        errors.name = "Staff number field is required";
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if(!Validator.isLength(data.password, {min:6, max:12})){
        errors.password = "Password must be between 6 and 12 characters";
    }
    return {
            errors,
            isValid: isEmpty(errors)
            }

}

module.exports = ValidateRegisterInput;