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
        $(this)
          .parent()
          .siblings("div")
          .find(".payment")
          .css({
            borderColor: "green",
            boxShadow: "0px 1px 2px 1px rgba(3,140,51,0.2)",
          });
      } else {
        var flag = $(this).children("img").attr("src");
        var currency = $(this).attr("currency");
        $(this)
          .parent()
          .parent()
          .siblings("div")
          .find(".country-span img")
          .attr("src", flag);

        $(this).parent().parent().siblings().find(".currency-change").text(currency);
      }

      $(".dropdown").fadeOut();
    });
  });

  // $(".send-money .dropdown").mouseover(function (params) {
  //   $(this).css("display","block");
  // })

  // $(".send-money .dropdown").mouseout(function (params) {
  //   $(this).fadeOut();
  // })

  //
  $(".my-profile .click").click(function () {
    if ($(this).find(".fa").css("transform") == "none") {
      $(this).find(".fa").css({ transform: "rotate(90deg)" });
    } else {
      $(this).find(".fa").css({ transform: "rotate(0deg)" });
      $(this).find(".fa").css({ transform: "none" });
    }
  });

  // input in account verfcation process

  $("ul.field-list li fieldset input").each(function () {
    if (!$(this).val() == "") {
      $(this).siblings("legend").css({ display: "inline" });
    }
  });

  if ($("ul.field-list li fieldset input").val()) {
    console.log("true");
    $(this).siblings("legend").css({ display: "inline" });
  }
  $("ul.field-list li fieldset input")
    .blur(function (params) {
      var input = $(this);
      if (input.val() === "") {
        input.siblings("legend").css({ color: "#e53935" });
        input.parent().css({ borderColor: "#e53935" });
        input.parent().siblings("span").css({ display: "inline-block" });
      } else {
        input.siblings("legend").css("color", "green");
        input.parent().css("border-color", "#e3e5e5");
        input.parent().siblings("span").css("display", "none");
      }
    })
    .click(function (params) {
      var input = $(this);
      input.parent().css({ borderColor: "green" });
      input.siblings("legend").css({ display: "inline" });
      input.parent().siblings("span").css({ display: "none" });
      input.siblings("legend").css({ color: "green" });
    });

  // selfie page script

  $(".selfie .button-large")
    .mouseover(function (params) {
      $(this).text("Upload");
    })
    .mouseout(function (params) {
      $(this).text("Continue");
    });

  // cards page script
  $(".cards-div .cards").click(function (params) {
    if ($(this).attr("class").includes("not-in-use")) {
      $(".cards-div .cards").addClass("not-in-use");
      $(this).removeClass("not-in-use");
    }
  });
});
