$(document).ready(function () {
  $(".faq .main1 ul li p").click(function () {
    if ($(this).find(".fa").css("transform") == "none") {
      $(this).find(".fa").css("transform", "rotate(45deg)");
    } else {
      $(this).find(".fa").css("transform", "rotate(0deg)");
      $(this).find(".fa").css("transform", "none");
    }
    $(this).siblings("div").slideToggle();
  });

  // forms
  $(".myform-control > input")
    .click(function () {
      const input = $(this);
      input.parent().addClass("activeInput");
      input.css("border-color", "#038c33");
      $(this).siblings("i").css("margin-top", "20px");
      $(this).attr("placeholder", "");
    })
    .blur(function () {
      const input = $(this);
      if (!input.val()) {
        $(this).siblings("i").css("margin-top", "0");
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

  $(".send_Email").click(function () {
    $(".writeMail").css("display", "none");
    $(".emailSent").css("display", "flex");
  });

  // form submits
  $("#loginForm").submit(function (e) {
    e.preventDefault();
    $(this).css("height", "500px");
    $(".fa").css("margin", "0");
    $(this)
      .find(".myform-control")
      .removeClass("activeInput")
      .addClass("error");
    $(this).find(".error-message").css("display", "flex");
  });

  // referral and toogle
  $(".slider").click(function () {
    $(".referral").fadeToggle();
    $(this).toggleClass("slide");
  });

  // country
  $(".click").click(function () {
    $(".dropdown").fadeToggle();
  });

  // Payment System
  $(".payment").click(function () {
    $(".paymentDropdown").fadeIn();
  });
});
