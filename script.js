$(document).ready(function () {
  $(".faq .main1 ul li p").click(function () {
    if ($(this).find(".fa").css("transform") == "none") {
      $(this).find(".fa").css({ transform: "rotate(45deg)" });
    } else {
      $(this).find(".fa").css({ transform: "rotate(0deg)" });
      $(this).find(".fa").css({ transform: "none" });
    }
    $(this).siblings("div").slideToggle();
  });

  // forms
  $(".myform-control > input")
    .click(function () {
      const input = $(this);
      input.parent().addClass("activeInput");
      input.css({ borderColor: "#038c33" });
      input.siblings("i").css({ marginTop: "20px" });
      input.attr("placeholder", "");
    })
    .blur(function () {
      const input = $(this);
      if (!input.val()) {
        $(this).siblings("i").css({ marginTop: "0" });
        input.css("border-color", "");
        input.parent().removeClass("activeInput");
      }

      var text = $(this).siblings("label").html();
      $(this).removeClass("any");
      $(this).attr("placeholder", text);
    });

  $(".myform-control > i.toggle").click(function () {
    if ($(this).hasClass("fa-eye")) {
      $(this)
        .removeClass("fa-eye")
        .addClass("fa-eye-slash")
        .siblings("input")
        .attr({ type: "text" });
    } else {
      $(this)
        .addClass("fa-eye")
        .removeClass("fa-eye-slash")
        .siblings("input")
        .attr({ type: "password" });
    }
  });

  // form submits
  $("#loginform").submit(function (e) {
    e.preventDefault();
    $(this).css({ height: "500px" });
    $(".fa").css({ margin: 0 });
    $(this)
      .find(".myform-control")
      .removeClass("activeInput")
      .addClass("error");
    $(this).find(".error-message").css({ display: "flex" });
  });

  // referral and toogle
  $(".slider").click(function () {
    $(this).parent().parent().siblings("div").find(".referral").fadeToggle();
    $(this).toggleClass("slide");
  });

  // Dropdown
  $(".click").click(function () {
    if ($(this).attr("class").includes("payment")) {
      $(this).parent().siblings(".dropdown").fadeIn();
    } else {
      $(this).parent().siblings(".dropdown").fadeToggle();
    }
  });

  var options = $(".options div");

  $.each(options, function (index, value) {
    $(this).click(function () {
      if ($(this).parent().attr("class").includes("payment-dropdown")) {
        var innerHtml = $(this).html();
        $(this).parent().siblings("div").find("span").html(innerHtml);
      } else {
        var innerHtml = $(this).html();
        var currency = $(this).attr("currency");
        $(this)
          .parent()
          .parent()
          .siblings("div")
          .find(".countryspan")
          .html(innerHtml);

        $(".currencychange").text(currency);
      }

      $(".dropdown").fadeOut();
    });
  });
});
