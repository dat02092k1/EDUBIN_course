// $('.slick-child-sliders').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   });
function resetSlick($slick_slider, settings) {
  $(window).on("resize", function () {
    if ($(window).width() < 320) {
      if ($slick_slider.hasClass("slick-initialized")) {
        $slick_slider.slick("unslick");
      }
      return;
    }

if (!$slick_slider.hasClass("slick-initialized")) {
      return $slick_slider.slick(settings);
    }
  });
}

AOS.init({
  easing: "ease-out-back",
  duration: 1500,
});       

$('.slick-conts').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          arrows: false, 
          // centerMode: true,
          // centerPadding: '60px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

$('.slick-sliders').slick({
    arrows: true,
    autoplaySpeed: 5000,
    autoplay: true,
    prevArrow: $(".pre_arr"),
    nextArrow: $(".next_arr"),
    responsive: [
      {
        breakpoint: 568,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '60px',
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 10000
        }
      }
    ]
});

$('.slick-child-sliders').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".pre-arr"),
    nextArrow: $(".next-arr"),
    responsive: [
      {
        breakpoint: 568,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '60px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

$('.slick-icons').slick({
  arrows: false,
  slidesToShow: 5,
  draggable: true,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 568,
      settings: {
        arrows: false,
        // centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

// $('.video').magnificPopup({
//   mainClass: "item-image__control",
//   delegate: 'a', // child items selector, by clicking on it popup will open
//   type: 'iframe'
// });


//  $(document).ready(function(){
//      $('.slick-sliders').slick({
//          autoplay:true,
//          arrows: true,
//          prevArrow:'<span class="priv_arrow"><i class="fa-solid fa-angle-left"></i></span>',
//          nextArrow:'<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>'
//      });
//  });
 


//document.querySelector('.slick-prev').innerHTML = '>'

//  $('.slick-sliders').slick({
//      arrows: false
//    })
  
//    $('.left').click(function(){
//      $('.slick-sliders').slick('slickPrev');
//    })
  
//    $('.right').click(function(){
//      $('.slick-sliders').slick('slickNext');
//    })
fetch('https://60d4611a61160900173cb070.mockapi.io/courses')
  .then(response => response.json())
  .then(courses => renderData(courses))
  .catch(error => console.log(error))

var listCourses = document.querySelector('.courses-slick-items')

function renderData(courses) {
  console.log(courses);
  
  var htmls = courses.map(function(course) {
    let rate = "";
    for (let i = 0; i < course.rate; i++) {
      rate += `<i class="fa-solid fa-star text-primary"></i>`;
    }
    for (let i = 0; i < 5 - course.rate; i++) {
        rate += `<i class="fa-regular fa-star text-primary"></i>`;
      }
      console.log(rate)
    return `
    <div class="courses-slick-item mx-3 bg-white mt-5">
                            <div class="bg relative">
                                <img src=${course.image} alt="">
                                <span class="level absolute top-0 m-2 p-1 text-bold text-white bg-blue-900">${course.level}</span> 
                                <span class="bookmark absolute top-0 right-0 m-2 p-1 bg-white"><i class="fa-regular fa-bookmark"></i></span>
                            </div>
                            <div class="cont mt-4"> 
                                <div class="rate mx-4 text-sm text-amber-400 ">
                                ${rate}
                                    
                                    <span class="text-black"> (${course.rate_quantity})</span>
                                </div>  
                                <div class="para mx-4 mt-4 mb-5">
                                <h2 class="font-bold text-xl">${course.name}</h2>
                                </div>
                                <div class="font mx-4">
                                <span class="mx-2"><i class="fa-regular fa-user"></i> ${course.total_enrolled}</span>
                                <span class="mx-2"><i class="fa-regular fa-clock"></i>  ${course.duration}</span>
                                </div>
                                <div class="teach m-4">
                                <span class="flex">
                                    <img class="w-[27px] h-[27px] mx-2 rounded-[50%]" src="https://thepixelcurve.com/html/edubin/images/course/teacher/t-2.jpg" alt="">
                                    <p>by <h2 class="font-bold text-blue-900 mx-1"> ${course.teacher}</h2> in <h2 class="font-bold text-blue-900 mx-1">${course.categories}</h2> </p>
                                </span>
                                </div>
                            </div>
                            <hr>
                            <div class="info m-4 grid grid-cols-2 ">
                                <h3 class="text-xl font-bold text-blue-900">Free</h3>
                                <span class=" ">
                                <i class="fa-regular fa-cart-arrow-down"></i> Get Enrolled
                                </span>
                            </div>
                        </div>
    `;
  });
  listCourses.innerHTML = htmls.join('');
  $('.courses-slick-items').slick({
    arrows: true,
    slidesToShow: 3,
    draggable: true,
    slidesToScroll: 1,
    // autoplaySpeed: 2000,
    // autoplay: true,
    prevArrow: $(".self-arr-pre"),
    nextArrow: $(".self-arr-next"),
    responsive: [
      {
        breakpoint: 568,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '60px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

// fetch('https://60d4611a61160900173cb070.mockapi.io/courses')
//     .then(response => response.json())
//     .then(courses => renderDataRes(courses))
//     .catch(error => console.log(error))

//     var listResCourses = document.querySelector('.res-slick')
//     function renderDataRes(courses) {
//     console.log(courses);
//     var htmls2 = courses.map(function(course) {
//     return `
//     <div class="courses-slick-item mx-3 bg-white mt-5">
//                             <div class="bg relative">
//                                 <img src=${course.image} alt="">
//                                 <span class="level absolute top-0 m-2 p-1 text-bold text-white bg-blue-900">${course.level}</span> 
//                                 <span class="bookmark absolute top-0 right-0 m-2 p-1 bg-white"><i class="fa-regular fa-bookmark"></i></span>
//                             </div>
//                             <div class="cont mt-4"> 
//                                 <div class="rate mx-4 text-sm text-amber-400 ">
//                                     <i class="fas fa-star"></i>
//                                     <i class="fas fa-star"></i>
//                                     <i class="fas fa-star"></i>
//                                     <i class="fas fa-star"></i>
//                                     <i class="fas fa-star"></i>
                                    
//                                     <span class="text-black"> (${course.rate_quantity})</span>
//                                 </div>  
//                                 <div class="para mx-4 mt-4 mb-5">
//                                 <h2 class="font-bold text-xl">${course.name}</h2>
//                                 </div>
//                                 <div class="font mx-4">
//                                 <span class="mx-2"><i class="fa-regular fa-user"></i> ${course.total_enrolled}</span>
//                                 <span class="mx-2"><i class="fa-regular fa-clock"></i>  ${course.duration}</span>
//                                 </div>
//                                 <div class="teach m-4">
//                                 <span class="flex">
//                                     <img class="w-[27px] h-[27px] mx-2 rounded-[50%]" src="https://thepixelcurve.com/html/edubin/images/course/teacher/t-2.jpg" alt="">
//                                     <p>by <h2 class="font-bold text-blue-900 mx-1"> ${course.teacher}</h2> in <h2 class="font-bold text-blue-900 mx-1">${course.categories}</h2> </p>
//                                 </span>
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="info m-4 grid grid-cols-2 ">
//                                 <h3 class="text-xl font-bold text-blue-900">Free</h3>
//                                 <span class=" ">
//                                 <i class="fa-regular fa-cart-shopping text-amber-400"></i> Get Enrolled
//                                 </span>
//                             </div>
//                         </div>
//     `;
//   });
//   listResCourses.innerHTML = htmls2.join('');
//   $('.res-slick').slick({
//     arrows: true,
//     slidesToShow: 1,
//     draggable: true,
//     slidesToScroll: 1,
//     // autoplaySpeed: 2000,
//     // autoplay: true,
//     prevArrow: $(".self-arr-pre2"),
//     nextArrow: $(".self-arr-next2"),
//   });
// }

function dropDown() {
  document.querySelector(".cont_dropdown").classList.toggle("show");
 }