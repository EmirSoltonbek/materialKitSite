

window.onscroll = function showHeader() {
    var header = document.querySelector('.fixed-cap');

    if (window.pageYOffset > 400) {
        header.classList.add('title-fixed');
    }

    else {
        header.classList.remove('title-fixed');
    }
}




const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeigh / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active')
            }

            else {
                animItem.classList.remove('_active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return {
            top: rect.top + scrollTop, left: rect.left + scrollLeft
        }
    }

    animOnScroll();
}





function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;

        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}






function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}

// window.onclick = function (event2) {
//     if (!event2.target.matches('.dropbtn2')) {

//         var dropdowns2 = document.getElementsByClassName("dropdown-content2");
//         var i;

//         for (i = 0; i < dropdowns2.length; i++) {
//             var openDropdown2 = dropdowns2[i];

//             if (openDropdown2.classList.contains('show2')) {
//                 openDropdown2.classList.remove('show2');
//             }
//         }
//     }
// }







function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show3");

}

window.onclick = function (event3) {
    if (!event3.target.matches('.dropbtn3')) {

        var dropdowns = document.getElementsByClassName("dropdown-content3");
        var i;

        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show3')) {
                openDropdown.classList.remove('show3');
            }
        }
    }
}

// $(".dropbtn").click(function () {
//     $(this).hasClass("active") ?
//         $(".dropbtn").removeClass("active") :
//         ($(".dropbtn").removeClass("active"), $(this).addClass("active"));
// });

// $(".slicknav_nav").click(function () {
//     $(this).hasClass("active") ? $(".slicknav_nav").removeClass("active") : ($(".slicknav_nav").removeClass("active"), $(this).addClass("active"));
// }
// );