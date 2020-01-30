//степень

function powerFunc(base,pow){
    if(base==="0") {
        alert(0);
        return;
    }
    else if(pow==="0") {
        alert(1);
        return;
    }
    else {
        base = +base;
        pow = +pow;
        if(!base||!pow){
            alert('Введите число и степень. Цифрами.');
            return;
        }
    }
        let res=1;
        while(pow>0){
            res*=base;
            pow--;
        }
        alert(res);
    
}

let userNumber=prompt("Введите число"),
    userPow=prompt("Введите степень");

powerFunc(userNumber,userPow);
  

//вывод аргументов

function logArgsFunc(){
    if(!arguments.length) {console.log(`No arguments in function \n`);return}
    else{
        for(let i=0;i<arguments.length;i++){
            if(typeof(arguments[i])==="function"){
                arguments[i]();
                console.log("A function was called");
                continue;
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