routie(":page", function(page) {
  $(".page").hide(0);
  $("#" + page).show(0);
  $("li.active").removeClass("active");
  $("a[href='#" + page + "']").parent().addClass("active");
});


if (window.location.hash == "") routie("about");