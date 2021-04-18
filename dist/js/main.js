"use strict";

$(document).ready(function () {
  // tab
  $(".tab").click(function () {
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $(".form").eq(index).addClass('active').siblings().removeClass('active');
  }); // stopPropagation

  $(".stopPropagation").click(function (e) {
    e.stopPropagation();
  });
  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".navmenu").toggleClass('active');
  });
  $(".close, .popup").click(function () {
    $(".popup").removeClass('active');
  });
});