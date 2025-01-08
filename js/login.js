/* 로그인 탭메뉴 */
$(".nomem").hide()
$(".l_tit>li:nth-child(1)").click(function(){
 $(".l_box").show()
 $(".nomem").hide()
 $(this).addClass("active")
 $(".l_tit>li:nth-child(2)").removeClass("active")
})
$(".l_tit>li:nth-child(2)").click(function(){
 $(".l_box").hide()
 $(".nomem").show()
 $(this).addClass("active")
 $(".l_tit>li:nth-child(1)").removeClass("active")
})