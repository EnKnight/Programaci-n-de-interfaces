'use strict';

$(function() {
  $(".img-w").each(function() {
    $(this).wrap("<div class='img-c'></div>")
    let imgSrc = $(this).find("img").attr("src");
     $(this).css('background-image', 'url(' + imgSrc + ')');
  })            
  
  $(".img-c").click(function() {
    let w = $(this).outerWidth();
    let h = $(this).outerHeight();
    let x = $(this).offset().left;
    let y = $(this).offset().top;
    
    
    $(".active").not($(this)).remove()
    let copy = $(this).clone();
    copy.insertAfter($(this)).height(h).width(w).delay(500).addClass("active")
    $(".active").css('top', y - 8);
    $(".active").css('left', x - 8);
    
    setTimeout(function() {
      copy.addClass("positioned")
    }, 0)
    console.log("Holis");
    document.getElementById('imprimir').style.display = "block";
    document.getElementById('ayudae').style.display = "none";
    document.getElementById('ayudas').style.display = "block";

  })  
})

$(document).on("click", ".img-c.active", function() {
  let copy = $(this);
  copy.removeClass("positioned active").addClass("postactive");
  setTimeout(function() {
    copy.remove();
  }, 500)
  console.log("Camaris");
  document.getElementById('imprimir').style.display = "none";
  document.getElementById('ayudae').style.display = "block";
  document.getElementById('ayudas').style.display = "none";
})