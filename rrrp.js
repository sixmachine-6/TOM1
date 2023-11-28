const input1 =document.getElementById("input1");
const input2 =document.getElementById("input2");
const input3 =document.getElementById("input3");
const input5 =document.getElementById("input5");
const input6 =document.getElementById("input6");
const para1=document.getElementById("para1");
const para=document.getElementById("para");
const para2=document.getElementById("para2");
function validateandstore(){
 if (input1.value <= 0 || input2.value <= 0 || input3.value <= 0) {
    alert("Please enter positive values only.");
} else if(input1.value >= 0 && input2.value >= 0 && input3.value >= 0){
    if(parseInt(input1.value)+parseInt(input3.value)<=parseInt(input2.value)){
        para.innerText="the given chain is grashoff";
    }
    else{
        para.innerText="the given chain is not grashoff";
    }
}
else {
    const inputsArray = [parseInt(input1.value), parseInt(input2.value), parseInt(input3.value)];
    console.log("Inputs stored in array:", inputsArray);
    const arr=[];
    arr.push(inputsArray.sort());
    console.log(arr[0]);
}
    
}
function sliderlength(){
    if (input1.value <= 0 || input2.value <= 0 || input3.value <= 0) {
        alert("Please enter positive values only.");
    } 
    else if(input5.value<=0){
        alert("wrong input angle");
    }
    else {
        const inputsArray = [parseInt(input1.value), parseInt(input2.value), parseInt(input3.value)];
        console.log("Inputs stored in array:", inputsArray);
        const l2=inputsArray[0];
    const l3=inputsArray[1];
    const e=inputsArray[2];
    console.log(l2,l2,e);
    const inputangle=parseFloat(input5.value);
    console.log(inputangle);
    const C1=-2*(l2*(Math.cos((inputangle*Math.PI)/180)));
    console.log("value of c1",C1);
    const C2=((l2*l2)+(e*e)-(l3*l3))-2*(l2*(e*(Math.sin((inputangle*Math.PI)/180))));
    console.log("value of c2",C2);
    const s=Math.sqrt(((C1*C1)-(4*C2)));
    const X=parseInt(((-C1)+(s))/(2));
    console.log(X);
    para1.innerText=`the slider length is ${X} cm`;
    }
}
function velocity(){
    if (input1.value <= 0 || input2.value <= 0 || input3.value <= 0) {
        alert("Please enter positive values only.");
    } 
    else if(input5.value<=0){
        alert("wrong input angle");
    }
    else  if(input6.value<=0){
        alert("wrong inputs");
    }
    else {
        const inputsArray = [parseInt(input1.value), parseInt(input2.value), parseInt(input3.value)];
        console.log("Inputs stored in array:", inputsArray);
    const l2=inputsArray[0];
    const l3=inputsArray[1];
    const e=inputsArray[2];
    console.log(l2,l3,e);
    const inputangle=parseFloat(input5.value);
    console.log(inputangle);
    const C1=-2*(l2*(Math.cos((inputangle*Math.PI)/180)));
    console.log("value of c1",C1);
    const C2=((l2*l2)+(e*e)-(l3*l3))-2*(l2*(e*(Math.sin((inputangle*Math.PI)/180))));
    console.log("value of c2",C2);
    const s=Math.sqrt(((C1*C1)-(4*C2)));
    const X=parseInt(((-C1)+(s))/(2));
    console.log(X);
    const V=2*(l2*(Math.cos((inputangle*Math.PI)/180))-X*(Math.sin((inputangle*Math.PI)/180)));
    console.log(V);
    const Z=X-l2*(Math.cos((inputangle*Math.PI)/180));
    console.log(Z);
    const velocity1=parseInt((V/Z)*input6.value);
    console.log(velocity1);  
    para2.innerText=`the velocity of the slider is ${velocity1} cm/s`;
}
}