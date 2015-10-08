

// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
   if (!hasClass(elem, className)) {
       elem.className += ' ' + className;
   }
}

// removeClass
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
       while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
           newClass = newClass.replace(' ' + className + ' ', ' ');
       }
       elem.className = newClass.replace(/^\s+|\s+$/g, '');
   }
}

// Navigation toggle

var menu = document.getElementById('nav-toggle'),
	body = document.getElementsByTagName('body')[0];


document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

menu.addEventListener('click', function () {

//this is to move the body of the page to the right on click…

if (hasClass(body, 'moveBody')) {
	addClass(body, 'moveBodyBack');
	removeClass(body, 'moveBody');
	}
	else {

	addClass(body, 'moveBody');
	removeClass(body, 'moveBodyBack');
	}
});

// Language menu toggle

var lMenu = document.getElementById('language-toggle'),
	body = document.getElementsByTagName('body')[0];
	aTag = document.getElementById('language-icon');


document.querySelector( "#language-toggle" )
  .addEventListener( "click", function() {
	if (hasClass(aTag, "st3")) {
		removeClass(aTag, "st3");
	}
	else {
		addClass(aTag, "st3")

	}
	console.log("hey man");
	addClass(aTag, "st3");
    this.classList.toggle( "active" );
  });

lMenu.addEventListener('click', function () {

//this is to move the body of the page to the right on click…

if (hasClass(body, 'moveBody')) {
	addClass(body, 'moveBodyBack');
	removeClass(body, 'moveBody');
	}
	else {

	addClass(body, 'moveBody');
	removeClass(body, 'moveBodyBack');
	}
// if (hasClass(aTag, "bubble")) {
// 	removeClass(aTag, "bubble");
// }
// else {
// 	addClass(aTag, "bubble")

// }

});
