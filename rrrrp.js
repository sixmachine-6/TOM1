const input1 =document.getElementById("input1");
const input2 =document.getElementById("input2");
const input3 =document.getElementById("input3");
const input4 =document.getElementById("input4");
const input5 =document.getElementById("input5");
const input6 =document.getElementById("input6");
const input7 =document.getElementById("input7");
const para1=document.getElementById("para1");
const para=document.getElementById("para");
const para2=document.getElementById("para2");
function validateandstore(){
 if (input1.value <= 0 || input2.value <= 0 || input3.value <= 0 || input4.value <= 0 || input5.value<=0) {
    alert("Please enter positive values only.");
} 
else {
    const inputsArray = [parseInt(input1.value), parseInt(input2.value), parseInt(input3.value),parseInt( input4.value)];
    console.log("Inputs stored in array:", inputsArray);
    const arr=[];
    arr.push(inputsArray.sort());
    console.log(arr[0]);
    const max=Math.max(...inputsArray);
   console.log(max);
   const min=Math.min(...inputsArray);
   console.log(min);
   const p=inputsArray.filter((value)=>{
    if(value !==max && value!==min){
        return value;
    }
   });
   console.log(p);
   if(max+min<=p[0]+p[1]){
    para.innerText="the given chain is grashoff";
   }
   else{
    para.innerText="the given chain is not grashoff";
   }
}
}
function outputangle(){
    if (input1.value <= 0 || input2.value <= 0 || input3.value <= 0 || input4.value <= 0) {
        alert("Please enter positive values only.");
    } 
    else if(input5.value<=0){
        alert("wrong input angle");
    }
    else {
        const inputsArray = [parseInt(input1.value), parseInt(input2.value), parseInt(input3.value),parseInt( input4.value)];
        console.log("Inputs stored in array:", inputsArray);
        const l1=inputsArray[0];
    const l2=inputsArray[1];
    const l3=inputsArray[2];
    const l4=inputsArray[3];
    console.log(l1,l2,l3,l4);
    const inputangle=parseFloat(input6.value);
    console.log(inputangle);
    const C1=Math.sin(((inputangle*Math.PI)/180));
    console.log("value of c1",C1);
    const C2=(Math.cos(((inputangle*Math.PI)/180)))-(l1/l2);
    console.log("value of c2",C2);
    const y=-((Math.cos((inputangle*Math.PI)/180))*l1)/l4;
    const z=(((l1*l1)+(l2*l2)+(l4*l4)-(l3*l3))/(2*l2*l4));
    const C3=y+z;
    console.log("value of c3",C3);
    const s=Math.sqrt(((C1*C1)+(C2*C2))-(C3*C3));
    console.log("s is",s);
    const X=((C1-(s))/(C2+C3));
    console.log("value of x",X);
    const outputangle=parseInt(2*((180*(Math.atan(X)))/Math.PI));
    console.log( outputangle);
    para1.innerText=`the output angle is ${outputangle} deg`;
    }
}

function sliderlength(){
    if (input1.value <= 0 || input2.value <= 0 || input3.value <= 0 || input4.value <= 0 || input5.value<=0) {
        alert("Please enter positive values only.");
    } 
    else if(input5.value<=0){
        alert("wrong input angle");
    }
    else  if(input6.value<=0){
        alert("wrong inputs");
    }
    else {
        const inputsArray = [parseInt(input1.value), parseInt(input2.value), parseInt(input3.value),parseInt( input4.value)];
        console.log("Inputs stored in array:", inputsArray);
        const l1=inputsArray[0];
    const l2=inputsArray[1];
    const l3=inputsArray[2];
    const l4=inputsArray[3];
    console.log(l1,l2,l3,l4);
    const inputangle=parseFloat(input6.value);
    console.log(inputangle);
    const C1=Math.sin((inputangle*Math.PI)/180);
    console.log("value of c1",C1);
    const C2=(Math.cos(((inputangle*Math.PI)/180)))-(l1/l2);
    console.log("value of c2",C2);
    const y=-((Math.cos((inputangle*Math.PI)/180))*l1)/l4;
    const z=(((l1*l1)+(l2*l2)+(l4*l4)-(l3*l3))/(2*l2*l4));
    const C3=y+z;
    console.log("value of c3",C3);
    const s=Math.sqrt(((C1*C1)+(C2*C2))-(C3*C3));
    console.log("s is",s);
    const X=((C1+(s))/(C2+C3));
    console.log("value of x",X);
    const outputangle=parseInt(2*((180*(Math.atan(X)))/Math.PI));
    console.log( outputangle);
    const c1=-2*(l2*(Math.cos((outputangle*Math.PI)/180)));
    console.log("value of c1",c1);
    const c2=((l2*l2)-(l3*l3));
    console.log("value of c2",c2);
    const S=Math.sqrt(((c1*c1)-(4*c2)));
    const x=parseInt(((-c1)+(S))/(2));
    console.log(x);
    para2.innerText=`the silder length is ${x} cm`;
    }
}