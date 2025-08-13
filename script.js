$(function() {
  $('.header__nav-hamburger').click(function() {
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

  $('a[href^="#"]').click(function(){
    // 移動後の上段を0px。30なら30px下。
    var adjust = 0;
    // 速度（ミリ秒）
    var speed = 400;
    // リンク先（href）を取得して、hrefに代入
    var href= $(this).attr("href");
    // hrefの中が「#」or「空白」の時は「’html’」を、どちらでも無ければ定義していた変数「href」の値。「? ‘html’ : href」が、「if (href == "#" || href == "") { var target = $('html'); } else { var target = $(href); }」
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 上からの距離を取得 + adjustで設定した値
    var position = target.offset().top + adjust;
    // スムーススクロール
    $('body,html').animate(
      { scrollTop:position },
      speed,  
      'swing'  //速度が可変
    );
    return false;
  });

  // トップに戻るボタン
  const $pageTop = $("#js__page-top");
  $pageTop.hide();
  $(window).scroll(function () {
    // もしトップから1px離れたら...
    if ($(window).scrollTop() > 1) {
      // 0.3秒でフェードイン
      $pageTop.fadeIn(300).css('display', 'flex');
    } else {
      // 0.3秒でフェードアウト
      $pageTop.fadeOut(300);
    }
  });
  // クリックしたら0.3秒でトップに戻る
  $pageTop.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });



});

