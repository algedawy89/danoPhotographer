$(document).ready(function () {
  let nav = $("#nav");
  let about = $("#about");
  let footer = $("#footer");
//   let imgcarosul = $("#imgcarosul");
  



  if (nav.length > 0) {
    $.ajax({
      type: "GET",
      url: "includes/nav.html",
      dataType: "html", // الصيغة الصحيحة
      success: function (response) {
        nav.html(response); // ضع المحتوى داخل العنصر
      },
      error: function (xhr, status, error) {
        console.error("حدث خطأ أثناء تحميل القائمة:", error);
      }
    });
  }

//    if (imgcarosul.length > 0) {
//     $.ajax({
//       type: "GET",
//       url: "includes/imagecarousel.html",
//       dataType: "html", // الصيغة الصحيحة
//       success: function (response) {
//         imgcarosul.html(response); // ضع المحتوى داخل العنصر
//       },
//       error: function (xhr, status, error) {
//         console.error("حدث خطأ أثناء تحميل القائمة:", error);
//       }
//     });
//   }

  if (about.length > 0) {
    $.ajax({
      type: "GET",
      url: "includes/about.html",
      dataType: "html", // الصيغة الصحيحة
      success: function (response) {
        about.html(response); // ضع المحتوى داخل العنصر
      },
      error: function (xhr, status, error) {
        console.error("حدث خطأ أثناء تحميل القائمة:", error);
      }
    });
  }


    if (footer.length > 0) {
    $.ajax({
      type: "GET",
      url: "includes/footer.html",
      dataType: "html", // الصيغة الصحيحة
      success: function (response) {
        footer.html(response); // ضع المحتوى داخل العنصر
      },
      error: function (xhr, status, error) {
        console.error("حدث خطأ أثناء تحميل القائمة:", error);
      }
    });
  }



  $(document).on('click','#menuBtn',function(){
    
    $("#mobileMenu").toggleClass("hidden");
  });


   window.scrollToSection = function(id) {
  const $target = $('#' + id);

  if ($target.length > 0) {
    // تمرير ناعم إلى العنصر
    const yOffset = -50;
    const y = $target[0].getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  
  
    $target
      .addClass('highlighted-section transition-all duration-500 ease-in-out');

    // إزالة التأثير بعد وقت
    setTimeout(function () {
      $target.removeClass('highlighted-section');
    }, 2000);
  }
};
   


   window.handleSectionLink=function (e, id) {
    e.preventDefault();

    // إذا كنا في index.html، نفذ الدالة مباشرة
    if (location.pathname.includes('index.html') || location.pathname === '/' || location.pathname === '/index') {
      window.scrollToSection(id);
    } else {
      // غير index.html؟ انتقل إليها مع المعرف
      window.location.href = 'index.html#' + id;
    }
  }


  


});
