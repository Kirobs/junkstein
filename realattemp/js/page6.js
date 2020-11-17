$(document).ready(function(){

	// Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    
//===========================================================
//VIÑETA 1- 
//===========================================================

    //PINNED! the background-------------------------------------------------------------
    var pinAT = new ScrollMagic.Scene({
        triggerElement: '#slide01', 
        triggerHook: 0.2,
        duration: 1800
    })
    .setClassToggle('#s01-bg', 'pinned')
//    .addIndicators({
//        name: 'pinning1',
//        colorTrigger: 'black',
//        colorStart: '#75C695',
//        colorEnd: 'red'
//    }) 
    .addTo(controller);
    
  
    

	// TheFadingScene1:Fondo-------------------------------------------------------------
	var ourScene = new ScrollMagic.Scene({
        triggerElement: '#slide01',
        triggerHook: 0.5,
        duration: 1400
        
	})
    .setClassToggle('#slide01', 'fade-in') // add class to project01
//   .addIndicators({
//       name: 'fade1',
//       colorTrigger: 'black',
//       colorStart: '#75C695',
//       colorEnd: 'red'
//   }) 
	.addTo(controller);
    
   // TheFadingScene1:Dialogo 1-----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s01-01',
    triggerHook: 0.35,
    duration: 250,
})
.setClassToggle('#s01-01', 'fade-in') // add class to project01
    // .addIndicators({
    //     name: 'dialogue1',
    //     colorTrigger: 'black',
    //     colorStart: '#75C695',
    //     colorEnd: 'red'
    // }) 
.addTo(controller);



    // TheFadingScene1:Dialogo 2----------------------------------------------------------
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#s01-02',
        triggerHook: 0.5,
        duration: 200,
        
	})
    .setClassToggle('#s01-02', 'fade-in') // add class to project01
    // .addIndicators({
    //     name: 'dialogue2',
    //     colorTrigger: 'black',
    //     colorStart: '#75C695',
    //     colorEnd: 'red'
    // }) 
	.addTo(controller);




//===========================================================
//VIÑETA 2
//===========================================================

 // TheFadingScene1:Fondo----------------------------------------------------------
 var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide02',
    triggerHook: 0.5,
    duration: 1150
    
})
.setClassToggle('#slide02', 'fade-in') // add class to project01
//    .addIndicators({
//        name: 'background fade',
//        colorTrigger: 'black',
//        colorStart: '#75C695',
//        colorEnd: 'red'
//    }) 
.addTo(controller);


    //PIN the background----------------------------------------------------------
    var pinAT = new ScrollMagic.Scene({
        triggerElement: '#slide02', 
        triggerHook: 0.2,
        duration: 1800})
    .setClassToggle('#s02-bg', 'pinned')
//    .addIndicators({
//        name: 'background pinning',
//        colorTrigger: 'black',
//        colorStart: '#75C695',
//        colorEnd: 'red'
//    }) 
    .addTo(controller);

    // TheFadingScene1:Dialogo 1----------------------------------------------------------
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#s02-01',
        triggerHook: 0.12,
        duration: 170,
        
	})
    .setClassToggle('#s02-01', 'fade-in') // add class to project01
//    .addIndicators({
//        name: 'dialogue1',
//        colorTrigger: 'black',
//        colorStart: '#75C695',
//        colorEnd: 'red'
//    }) 
    .addTo(controller);

    // TheFadingScene1:Dialogo 2----------------------------------------------------------
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#s02-02',
        triggerHook: 0.4,
        duration: 170,
        
	})
    .setClassToggle('#s02-02', 'fade-in') // add class to project01
//    .addIndicators({
//        name: 'dialogue 2',
//        colorTrigger: 'black',
//        colorStart: '#75C695',
//        colorEnd: 'red'
//    }) 
    .addTo(controller);

//===========================================================
//VIÑETA 3
//===========================================================

// TheFadingScene1:Fondo----------------------------------------------------------
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide03',
    triggerHook: 0.7,
    duration: 1280
    
    
})
.setClassToggle('#slide03', 'fade-in') // add class to project01
//  .addIndicators({
//      name: 'Fading Background',
//      colorTrigger: 'black',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//   }) 
.addTo(controller);

 //PIN the background----------------------------------------------------------
 var pinAT = new ScrollMagic.Scene({
    triggerElement: '#slide03', 
    triggerHook: 0.2,
    duration: 1800})
.setClassToggle('#s03-bg', 'pinned')
//  .addIndicators({
//      name: 'pinning background',
//      colorTrigger: 'black',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//  }) 
.addTo(controller);

   // TheFadingScene1:Dialogo 1----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s03-01',
    triggerHook: 0.2,
    duration: 200,
    
})
.setClassToggle('#s03-01', 'fade-in') // add class to project01
//  .addIndicators({
//     name: 'dialogue1',
//     colorTrigger: 'black',
//     colorStart: '#75C695',
//     colorEnd: 'red'
//  }) 
.addTo(controller);

   // TheFadingScene1:Dialogo 2----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s03-02',
    triggerHook: 0.2,
    duration: 200,
    
})
.setClassToggle('#s03-02', 'fade-in') // add class to project01
//   .addIndicators({
//      name: 'dialogue2',
//      colorTrigger: 'black',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//  }) 
.addTo(controller);

//===========================================================
//VIÑETA 4
//===========================================================


// TheFadingScene1:Fondo----------------------------------------------------------
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide04',
    triggerHook: 0.85,
    duration: 1550
    
    
})
.setClassToggle('#slide04', 'fade-in') // add class to project01
//  .addIndicators({
//      name: 'Fade Background',
//       colorTrigger: 'black',
//       colorStart: '#75C695',
//       colorEnd: 'red'
//   }) 
.addTo(controller);

//PIN the background----------------------------------------------------------
var pinAT = new ScrollMagic.Scene({
    triggerElement: '#s04-bg', 
    triggerHook: 0.2,
    duration: 1940})
.setClassToggle('#s04-bg', 'pinned')
//   .addIndicators({
//       name: 'pinned background',
//       colorTrigger: 'black',
//       colorStart: '#75C695',
//       colorEnd: 'red'
//   }) 
.addTo(controller);

   // TheFadingScene1:Dialogo 1----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s04-01',
    triggerHook: 0.15,
    duration: 180,
    
})
.setClassToggle('#s04-01', 'fade-in') // add class to project01
//   .addIndicators({
//       name: 'dialogue1',
//       colorTrigger: 'black',
//       colorStart: '#75C695',
//       colorEnd: 'red'
//   }) 
.addTo(controller);





//===========================================================
//VIÑETA 5
//===========================================================

// TheFadingScene1:Fondo----------------------------------------------------------
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide05',
    triggerHook: 0.7,
    
    
})
.setClassToggle('#slide05', 'fade-in') // add class to project01
//  .addIndicators({
//      name: 'fading scene 1',
//      colorTrigger: 'black',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//  }) 
.addTo(controller);

//PIN the background----------------------------------------------------------
var pinAT = new ScrollMagic.Scene({
    triggerElement: '#slide05', 
    triggerHook: 0.2,
    duration: 760})
.setClassToggle('#s05-bg', 'pinned')
//  .addIndicators({
//      name: 'pinning background1',
//      colorTrigger: 'black',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//  }) 
.addTo(controller);

   // TheFadingScene1:Dialogo 1----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s05-01',
    triggerHook: 0.15,
    duration: 200,
   
    
})
.setClassToggle('#s05-01', 'fade-in') // add class to project01
//    .addIndicators({
//        name: 'dialogue1',
//        colorTrigger: 'black',
//        colorStart: '#75C695',
//        colorEnd: 'red'
// }) 
.addTo(controller);

   // TheFadingScene1:Dialogo 2----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s05-02',
    triggerHook: 0.15,
    duration: 200,
   
    
})
.setClassToggle('#s05-02', 'fade-in') // add class to project01
//    .addIndicators({
//        name: 'dialogue 2',
//        colorTrigger: 'black',
//        colorStart: '#75C695',
//        colorEnd: 'red'
// }) 
.addTo(controller);

//===========================================================
//VIÑETA 6
//===========================================================

// TheFadingScene1:Fondo----------------------------------------------------------
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide06',
    triggerHook: 0.7,
    duration:3000,
    
    
})
.setClassToggle('#slide06', 'fade-in') // add class to project01
//  .addIndicators({
//      name: 'fading scene 1',
//      colorTrigger: 'black',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//  }) 
.addTo(controller);

//PIN the background----------------------------------------------------------
var pinAT = new ScrollMagic.Scene({
    triggerElement: '#slide06', 
    triggerHook: 0.2,
    duration: 3000
})
.setClassToggle('#s06-bg', 'pinned')
//  .addIndicators({
//      name: 'pinning background1',
//      colorTrigger: 'black',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//  }) 
.addTo(controller);

   // TheFadingScene1:Dialogo 1----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s06-01',
    triggerHook: 0.15,
    duration: 200,
   
    
})
.setClassToggle('#s06-01', 'fade-in') // add class to project01
//    .addIndicators({
//        name: 'dialogue1',
//        colorTrigger: 'black',
//        colorStart: '#75C695',
//        colorEnd: 'red'
// }) 
.addTo(controller);

   // TheFadingScene1:Dialogo 2----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s06-02',
    triggerHook: 0.15,
    duration: 200,
   
    
})
.setClassToggle('#s06-02', 'fade-in') // add class to project01
//    .addIndicators({
//        name: 'dialogue 2',
//        colorTrigger: 'black',
//        colorStart: '#75C695',
//        colorEnd: 'red'
// }) 
.addTo(controller);

   // TheFadingScene1:Dialogo 3----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s06-03',
    triggerHook: 0.15,
    duration: 200,
   
    
})
.setClassToggle('#s06-03', 'fade-in') // add class to project01
//    .addIndicators({
//        name: 'dialogue 3',
//        colorTrigger: 'black',
//        colorStart: '#75C695',
//        colorEnd: 'red'
// }) 
.addTo(controller);

   // TheFadingScene1:Dialogo 4----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s06-04',
    triggerHook: 0.15,
    duration: 200,
   
    
})
.setClassToggle('#s06-04', 'fade-in') // add class to project01
//    .addIndicators({
//        name: 'dialogue 4',
//        colorTrigger: 'black',
//        colorStart: '#75C695',
//        colorEnd: 'red'
// }) 
.addTo(controller);

//===========================================================
//VIÑETA 7
//===========================================================

// TheFadingScene1:Fondo----------------------------------------------------------
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide07',
    triggerHook: 0.7,
    
    
})
.setClassToggle('#slide07', 'fade-in') // add class to project01
//  .addIndicators({
//      name: 'fading scene 1',
//      colorTrigger: 'black',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//  }) 
.addTo(controller);

//PIN the background----------------------------------------------------------
var pinAT = new ScrollMagic.Scene({
    triggerElement: '#slide07', 
    triggerHook: 0.2,
    })
.setClassToggle('#s07-bg', 'pinned')
//  .addIndicators({
//      name: 'pinning background1',
//      colorTrigger: 'black',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//  }) 
.addTo(controller);

   // TheFadingScene1:Dialogo 1----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s07-01',
    triggerHook: 0.45,
   
    
})
.setClassToggle('#s07-01', 'fade-in') // add class to project01
//     .addIndicators({
//         name: 'dialogue1',
//         colorTrigger: 'black',
//         colorStart: '#75C695',
//         colorEnd: 'red'
//  }) 
.addTo(controller);









}); // The end of the function, don't delete!


// .addIndicators({
//     name: 'dialogue1',
//     colorTrigger: 'black',
//     colorStart: '#75C695',
//     colorEnd: 'red'
// }) 