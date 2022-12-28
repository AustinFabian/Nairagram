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

  // country
  $(".click").click(function () {
    $(this).parent().siblings(".dropdown").fadeToggle();
  });

  var country = $(".countries div");
  $.each(country, function (index, value) {
    $(value).click(function () {
      var img = $(this).children("img").attr("src");
      var countryName = $(this).text();
      var currency = $(this).attr("currency");

      $(".countryFlag").attr("src", img);
      $(".countrySpan").text(countryName);

      $(".currencyChange").text(currency);

      $(".dropdown").fadeOut();
    });
  });

  // Payment System
  $(".payment").click(function () {
    $(".paymentDropdown").fadeIn();
  });

  var system = $(".paymentDropdown div");

  $.each(system, function (index, value) {
    $(value).click(function () {
      var innerHtml = $(value).html();
      $(".payment").html(innerHtml).css({ justifyContent: "flex-start" });
      $(".paymentDropdown").fadeOut();
    });
  });
});
