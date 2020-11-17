$(document).ready(function(){

	// Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    
//===========================================================
//VIÑETA 1- CLEAN!
//===========================================================

    //PINNED! the background
    var pinAT = new ScrollMagic.Scene({
        triggerElement: '#slide01', 
        triggerHook: 0,
        duration: 1800})
    .setClassToggle('#s01-bg', 'pinned')
    .addTo(controller);
    
  
    

	// TheFadingScene1:Fondo
	var ourScene = new ScrollMagic.Scene({
        triggerElement: '#slide01',
        triggerHook: 0.5,
        
        
	})
	.setClassToggle('#slide01', 'fade-in') // add class to project01
	.addTo(controller);
    
    // TheFadingScene1:Dialogo 1
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#s01-01',
        triggerHook: 0.3,
        duration: 200,
        
	})
	.setClassToggle('#s01-01', 'fade-in') // add class to project01
    .addTo(controller);


    // TheFadingScene1:Dialogo 2
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#s01-02',
        triggerHook: 0.2,
        duration: 200,
        
	})
	.setClassToggle('#s01-02', 'fade-in') // add class to project01
	.addTo(controller);




//===========================================================
//VIÑETA 2
//===========================================================

 // TheFadingScene1:Fondo
 var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide02',
    triggerHook: 0.7,
    
    
})
.setClassToggle('#slide02', 'fade-in') // add class to project01
.addTo(controller);


    //PIN the background
    var pinAT = new ScrollMagic.Scene({
        triggerElement: '#slide02', 
        triggerHook: 0.2,
        duration: 1800})
    .setClassToggle('#s02-bg', 'pinned')
    .addTo(controller);

    // TheFadingScene1:Dialogo 1
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#s02-01',
        triggerHook: 0.15,
        duration: 190,
        
	})
    .setClassToggle('#s02-01', 'fade-in') // add class to project01
    .addTo(controller);

//===========================================================
//VIÑETA 3
//===========================================================

// TheFadingScene1:Fondo
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide03',
    triggerHook: 0.7,
    
    
})
.setClassToggle('#slide03', 'fade-in') // add class to project01
.addTo(controller);

 //PIN the background
 var pinAT = new ScrollMagic.Scene({
    triggerElement: '#slide03', 
    triggerHook: 0.2,
    duration: 1800})
.setClassToggle('#s03-bg', 'pinned')
.addTo(controller);

   // TheFadingScene1:Dialogo 1
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s03-01',
    triggerHook: 0.4,
    duration: 220,
    
})
.setClassToggle('#s03-01', 'fade-in') // add class to project01
.addTo(controller);

   // TheFadingScene1:Dialogo 2
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s03-02',
    triggerHook: 0,
    duration: 100,
    
})
.setClassToggle('#s03-02', 'fade-in') // add class to project01
.addTo(controller);

//===========================================================
//VIÑETA 4
//===========================================================


// TheFadingScene1:Fondo
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide04',
    triggerHook: 0.7,
    
    
})
.setClassToggle('#slide04', 'fade-in') // add class to project01
.addTo(controller);

//PIN the background
var pinAT = new ScrollMagic.Scene({
    triggerElement: '#slide04', 
    triggerHook: 0.2,
    duration: 1940})
.setClassToggle('#s04-bg', 'pinned')
.addTo(controller);

   // TheFadingScene1:Dialogo 1
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s04-01',
    triggerHook: 0.15,
    duration: 220,
    
})
.setClassToggle('#s04-01', 'fade-in') // add class to project01
.addTo(controller);



   // TheFadingScene1:Dialogo 2
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s04-02',
    triggerHook: 0,
    duration: 200,
    
})
.setClassToggle('#s04-02', 'fade-in') // add class to project01
.addTo(controller);


   // TheFadingScene1:Dialogo 3
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s04-03',
    triggerHook: 0,
    duration: 200,
    
})
.setClassToggle('#s04-03', 'fade-in') // add class to project01
.addTo(controller);


//===========================================================
//VIÑETA 5
//===========================================================

// TheFadingScene1:Fondo
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide05',
    triggerHook: 0.7,
    
    
})
.setClassToggle('#slide05', 'fade-in') // add class to project01
.addTo(controller);

//PIN the background
var pinAT = new ScrollMagic.Scene({
    triggerElement: '#slide05', 
    triggerHook: 0.2,
    duration: 760})
.setClassToggle('#s05-bg', 'pinned')
.addTo(controller);

   // TheFadingScene1:Dialogo 1
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s05-01',
    triggerHook: 0.15,
    duration: 220,
    
})
.setClassToggle('#s05-01', 'fade-in') // add class to project01
.addTo(controller);







}); // The end of the function, don't delete!