checkScroll();
function checkScroll() {
   
        if (window.scrollY > 100 )$("[navbar]").addClass(" backdrop-filter backdrop-blur  shadow");
  else {
    $("[navbar]").removeClass(" backdrop-filter backdrop-blur shadow");
  }
    

  

  let sections = document.querySelectorAll("section");
  for (let index = 0; index < sections.length; index++) {
    const ele = sections[index];
    let top = ele.offsetTop  ;
    let height = ele.offsetHeight;
    
    if (top-100  <= window.scrollY && top+height-100 > window.scrollY) {
      let id = $(ele).attr("id");
      $("nav").find("a").removeClass("activeHash");
      $("nav").find(`a[href="#${id}"]`).addClass("activeHash");

      break;
    }
    else{
        $("nav").find("a").removeClass("activeHash");

        $("nav").find(`a[href="#contact"]`).addClass("activeHash");

    }
  }
}

let item = 2;
window.addEventListener("scroll", () => checkScroll());
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {hideMenu();checkScroll()}
  
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    autoWidth: true,
    autoplay: true,
    margin: 10,
    loop: true,
    dotsEach: true,
    fluidSpeed: true,
  });
  $(".owl-carousel2").owlCarousel({
    center: true,
    autoWidth: true,
    autoplay: true,
    margin: 10,
    loop: true,
    dotsEach: true,
    fluidSpeed: true,
  });
});
$("[copyBtn]").click(function () {
  $(this).html("copied");
  setTimeout(() => {
    $(this).html("coupier");
  }, 2000);
  navigator.clipboard.writeText("contact@zagoraway.ma");
});
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  hideMenu();
  let to = $($.attr(this, "href")).offset().top-100 ;
  if (to < 0) to = 0;
  $("html, body").animate(
    {
      scrollTop: to,
    },
    1000
  );
});

function showMenu() {
  $("[navItems]").removeClass("hidden");
}
function hideMenu() {
  $("[navItems]").addClass("hidden");
}
