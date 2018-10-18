   class NumToRoman {

        constructor(){
            const singles = this.createRomanStructure("I","V","X");
            const tens = this.createRomanStructure("X","L","C");
            const hundreds = this.createRomanStructure("C","D","M");
            const thousands = this.createRomanStructure("M","M","M");
       
            this.RomanObjectUnits = [singles, tens, hundreds, thousands]
        }
            createRomanStructure(a,b,c){
                return {
                    1:a,
                    2:a + a,
                    3:a + a + a,
                    4:a + b,
                    5:b,
                    6:b + a,
                    7:b + a + a,
                    8:b + a + a + a,
                    9:a + c
                }
               
            }

         romanCalc(int){

            if(int === 0){
                return console.log("Roman numerals do not have a value for Zero or 0")
            }
            if(int >=4000 || int <0){
                return console.log("Can only calculate between 0 and 3999");
            }
             const str = int.toString();
             const romArr = [];
                 for(let i=0; i<str.length; i++){
                     romArr.push(str[i])
                 };
                 const arrLength = romArr.length;
     
                 let totalString = "";
                 let j=0;
                 for(let i=arrLength; i>0; i--){
                     for(let key in this.RomanObjectUnits[i-1]){
                         if (key === romArr[j]){
                             totalString = totalString + this.RomanObjectUnits[i-1][key];
                         }
                     }
                     j++
                 }
                 console.log(`Number input:${int} = RomanNumeral of this = ${totalString}`);
             }
}
   
const BBCexample = new NumToRoman();
BBCexample.romanCalc(-20);
BBCexample.romanCalc(0);
BBCexample.romanCalc(5);
BBCexample.romanCalc(95);
BBCexample.romanCalc(325);
BBCexample.romanCalc(679);
BBCexample.romanCalc(3999);
BBCexample.romanCalc(4000);


/*IDEAS BEFORE TURNING A PC ON //////////////////////

1 need to input an integer to a function
2 will check that value against the options of Roman Numerals
3 if get a match will need to store this and then add numbers together
4 convert input to a string to loop through then put values into an array
5 create an array of objects for the roman numerals
6 decided to put into thousands, hundreds, tens, and units and match with key:value pairs

*/
   

// first attempt to get this working using a function and an array of objects.
// with console.logs to check variable's were being passed as expected.

/*
   const RomanObjectUnits =[  
      {
        1:"I",
        2:"II",
        3:"III",
        4:"IV",
        5:"V",
        6:"VI",
        7:"VII",
        8:"VIII",
        9:"IX"
        },  
        {
            1:"X",
            2:"XX",
            3:"XXX",
            4:"XL",
            5:"L",
            6:"LX",
            7:"LXX",
            8:"LXXX",
            9:"XC"
            },
         {
            1:"C",
            2:"CC",
            3:"CCC",
            4:"CD",
            5:"D",
            6:"DC",
            7:"DCC",
            8:"DCCC",
            9:"CM"
           },
           {
                                1:"M",
                                2:'MM',
                                3:'MMM'
                                }
                                        ]                     
    
    console.log(RomanObjectUnits[0]);
 
  
  

    
   romanCalc = (int) => {
       if(int >=4000 || int <0){
           return console.log("Can only calculate between 0 and 3999");
       }
       
      
       
     //   get the integer and split into array
        const str = int.toString();
        const romArr = [];
            for(let i=0; i<str.length; i++){
                romArr.push(str[i])
            };
            console.log(romArr, "this is the array")
            console.log(romArr.length);
            const arrLength = romArr.length;

            let totalString = "";
            let j=0;
            for(let i=arrLength; i>0; i--){
                console.log(i, "what is i")
                for(key in RomanObjectUnits[i-1]){
                    if (key === romArr[j]){
                        console.log(j,"this is j pre add")
                        totalString = totalString + RomanObjectUnits[i-1][key];
                        console.log(j, "this is j")
                    }
                
                }
                j++
            }
            console.log(`Number input:${int} = RomanNumeral of this = ${totalString}`);
        }


        romanCalc(2999);
*/        
   