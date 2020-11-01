//=========================================//
//===========ANIMATION SOURIS============= //
//=========================================//
let mouseCursor = document.querySelector(".cursor");
let menu_anim_cursor = document.querySelectorAll('#menu-burger');
let title_animate_mouse = document.querySelectorAll('.title_animate h1');
// let title_animate_mouse_two = document.querySelectorAll(".bulle2 span");
// let title_animate_mouse_one = document.querySelectorAll(".bulle1 span");

    window.addEventListener('mousemove', cursor);
    function cursor(e){
    // console.log(e);
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
    }
    menu_anim_cursor.forEach(link => {
      link.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("link-grow");
      }); 
      link.addEventListener("mouseover", () => {
          mouseCursor.classList.add("link-grow");
      });
    }); 
    title_animate_mouse.forEach(h1 => {
      h1.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("text-pict");
      }); 
      h1.addEventListener("mouseover", () => {
          mouseCursor.classList.add("text-pict");
      });
    }); 
    // title_animate_mouse_two.forEach(span => {
    //     span.addEventListener("mouseleave", () => {
    //         mouseCursor.classList.remove("bullemove1");
    //     }); 
    //     span.addEventListener("mouseover", () => {
    //         mouseCursor.classList.add("bullemove1");
    //     });
    //   }); 
    //   title_animate_mouse_one.forEach(span => {
    //     span.addEventListener("mouseleave", () => {
    //         mouseCursor.classList.remove("bullemove2");
    //     }); 
    //     span.addEventListener("mouseover", () => {
    //         mouseCursor.classList.add("bullemove2");
    //     });
    //   }); 
    
//=========================================//
//===========ANIMATION BURGER============= //
//=========================================//

//Récupération des blocs
var mainMenu = document.querySelector("#menu");
var burgerMenu = document.querySelector("#menu-burger");

/*===============================*/
/*=== Clic sur le menu burger ===*/
/*===============================*/
// Vérifie si l'événement touchstart existe et est le premier déclenché
var clickedEvent = "click"; // Au clic si "touchstart" n'est pas détecté
window.addEventListener('touchstart', function detectTouch() {
	clickedEvent = "touchstart"; // Transforme l'événement en "touchstart"
	window.removeEventListener('touchstart', detectTouch, false);
}, false);

// Créé un "toggle class" en Javascrit natif (compatible partout)
burgerMenu.addEventListener(clickedEvent, function(evt) {
	console.log(clickedEvent);
	// Modification du menu burger
	if(!this.getAttribute("class")) {
        this.setAttribute("class", "clicked");
        
	} else {
		this.removeAttribute("class"); }
    
	// Variante avec x.classList (ou DOMTokenList), pas 100% compatible avant IE 11...
	// burgerMenu.classList.toggle("clicked");

	// Créé l'effet pour le menu slide (compatible partout)
	if(mainMenu.getAttribute("class") != "visible") {
		mainMenu.setAttribute("class", "visible");
	} else {
		mainMenu.setAttribute("class", "invisible");
	}
}, false
);

document.body.onclick = function(e){
    var evt = window.event || e; 
    var target = evt.target || evt.srcElement; 
    var prevent = false;
    while( target && !prevent ){
      // id des éléments qui ne déclenche pas la fermeture
      if( target.id == "mainMenu" || target.id == "body" )
        prevent = true;
      target = target.parentNode;
    }
    // si le clique n'était pas sur un élémént de la recherhe, on cache l'élément
    if( !prevent ){
      document.getElementById('burgerMenu').style.display='none';
    }
    // ne stop pas la propagation
    return true;
  }

/*===============================*/
/*=== Swipe avec Touch Events ===*/
/*===============================*/
// Si l'écran est plus petit que "x" pixels (optionnel) // 1024px ici
if(screen.width <= 1024) {
	var startX = 0; // Position de départ
	var distance = 100; // 100 px de swipe pour afficher le menu

	// Au premier point de contact
	window.addEventListener("touchstart", function(evt) {
		// Récupère les "touches" effectuées
		var touches = evt.changedTouches[0];
		startX = touches.pageX;
		between = 0;
	}, false);

	// Quand les points de contact sont en mouvement
	window.addEventListener("touchmove", function(evt) {
		// Limite les effets de bord avec le tactile...
		evt.preventDefault();
		evt.stopPropagation();
	}, false);

	// Quand le contact s'arrête
	window.addEventListener("touchend", function(evt) {
		var touches = evt.changedTouches[0];
		var between = touches.pageX - startX;

		// Détection de la direction
		if(between > 0) {
			var orientation = "ltr";
		} else {
			var orientation = "rtl";
		}

		// Modification du menu burger
		if(Math.abs(between) >= distance && orientation == "ltr" && mainMenu.getAttribute("class") != "visible") {
				burgerMenu.setAttribute("class", "clicked");
		}
		if(Math.abs(between) >= distance && orientation == "rtl" && mainMenu.getAttribute("class") != "invisible") {
				burgerMenu.removeAttribute("class");
		}

		// Créé l'effet pour le menu slide (compatible partout)
		if(Math.abs(between) >= distance && orientation == "ltr" && mainMenu.getAttribute("class") != "visible") {
			mainMenu.setAttribute("class", "visible");
		}
		if(Math.abs(between) >= distance && orientation == "rtl" && mainMenu.getAttribute("class") != "invisible") {
			mainMenu.setAttribute("class", "invisible");
		}
	}, false);
}
//==========================================//
//=============CLOSE MENU ================ //
//=========================================//
//========================================//
// var clickedEvent = "click"; // Au clic si "touchstart" n'est pas détecté
// window.addEventListener('touchstart', function  close_menu() {
// 	clickedEvent = "touchstart"; // Transforme l'événement en "touchstart"
// 	window.removeEventListener('touchstart', detectTouch, false);
// }, false);

// // Créé un "toggle class" en Javascrit natif (compatible partout)
// burgerMenu.addEventListener(clickedEvent, function(evt) {
// 	console.log(clickedEvent);
// 	// Modification du menu burger
// 	if(!this.getAttribute("class")) {
//         this.setAttribute("class", "clicked");     
// 	} else {
// 		this.removeAttribute("class"); }
// 	// Variante avec x.classList (ou DOMTokenList), pas 100% compatible avant IE 11...
// 	// burgerMenu.classList.toggle("clicked");
// 	// Créé l'effet pour le menu slide (compatible partout)
// 	if(mainMenu.getAttribute("class") != "visible") {
// 		mainMenu.setAttribute("class", "visible");
// 	} else {
// 		mainMenu.setAttribute("class", "invisible");
// 	}
// }, false
// );





//=========================================//
//=========================================//
//===========txt aleatoire================ //
//=========================================//
//=========================================//
function changeTexte() {
    var nbalea = Math.floor(Math.random()*5+1);
    
    switch (nbalea) {
     case 1:
         var texte = 'TEST';
     break;
  
     case 2:
         var texte = 'Le texte';
     break;
  
     case 3:
         var texte = 'Le texte';
     break;
  
     case 4:
         var texte = 'Le texte';
     break;
    
    case 5:
         var texte = 'Le texte';
     break;
    
     default:
         var texte = 'Erreur !';
    }
    
    $('title2').text(texte);
 };

 // (function () {
//     var follower, init, mouseX, mouseY, positionElement, printout, timer;
  
//     follower = document.getElementById('follower');
  
//     printout = document.getElementById('printout');
  
//     mouseX = event => {
//       return event.clientX;
//     };
  
//     mouseY = event => {
//       return event.clientY;
//     };
  
//     positionElement = event => {
//       var mouse;
//       mouse = {
//         x: mouseX(event),
//         y: mouseY(event) };
  
//       follower.style.top = mouse.y + 'px';
//       return follower.style.left = mouse.x + 'px';
//     };
  
//     timer = false;
  
//     window.onmousemove = init = event => {
//       var _event;
//       _event = event;
//       return timer = setTimeout(() => {
//         return positionElement(_event);
//       }, 1);
//     };
  
//   }).call(this);




//     //ANIMATION SCROLL 
// (function() {
// 	"use strict";
// 	/*[pan and well CSS scrolls]*/
// 	var pnls = document.querySelectorAll('.panel').length,
// 		scdir, hold = false;

// 	function _scrollY(obj) {
// 		var slength, plength, pan, step = 100,
// 			vh = window.innerHeight / 100,
// 			vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
// 		if ((this !== undefined && this.id === 'well') || (obj !== undefined && obj.id === 'well')) {
// 			pan = this || obj;
// 			plength = parseInt(pan.offsetHeight / vh);
// 		}
// 		if (pan === undefined) {
// 			return;
// 		}
// 		plength = plength || parseInt(pan.offsetHeight / vmin);
// 		slength = parseInt(pan.style.transform.replace('translateY(', ''));
// 		if (scdir === 'up' && Math.abs(slength) < (plength - plength / pnls)) {
// 			slength = slength - step;
// 		} else if (scdir === 'down' && slength < 0) {
// 			slength = slength + step;
// 		} else if (scdir === 'top') {
// 			slength = 0;
// 		}
// 		if (hold === false) {
// 			hold = true;
// 			pan.style.transform = 'translateY(' + slength + 'vh)';
// 			setTimeout(function() {
// 				hold = false;
// 			}, 1000);
// 		}
// 		console.log(scdir + ':' + slength + ':' + plength + ':' + (plength - plength / pnls));
// 	}
// 	/*[swipe detection on touchscreen devices]*/
// 	function _swipe(obj) {
// 		var swdir,
// 			sX,
// 			sY,
// 			dX,
// 			dY,
// 			threshold = 100,
// 			/*[min distance traveled to be considered swipe]*/
// 			slack = 50,
// 			/*[max distance allowed at the same time in perpendicular direction]*/
// 			alT = 500,
// 			/*[max time allowed to travel that distance]*/
// 			elT, /*[elapsed time]*/
// 			stT; /*[start time]*/
// 		obj.addEventListener('touchstart', function(e) {
// 			var tchs = e.changedTouches[0];
// 			swdir = 'none';
// 			sX = tchs.pageX;
// 			sY = tchs.pageY;
// 			stT = new Date().getTime();
// 			//e.preventDefault();
// 		}, false);

// 		obj.addEventListener('touchmove', function(e) {
// 			e.preventDefault(); /*[prevent scrolling when inside DIV]*/
// 		}, false);

// 		obj.addEventListener('touchend', function(e) {
// 			var tchs = e.changedTouches[0];
// 			dX = tchs.pageX - sX;
// 			dY = tchs.pageY - sY;
// 			elT = new Date().getTime() - stT;
// 			if (elT <= alT) {
// 				if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
// 					swdir = (dX < 0) ? 'left' : 'right';
// 				} else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
// 					swdir = (dY < 0) ? 'up' : 'down';
// 				}
// 				if (obj.id === 'well') {
// 					if (swdir === 'up') {
// 						scdir = swdir;
// 						_scrollY(obj);
// 					} else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
// 						scdir = swdir;
// 						_scrollY(obj);

// 					}
// 					e.stopPropagation();
// 				}
// 			}
// 		}, false);
// 	}
//     /*[assignments]*/
//     var well = document.getElementById('well');
// 	well.style.transform = 'translateY(0)';
// 	well.addEventListener('wheel', function(e) {
// 		if (e.deltaY < 0) {
//             scdir = 'down';
// 		}
// 		if (e.deltaY > 0) {
//             scdir = 'up';
// 		}
// 		e.stopPropagation();
// 	});
// 	well.addEventListener('wheel', _scrollY);
// 	_swipe(well);
// 	var tops = document.querySelectorAll('.top');
// 	for (var i = 0; i < tops.length; i++) {
// 		tops[i].addEventListener('click', function() {
// 			scdir = 'top';
// 			_scrollY(well);
// 		});
// 	}
// })();