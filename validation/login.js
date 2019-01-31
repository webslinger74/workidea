const Validator = require('validator');
const isEmpty = require('./is-Empty');

const ValidateLoginInput = (data) => {
    let errors = {};

       //     console.log(data.staffnumber, "staffnumber in val");
       //     console.log(data.password, "password in val");
    data.staffnumber = !isEmpty(data.staffnumber) ? data.staffnumber : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    
    if(Validator.isEmpty(data.staffnumber)) {
        errors.staffnumber = "Staff Number is required";
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if(!Validator.isLength(data.password, {min:6, max:35})){
        errors.password = "Password must be between 6 and 35 characters";
    }

//    console.log(errors, "errors", isEmpty(errors), "isvalid");
            return {
                errors,
                isValid: isEmpty(errors)
            }

}

module.exports = ValidateLoginInput;