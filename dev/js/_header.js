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
