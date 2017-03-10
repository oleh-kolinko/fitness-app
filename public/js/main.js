$(document).ready(function(){
    $('ul.tabs').tabs({'swipeable':true});
    // Activate the side menu
    $(".button-collapse").sideNav();
    $('select').material_select();
     $('.materialboxed').materialbox();
      $('.tooltipped').tooltip({delay: 50});

    // $('a').click(function (e) {
    // e.preventDefault();                   // prevent default anchor behavior
    // var goTo = this.getAttribute("href"); // store anchor href
    //
    // // do something while timeOut ticks ...
    //
    // setTimeout(function(){
    //      window.location = goTo;
    // },300);
    // });
    $('.fade1').hide();
    $('.fade1').fadeIn(300);
});
