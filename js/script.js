/*$(".s2,.s3").hide()
setInterval (slide)
function slide(){
 $(".slide").delay(1500)
 $(".s1").fadeOut(1000)
 $(".s2").fadeIn(1000)
 $(".slide").delay(1500)
 $(".s2").fadeOut(1000)
 $(".s3").fadeIn(1000)
 $(".slide").delay(1500)
 $(".s3").fadeOut(1000)
 $(".s1").fadeIn(1000)
 $(".slide").delay(1500)
 $(".s3").fadeOut(1000)
 $(".s4").fadeIn(1000)
 $(".slide").delay(1500)
 $(".s4").fadeOut(1000)
 $(".s5").fadeIn(1000)
 $(".slide").delay(1500)
 $(".s5").fadeOut(1000)
 $(".s1").fadeIn(1000)
}*/

$(".category_bg").hide()
$(".menu>li:nth-child(1)>a").click(function(){
 $(".category_bg").fadeIn()
})
$(".c_close>button").click(function(){
 $(".category_bg").fadeOut()
})

//swiper slide
var swiper = new Swiper("#main .mySwiper", {
 cssMode: true,
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
 pagination: {
   el: ".swiper-pagination",
 },
 mousewheel: true,
 keyboard: true,
 loop : "true",
 autoplay:{ delay : 2500},
});

//con2 swiper slide

var swiper = new Swiper(".con2_img .mySwiper", {
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
 loop : "true",
});

$(".w4_box,.w6_box,.w1_box,.w4,.w6,.w1").hide()
$(".con3_tit>.tit>li:nth-child(1)").click(function(){
  $(".w2_box").show()
  $(".w2").show()
  $(".w4_box").hide()
  $(".w4").hide()
  $(".w6_box").hide()
  $(".w6").hide()
  $(".w1_box").hide()
  $(".w1").hide()
  $(this).addClass("active")
  $(".con3_tit>.tit>li:nth-child(2),.con3_tit>.tit>li:nth-child(3),.con3_tit>.tit>li:nth-child(4)").removeClass("active")
})
$(".con3_tit>.tit>li:nth-child(2)").click(function(){
  $(".w4_box").show()
  $(".w4").show()
  $(".w2_box").hide()
  $(".w2").hide()
  $(".w6_box").hide()
  $(".w6").hide()
  $(".w1_box").hide()
  $(".w1").hide()
  $(this).addClass("active")
  $(".con3_tit>.tit>li:nth-child(1),.con3_tit>.tit>li:nth-child(3),.con3_tit>.tit>li:nth-child(4)").removeClass("active")
})
$(".con3_tit>.tit>li:nth-child(3)").click(function(){
  $(".w6_box").show()
  $(".w6").show()
  $(".w2_box").hide()
  $(".w4").hide()
  $(".w4_box").hide()
  $(".w4").hide()
  $(".w1_box").hide()
  $(".w1").hide()
  $(this).addClass("active")
  $(".con3_tit>.tit>li:nth-child(1),.con3_tit>.tit>li:nth-child(2),.con3_tit>.tit>li:nth-child(4)").removeClass("active")
})
$(".con3_tit>.tit>li:nth-child(4)").click(function(){
  $(".w1_box").show()
  $(".w1").show()
  $(".w2_box").hide()
  $(".w2").hide()
  $(".w4_box").hide()
  $(".w4").hide()
  $(".w6_box").hide()
  $(".w6").hide()
  $(this).addClass("active")
  $(".con3_tit>.tit>li:nth-child(1),.con3_tit>.tit>li:nth-child(2),.con3_tit>.tit>li:nth-child(3)").removeClass("active")
})