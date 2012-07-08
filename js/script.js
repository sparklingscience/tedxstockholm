$(document).ready(function(){
   
   /*
   This is a check for browsers lower than IE9
   The parallax effect doesn't work on these browsers, as a result
   an alternate hack needs to be provided.
   */
   
   
    //Getting IE version...
    var ie = getIEVersion();
	
	//Applying the hack...
	if(ie>=9){
		$('#parallax .parallax-layer')
		.parallax({
		  mouseport: jQuery('#parallax')
		});
	}
	else if(ie===undefined){
		$('#parallax .parallax-layer')
		.parallax({
		  mouseport: jQuery('#parallax')
		});
	}
	else{
		//Hack for browsers lower than IE9
		$("#backP").css({left: '-100px', top:'-100px'});
		$("#logoP").css({marginLeft: '60%', marginTop:'40%', display: 'block'});
	}
	
	
	//Removing the preloader on page load...
	
	$(window).load(function(){
								 $('#black_overlay').fadeOut("slow");
								 });
	
	//Navigation 'a' clicks...
	
	$('nav a').click(function(){
		var name = this.id;
		pageLoadInit();
		loadPage(name);
		
		//CSS changes for the aboutus page...
		if(name == 'aboutus'){
			$('body').css({background: 'url(./images/backAboutus.jpg) no-repeat', 'background-size':'cover'});
			$('footer').css({background: '#FFF', padding: '10px', marginTop: '-10px'});
		}
	});
	
	
	
	$('.home').click(function(){
		$('#pageContainer').load('content/contactus.html');
		$('#content').fadeOut('slow');
		$('#parallax').fadeIn("slow");
		$('body').css({backgroundColor: '#000'});
		$('body').css("overflow","hidden");
		$('footer').css({background: '#000', padding: '0px', marginTop: '0px'});
	});
	
	
	//Functions...
	
	function pageLoadInit(){
		$('.pageloader').fadeIn("slow");
		$('body').css({background: '#FFF'});
		$('body').css("overflow-y","scroll");
		$('#parallax').fadeOut("slow");
		$('#content').fadeIn(2000);
	}
	
	
	function loadPage(name){
		$('#pageContainer').load('content/'+name+'.html', function(){ $('.pageloader').slideUp(500); }).fadeIn("slow");
	}
	
	
	function getIEVersion(){
		var undef,
			v = 3,
			div = document.createElement('div'),
			all = div.getElementsByTagName('i');
	 
		while (
			div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
			all[0]
		);
		return v > 4 ? v : undef;
	}
	
	/*if ($("#sb-container").length > 0){
		alert("hi");
		 $( '#sb-container' ).swatchbook( {
					// number of degrees that is between each item
					angleInc	: 15,
					neighbor	: 15,
					// if it should be closed by default
					initclosed	: true,
					// index of the element that when clicked, triggers the open/close function
					// by default there is no such element
					closeIdx	: 11
			});
	}*/


	
});