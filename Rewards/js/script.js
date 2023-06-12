$(document).ready(function () {

// $('.terms-sec ol li a').on('click', function() {  
//   $('html, body').animate({scrollTop: $(this.hash).offset().top - 100}, 100);
//   return false;
// });

  checkCookie();
  $('.navbar-nav li > a').click(function () {
    $('li').removeClass('active');
    $(this).parent().addClass('active');
  });

  $('.cookies-sec .btn').click(function () {
    $('.cookies-sec').addClass('hide');
    // checkCookie();
  });

  $("#exampleModal").on('hidden.bs.modal', function (e) {
    $("#exampleModal iframe").attr("src", $("#exampleModal iframe").attr("src"));
  });

  // $('.has-megamenu').mouseover(function () {
  //   $('.megamenu').addClass('show');
  //   // $(this).parent().addClass('active');
  // });
  // $('.has-megamenu').mouseout(function () {
  //   $('.megamenu').removeClass('show');
  //   // $(this).parent().addClass('active');
  // });
  $("a").tooltip({
            
  });

  $(".btn").tooltip({
            
  });

  $(".nav-item").on("click", function(){

    $(".collapse").find(".active").removeClass("active");
    $(this).addClass("active");

});

  function checkCookie() {
    let user = getCookie("cookiePopup");
    if (user != "") {
      $('.cookies-sec').addClass('hide');
    } else {
      $('.cookies-sec').removeClass('hide');
      setCookie("cookiePopup", true, 365);
     
    }
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  }).init(); //custom animation wow

// if (document.cookie != null) {
//      // Hide the element here.
//      $('.cookies-sec').addClass('hide');
//      console.log('hi');
// }

  //   contact form
  $(".contactForm").submit(function (event) {
    event.preventDefault();
    var formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        msg: $("#msg").val(),

    };
    console.log(formData)
    $.ajax({
        type: "POST",
        url: "form.php",
        data: formData,
    }).done(function (data) {
        Swal.close();
        Swal.fire("Successfully submitted!");

        var frm = document.getElementsByClassName('contactForm')[0];
        frm.reset();
    });

  
});

});


$(document).scroll(function () {
  var $nav = $(".navbar");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

  // var $nav = $(".mobile-nav");
  // $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});

