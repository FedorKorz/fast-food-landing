let $dark = false;

$("#login").click(function() {

    $( "#dialog" ).dialog({ 
      autoOpen: false,
      dialogClass: 'login-popup',
      closeText: "x",
      draggable: false,
    });
    $("#login").click(function() {
      $("#dialog").dialog("open");
    });

    $("#login").click(function() {
      $(".page__container-locations").addClass("dark__background");
      $(".background_cucumbers").addClass("dark__background");
      $(".background_cocktails").addClass("dark__background");
      $(".background_cocktails").addClass("dark__background");
      $(".background_burgers").addClass("dark__background");
      $(".background_dounts").addClass("dark__background");
      $(".page__morning").addClass("dark__background");
      $(".page__menu").addClass("dark__background");
      $(".page__about").addClass("dark__background");
      $(".page__footer").addClass("page__footer");
    });

    $("button").click(function() {
      $(".page__container-locations").removeClass("dark__background");
      $(".background_cucumbers").removeClass("dark__background");
      $(".background_cocktails").removeClass("dark__background");
      $(".background_cocktails").removeClass("dark__background");
      $(".background_burgers").removeClass("dark__background");
      $(".background_dounts").removeClass("dark__background");
      $(".page__morning").removeClass("dark__background");
      $(".page__menu").removeClass("dark__background");
      $(".page__about").removeClass("dark__background");
      $(".page__footer").removeClass("page__footer");
    });
});
