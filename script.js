$(function() {
  $('.header__nav__hamburger').click(function() {
    // メニューの開閉状態を切り替える
    $('.header__nav').toggleClass('open');

    // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
    $(this).toggleClass('active');
  });
  
  // スクロールを開始したら
  $(window).on("scroll", function () {
    // ファーストビューの高さを取得
    if ($(window).scrollTop() > 1) {
      // スクロールの位置がファーストビューより下の場合にclassを付与
      $(".header").addClass("header--bg");
    } else {
      // スクロールの位置がファーストビューより上の場合にclassを外す
      $(".header").removeClass("header--bg");
    }
  });
  // メニュー開閉時に付け外し
  // $('body').toggleClass('no-scroll');


});

