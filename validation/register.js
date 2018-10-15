const Validator = require('validator');
const isEmpty = require('./is-Empty');

const ValidateRegisterInput = (data) => {
    let errors = {};


    data.name = !isEmpty(data.name) ? data.name : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    data.role = !isEmpty(data.role) ? data.role : 0;

    if(!Validator.isLength(data.name, {min:2, max:30})){
        errors.name = "Name must be between 2 and 30 characters";
    }
    if(Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    if(!Validator.isLength(data.lastName, {min:2, max:30})){
        errors.lastName = "LastName must be between 2 and 30 characters";
    }
    if(Validator.isEmpty(data.lastName)) {
        errors.lastName = "LastName field is required";
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }
    if(!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if(!Validator.isLength(data.password, {min:6, max:32})){
        errors.password = "Password must be between 6 and 32 characters";
    }
    if(Validator.isEmpty(data.password2)) {
        errors.password2 = "confirm password field is required";
    }
    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = "passwords must match";
    }
            return {
                errors,
                isValid: isEmpty(errors)
            }

}

module.exports = ValidateRegisterInput;