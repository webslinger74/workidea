const numberGuess = (num) => 
    new Promise((resolve, reject) => {
        if(num === 5){
           resolve("you guessed correct with " + num);
        }
        else reject("better luck next time!! the number " + num  + " is incorrect!");
    })


numberGuess(5).then((guessedCorrect) => {
    console.log(guessedCorrect);
}).catch((error) => {
    console.log(error);
})
numberGuess(4).then((guessedCorrect) => {
    console.log(guessedCorrect);
}).catch((error) => {
    console.log(error);
})


/// Promise with setTimeOut! /////////////////////////////


const promiseDelay = (ms) => new Promise((resolve,reject) => {
   setTimeout(resolve("the delay was " + ms/1000 + " seconds"),ms);
});

promiseDelay(700).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});

/// do this as a call back!! ////////

const callBackDelay = (ms, callback) => setTimeout(() => callback(ms),ms);



callBackDelay(100, (response) => console.log(response/1000 + " seconds")
)

// do it with async await //////////////////////

const asyncDelay = (ms) => new Promise((resolve,reject) => {
    setTimeout(resolve("the delay was " + ms/1000 + " seconds"),ms);
 });
 
async function howLong(ms){
    await asyncDelay(ms).then((result) => {
        console.log(result);
    })
}

howLong(1450);


///////////////////////////////////////////////////////////////////

const tellMeItsMonday = (day) => new Promise((resolve,reject) => {
            if(day === "Monday"){
                resolve("you guessed correct with " + day)
            } else {
                reject("wrong day try again you chose " + day)
            }
})
async function asyncCall(day) {
     await tellMeItsMonday(day).then((result) => {
         console.log(result);
     }).catch((error) => {
        console.log(error);
    })
}
asyncCall("tuesday");
asyncCall("Monday");
asyncCall("Thursday");
asyncCall("Monday");

