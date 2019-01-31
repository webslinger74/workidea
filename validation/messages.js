const Validator = require('validator');
const isEmpty = require('./is-Empty');

const ValidateMessageInput = (data) => {
    let errors = {};

     console.log(data, "data in messages validator");
    data.publish = !isEmpty(data.publish) ? data.publish : "";
    data.author = !isEmpty(data.author) ? data.author : "";
    data.title = !isEmpty(data.title) ? data.title : "";
    data.message = !isEmpty(data.message) ? data.message : "";
    
    if(Validator.isEmpty(data.publish)) {
        errors.publish = "Publish Field is required";
    //    console.log("Publish Field is required")
    }
    if(Validator.contains("false", data.publish)) {
        errors.publish = "Publish must be set to true to create message";
   //     console.log("Publish must be set to true to create message")
    }
    if(Validator.isEmpty(data.author)) {
     //   console.log("this is the wrong data", data.author, typeof(data.author), "data in author");
       // console.log(!Validator.isEmpty(data.author), "is validiator true or false");
       errors.author = "Author field is required";
     //   console.log("author field is required");
    }
    if(Validator.isEmpty(data.title)) {
        errors.title = "Title field is required";
    }
    if(Validator.isEmpty(data.message)) {
        errors.message = "A message is required";
    }
    if(!Validator.isLength(data.message, {min:10, max:5000})){
        errors.message = "Messages must be between 10 and 5000 words";
    }

//    console.log(errors, "errors", isEmpty(errors), "isvalid"); 
            return {
                errors,
                isValid: isEmpty(errors)
            }

}

module.exports = ValidateMessageInput;