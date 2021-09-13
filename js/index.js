
const natureStart = document.getElementById("natureButton");

let natureValue = document.natureForm.elements;
natureStart.onclick = function (){
	natureValue[3].value =( +natureValue[1].value )+( +natureValue[2].value);
	
	};
/**********************************************************/
function nature(num){
/*
let one = num%100;//two last number
let two = (num-one)/100;//two first number
let three = two%10;//two number
let four = (two-three)/10;//one number
let five = one%10;//last number
let six = (one-five)/10;//three number
let sum = three+four+five+six;//sum numbers
let seven = sum%10;//two number 
let etch = (sum-seven)/10;//first number
alert(seven+etch);//243 result
*/
//Вычисляем сумму цыфр числа num
let one = num%100;//Получаем последние 2 цыфры
let two = (num-one)/100;//Получаем первые 2 цыфры
let sum = sum2didget(two)+sum2didget(one);
return sum2didget(sum);//132
/*******************************************************/
function sum2didget(two){
	//получаем сумму цыфр 2 значного числа
	return (two%10)+((two-(two%10))/10)
/******************************************************/	
}
}

