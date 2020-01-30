//степень

function powerFunc(base,pow){
    if(base===0) return 0;
    else if(pow===0) return 1;

        let res=1;
        while(pow>0){
            res*=base;
            pow--;
        }
        return res;
    
}

function test(testValue){
if(testValue==="0") return +testValue;
if(!+testValue) { return "nope"}
return +testValue;
}

let userNumber=test(prompt("Введите число")),
    userPow=test(prompt("Введите степень"));
if(userNumber==="nope"||userPow==="nope") alert("Введите число и степень. Цифрами.")
else alert(powerFunc(userNumber,userPow));



//вывод аргументов

function logArgsFunc(){
    if(!arguments.length) {console.log(`No arguments in function \n`);return}
    else{
        for(let i=0;i<arguments.length;i++){
            if(typeof(arguments[i])==="function"){
                arguments[i]();
                console.log("A function was called");
            }
            else{
                console.log(`${arguments[i]}, type ${typeof(arguments[i])} \n`)
            }
        }
    }
}

let uselessFunction = function() {console.log("I'm a function")}

logArgsFunc();
logArgsFunc(100);
logArgsFunc(100,'test',uselessFunction);


//палиндром
function checkPalindrome(testString){
    let invertedString="";
    for(let i=testString.length-1;i>=0;i--){
        invertedString+=testString[i];
    }
    return testString===invertedString;
}

let userString = (prompt('Введите строку'));
if(userString){
    let isPal=checkPalindrome(userString);
    alert(isPal?"Палиндром":"Не палиндром")
}