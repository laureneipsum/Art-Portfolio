//=========================================//
//===========ANIMATION SOURIS============= //
//=========================================//
let mouseCursor = document.querySelector(".cursor");
let menu_anim_cursor = document.querySelectorAll('#menu-burger');
let title_animate_mouse = document.querySelectorAll('.title1');

    window.addEventListener('mousemove', cursor);
    function cursor(e){

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
//-----modifier clique bg-----//
document.body.onclick = function(e){
    var evt = window.event || e; 
    var target = evt.target || evt.srcElement; 
    var prevent = false;
    while( target && !prevent ){
      // id des éléments qui ne déclenche pas la fermeture
      if( target.id == "mainMenu")
        prevent = true;
	  target = target.parentNode;
	  console.log("a chaque clique");
    }
    // si le clique n'était pas sur un élémént de la recherche, on cache l'élément
    if( !prevent && document.getElementById('burgerMenu')  ){
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
// ==========================================//
// =============CLOSE MENU ================ //
// =========================================//
// ========================================//




// document.body.onclick = function(e){
//     var evt = window.event || e; 
//     var target = evt.target || evt.srcElement; 
//     var prevent = false;
//     while( target && !prevent ){
//       // id des éléments qui ne déclenche pas la fermeture
//       if( target.id == "mainMenu" || target.id == "body"  )
//         prevent = true;
// 	  target = target.parentNode;
	  
// 	  console.log("a chaque clique");
//     }
//     // si le clique n'était pas sur un élémént de la recherche, on cache l'élément
//     if( !prevent && document.getElementById('burgerMenu')  ){
// 	  document.getElementById('burgerMenu').style.display='none';
//     }
//     // ne stop pas la propagation
//     return true;
//   }
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

function openModal() {
	document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
	document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
	showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
  }