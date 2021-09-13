
function changeButton(n,m){
	//Передвигаем кнопку #n на место кнопки с номером m
	const buttons = document.fifteenGame.elements;
	let emptyId = buttons[m].id;//Запоминаем id пустой кнопки
	console.log(emptyId);
	buttons[m].removeAttribute("id");
	buttons[n].id = emptyId;
	buttons[m].value = buttons[n].value;
	
}
/**************************************************************************/
function game15(n){
	//Проверяем если рядом пустая кнопка , перемещаем ету кнопку на пустое место, только ета кнопка имеет атрибут id 
	const buttons = document.fifteenGame.elements;
	if((n%4 != 3)&&(buttons[n+1].hasAttribute("id"))){//У етих кнопок есть кнопки справа
			 changeButton(n,n+1);
	}
	if((n%4 != 0)&&(buttons[n-1].hasAttribute("id"))){//У етих кнопок есть кнопки слева
			 changeButton(n,n-1);
	}
	if((n<12)&&(buttons[n+4].hasAttribute("id"))){//У етих кнопок есть кнопки внизу
			 changeButton(n,n+4);
	}
	if((n>3)&&(buttons[n-4].hasAttribute("id"))){//У етих кнопок есть кнопки верху
			 changeButton(n,n-4);
	}
	
}