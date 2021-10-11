// Caaaaaaaaaaaaaaaaaaaaaaaaaaalc
let myBtns = document.querySelectorAll(".main div"); 
let myInput = document.querySelector("input");
let myRegX = "^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$";
let float = 0;
let doneToCalc = false;
myInput.value.match(myRegX);
myBtns.forEach((ele) => {
    ele.addEventListener("click" , (e) =>{
        if(e.target.id === "reset") {myInput.value = "" , float = 0; doneToCalc = false}
        else if(e.target.id === "del") {
            if(myInput.value.charAt(myInput.value.length - 1) === ",") {float = 0;}
            myInput.value = myInput.value.slice(0 , myInput.value.length - 1)
            if(myInput.value === "" || (
            myInput.value.split("").includes("+") === false &&
            myInput.value.split("").includes("*") === false &&
            myInput.value.split("").includes("-") === false &&
            myInput.value.split("").includes("/") === false )
            ) {float = 0 , doneToCalc = false} 
        }
        else if(e.target.id === "imp") {
            
            if(myInput.value === "" || ["+" , "-" , "\\" , "*" , ","].includes(myInput.value[myInput.value.length - 1])) {

            }
            else {
                float = 0;
                doneToCalc = true;
                myInput.value+="+"
            }        
        }
        else if(e.target.id === "min") {
            if(myInput.value === "" || ["+" , "-" , "\\" , "*" , ","].includes(myInput.value[myInput.value.length - 1])) {

            }
            else {
                doneToCalc = true;
                float = 0;
            myInput.value+="-"
        } }
        else if(e.target.id ==="x") {
            if(myInput.value === "" || ["+" , "-" , "\\" , "*" , ","].includes(myInput.value[myInput.value.length - 1])) {

            }
            else {
                doneToCalc = true
                float = 0;
            myInput.value+="*";
        }}
        else if(e.target.id === "div") {
            if(myInput.value === "" || ["+" , "-" , "\\" , "*"].includes(myInput.value[myInput.value.length - 1])) {

            }
            else {
                doneToCalc = true
                float = 0;
                myInput.value+="/"
            }
        }
        else if(e.target.id === ".") {
            if(float === 0 && !(["+" , "-" , "\\" , "*"].includes(myInput.value[myInput.value.length - 1]))){ 
                myInput.value+=","
                float = 1;
            }
            }
            else if(e.target.id === "equal") {
                if(doneToCalc){
                myInput.value = eval(myInput.value)
                }
               
            }
        
        
        else {
            myInput.value+=ele.id
        }
        
    })
}
)
// Caaaaaaaaaaaaaaaaaaaaaaaaaaalc



// Themes

let mySpans = document.querySelectorAll(".spans span");
let root = document.documentElement
mySpans.forEach((span) => {
    span.addEventListener("click" , (e) => {
        if(e.target.className === "one") {
            root.style.setProperty("--background-color" ,"rgb(58, 71, 100)")
            root.style.setProperty("--head-text" ,"white")
            root.style.setProperty("--input-background" , "rgb(24, 32, 52)")
            root.style.setProperty("--container-numbers-background" , "rgb(35, 44, 67)")
            root.style.setProperty("--numbers-color" , "rgb(68, 75, 90)")
            root.style.setProperty("--del-rest-background" , "rgb(99, 112, 151)")
            root.style.setProperty("--del-rest-color" , "white")
            root.style.setProperty("--cicle-equal" , "rgb(208, 63, 47)")
            root.style.setProperty("--equl-color" , "rgb(68, 75, 90)")
            root.style.setProperty("--cicle-pos" , "6px")
        }
        else if(e.target.className === "two") {
            root.style.setProperty("--background-color" ,"rgb(230,230,230)")
            root.style.setProperty("--head-text" ,"rgb(59,72,80)")
            root.style.setProperty("--input-background" , "rgb(237,237,237)")
            root.style.setProperty("--container-numbers-background" , "rgb(209,204,204)")
            root.style.setProperty("--numbers-color" , "rgb(53,53,44)")
            root.style.setProperty("--del-rest-background" , "rgb(55,127,134)")
            root.style.setProperty("--del-rest-color" , "rgb(255,255,255)")
            root.style.setProperty("--cicle-equal" , "rgb(202,85,2)")
            root.style.setProperty("--equl-color" , "rgb(253,247,247)")
            root.style.setProperty("--cicle-pos" , "25px")

        }
        else {

            root.style.setProperty("--background-color" ,"rgb(22,6,40)")
            root.style.setProperty("--head-text" ,"rgb(255,229,61)")
            root.style.setProperty("--input-background" , "rgb(52,28,79)")
            root.style.setProperty("--container-numbers-background" , "rgb(29,9,52)")
            root.style.setProperty("--numbers-color" , "rgb(235,229,3)")
            root.style.setProperty("--del-rest-background" , "rgb(88,7,125)")
            root.style.setProperty("--del-rest-color" , "rgb(255,255,255)")
            root.style.setProperty("--cicle-equal" , "rgb(0,117,255)")
            root.style.setProperty("--equl-color" , "rgb(0 , 0 , 0)")
            root.style.setProperty("--cicle-pos" , "39px")
        }
    })
}

)