//declaring variables
const responsive = {
    0: {
        items: 1
    },
    320:{
        items: 1
    },
    560:{
        items: 2
    },
    960:{
        items: 3
    }
}

$(document).ready(function(){
 
    //naming a js-library name and spacifying a class into into it
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');  

    //creating the onclick event to the toogle class element
    /* click event on toggle menu 
     when  you click on the toogle menu the function is executed*/
     $toggleCollapse.click(function(){
         $nav.toggleClass('collapse');  // with this toggleClass method u can add new classes
     })

     //owl-carousel for blog
     $('.owl-carousel').owlCarousel({
         loop: true,
         autoplay: false, // to be enabled later
         autoplayTimeout: 3000,    //it will automatically scroll itsself
         dots: false, // to remove the dots
         nav: true,
         //enabling owl-carousel to use the arows for navigation
         navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
         responsive: responsive
     });

     //click to scroll-up
     $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },2000); 
        //1000 same as 1s  it takes 1s to scroll up when btn is clicked on
     });

     // AOS intance
     AOS.init();


});