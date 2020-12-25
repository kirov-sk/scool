 $(document).ready(function () {
 $('.body__main').toggleClass('active').slideToggle(300);
 	if (!($('.forms').hasClass('active') ) ) {
		$('.forms').slideUp(300)
 	};
 } );
 //*****************************************************
  $(document).ready(function() {
	$('.wave-btn').click(function () {
		if ($('.body__main').hasClass('active')) {
			$('.body__main').removeClass('active');
			$('.body__main').slideUp(300);
		};
		if (!($('.forms').hasClass('active'))) {
			$('.forms').toggleClass('active').slideDown(300);
		};
		
		})
	});

 //************Демонстрация эффекта "акардеон"
 $(document).ready(function() {
	$('.foot1').click(function(event) {
		if ($('.footer').hasClass('one')) {
			$('.foot1').not($(this)).removeClass('active');
			$('.foot2').not($(this).next()).slideUp(300);

		};

		$(this).toggleClass('active').next().slideToggle(300);
	});
});
//************инфа для гл страницы
 $(document).ready(function() {
	$('.h1').click(function home() {
		if ( $('.body__main').hasClass('active') ) {
			$('.body__main').removeClass('active');
			$('.body__main').not($(this)).slideUp(300);
//			$('.forms').removeClass('active');
		}
			else {$('.body__main').toggleClass('active').slideToggle(300)

		}
	});
	$('.button_closs').click(function (){
		if ( $('.body__main').hasClass('active') ) { $('.body__main').toggleClass('active').slideToggle(300) }
	});
	$('.body1_close').click(function (){
		if ( $('.body1').hasClass('active') ) { $('.body1').toggleClass('active').slideToggle(300) }
	});

	});

//********************************************************** переменные для обмена с сервером   ( исп. ниже)

let tab = ['tab_01', 'tab_02', 'tab_03', 'tab_04', 'tab_05', 'tab_06'];
let fb = ['http://my-project/txt/test1.xml', 'http://my-project/txt/test2.xml', 'http://my-project/txt/test3.xml', 'http://my-project/txt/test4.xml', 'http://my-project/txt/test5.xml', 'http://my-project/txt/test6.xml'];
let oReq = ['oReq1', 'oReq2', 'oReq3', 'oReq4', 'oReq5', 'oReq6'];
//**************************
	//отображение блоков по ссылкам меню + выгрузка из серверных файлов с базой
		//************************************************* 
		$(document).ready(function(){  
	      $('.wave-btn1').click(function(){
	      	if ( $('.popup').hasClass('is-active') ) { $('.popup').toggleClass('is-active'); //выход из mobil menu(popup)
            $('body').removeClass('no-scroll');

	      };
	      	
	      	let buton_id = $(this).attr('href');
	      	let buton = $(this).attr('href').substr(1);
	      			   let fb_name_num = tab.indexOf(buton);
	         let fxml = fb[fb_name_num];

	              oReq = new XMLHttpRequest();
			   oReq.timeout = 3000;
				oReq.addEventListener('load', function() {document.getElementById(buton).innerHTML = oReq.response});
				oReq.open('get', fxml);
			   oReq.timeout = 3000;
				oReq.send();

/*				oReq.onload = function() {
  if (oReq.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    alert(`Ошибка ${oReq.status}: ${oReq.statusText}`); // Например, 404: Not Found
  } else { // если всё прошло гладко, выводим результат
    alert(`Готово, получили ${oReq.response.length} байт`); // response -- это ответ сервера
  }
};
								oReq.onprogress = function(event) { // запускается периодически
  // event.loaded - количество загруженных байт
  // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
  // event.total - количество байт всего (только если lengthComputable равно true)
  alert(`Загружено ${event.loaded} из ${event.total}`);
};*/
				oReq.removeEventListener('load', function(){document.getElementById(buton).innerHTML = oReq.response});

	//       console.log(fb_name_num, fxml); //для тестов
	      if (!$(buton_id).hasClass('active')) {

				$('.active').not($(this)).removeClass('active').slideUp(100);
		   	$(buton_id).toggleClass('active').slideDown(300);
		   		    		};

			   $('html, body').animate({scrollTop:0}, 'slow');

	      });
      });
		//**************************************************

//*****************************************************************
	
/*ПРОКРУТКА ВВЕРХ*/
 $(function() {
    $('#foot1_2').click(function(){
       $('html, body').animate({scrollTop:0}, 'slow');
   });
});
//**************************************************
/*
//считывание запись из формы
 function calculate() {
          	let form = document.forms.form12;
       form.list.input = calculate; // если в режиме опер отображения то oninput
       form.txt5.input = calculate;
       form.url.input = calculate;
       form.name.value = calculate; 
  //         let fxml = 'http://my-project/' + form.name.value;
  //         let t = form.list.value;
    //     let taindexOf(result)
   //  if (form.list.value === "Пункт1") 
   //  	function writeString () {
   //   document.getElementById(t).innerHTML = document.getElementById(t).innerHTML + form.txt5.value + " -- <a href="+ form.url.value + ' target="_blank">' + form.url.value + "</a><br>";
     };  */
  /*готовим  инфу для отправки на сервер в файлы базы*/
		$(document).ready(function(){  

				   $('.t1').click(function() {
				let tab = ['tab_01', 'tab_02', 'tab_03', 'tab_04', 'tab_05', 'tab_06'];
					let form13 = document.forms.form12;   //объявляем объект формс
				 let fb_name_num = tab.indexOf(form13.list.value);// отождествляем индекс массива tab c элементом списка
				 let fxml = fb[fb_name_num].split('').slice(18).join('');//берем соотв эл массива путей к файлам и укорачиваем
				// 
						form13.name.value = fxml; //присваиваем элементу формы
								});
				 // формирование пути к файлу адресата для хранения информации по разделу
				  $('.btn2').click(function(event) {
				let tab = ['tab_01', 'tab_02', 'tab_03', 'tab_04', 'tab_05', 'tab_06'];
					let form = document.forms.form12;   //объявляем объект формс
				 let fb_name_num = tab.indexOf(form.list.value);// отождествляем индекс массива tab c элементом списка
				 let fxml = fb[fb_name_num].split('').slice(18).join('');//берем соотв эл массива путей к файлам и укорачиваем
				// 
						form.name.value = fxml; //присваиваем элементу формы
				});
  			});

//**********выгрузка по умолчанию

for (let i = 0; i < tab.length; i++) {

  oReq[i] = new XMLHttpRequest();
  oReq[i].timeout = 3000;
oReq[i].addEventListener('load', function() {document.getElementById(tab[i]).innerHTML = oReq[i].response});
oReq[i].open('get', fb[i]);
oReq[i].send();
oReq[i].removeEventListener('load', function(){document.getElementById(tab[i]).innerHTML = oReq[i].response});

};
/////////////плагин от pizzatime
;(function() {
  window.myLib = {};

  window.myLib.body = document.querySelector('body');

  window.myLib.closestAttr = function(item, attr) {
    var node = item;

    while(node) {
      var attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.closestItemByClass = function(item, className) {
    var node = item;

    while(node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };
    window.myLib.toggleScroll = function() {
    myLib.body.classList.toggle('no-scroll');
  };
})();

 
/* myLib end */

/* popup start */;(function() {
  var showPopup = function(target) {
    target.classList.add('is-active');
  };

  var closePopup = function(target) {
    target.classList.remove('is-active');
  };

  myLib.body.addEventListener('click', function(e) {
    var target = e.target;
    var popupClass = myLib.closestAttr(target, 'data-popup');

  /*  if (popupClass === null) {
      return;
    }
*/
    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);

    if (popup) {
      showPopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('click', function(e) {
    var target = e.target;
    var popupItemClose = myLib.closestItemByClass(target, 'popup-close');

    if (popupItemClose ||
        target.classList.contains('popup__inner')) {
          var popup = myLib.closestItemByClass(target, 'popup');

          closePopup(popup);
          myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('keydown', function(e) {
    if (e.keyCode !== 27) {
      return;
    }

    var popup = document.querySelector('.popup.is-active');

    if (popup) {
      closePopup(popup);
      myLib.toggleScroll();
    }
  });
})();

/* popup end */
