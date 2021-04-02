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
  }); // select
  // $(".select-item").click(function () {
  //   $(this).toggleClass('active').parents().siblings().find(".select-item").removeClass('active');
  //   $(this).siblings(".select-drop").slideToggle(300).parents().siblings().find(".select-drop").slideUp(300);
  // });
  // $("html, body").click(function () {
  //   $(".select-item").removeClass('active');
  //   $(".select-drop").slideUp(300);
  // });
  // $(".select-option").click(function () {
  //   let optionText = $(this).text();
  //   $(this).addClass('active').siblings().removeClass('active');
  //   $(this).closest(".select").find(".select-item span").text(optionText);
  //   $(".select-item").removeClass('active');
  //   $(".select-drop").slideUp(300);
  // });
});