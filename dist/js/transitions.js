$("nav a").on("click", function(event) {
  event.preventDefault();

  const href = $(this).attr("href");

  window.history.pushState(null, null, href);

  $("nav a").removeClass("current");
  $(this).addClass("current");

  $.ajax({
    url: href,
    success: function(data) {
      $("container").fadeOut(50, function() {
        var newPage = $(data)
          .filter("container")
          .html();
        $("container").html(newPage);
        $("container").fadeIn(25);
      });
    }
  });
});
