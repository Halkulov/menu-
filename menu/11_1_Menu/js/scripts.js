$(document).ready(function () {
  var $links = $("menu ul li a"); // [link, link, link, link]
  var $menul = $(".menu-link")
  var $btn = $(".close-btn")
  var $menu = $("menu")


  $menul.click(function () {
    $menu.css({
      transform: "translateX(0%)", transition: "1s",
    })
  });

  $btn.click(function () {
    $menu.css({
      transform: 'translateX(-100%)', transition: "1s",
    })
  });

  $links.click(function (e) {
    e.preventDefault();

    var $attr = $(this).attr("href"); // #app
    var $top = $($attr).offset().top // 70 - 60 == 10

    $("html, body").animate(
      {
        scrollTop: $top,
      },
      700
    );
  });

});
