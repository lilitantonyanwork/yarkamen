var swiper = new Swiper(".banner", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});
var swiper2 = new Swiper(".service__slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper2 = new Swiper(".project__list", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.addEventListener("DOMContentLoaded", function() {
    const banner__block = document.querySelector(".banner__right");
    const banner__box  = document.querySelector(".banner__product--info ");
    const tab  = document.querySelectorAll(".tab__item");
    const tab__content  = document.querySelectorAll(".registration__form");

    if(banner__block){
        banner__block.addEventListener("click", () => {
            if (banner__box.classList.contains('open')) {
                banner__box.classList.remove('open');
            } else {
                banner__box.classList.add("open");
            }

        });
    }
    tab.forEach(button => {
        button.addEventListener("click", (event) => {
            var tabId = button.dataset.tab
            openTab(event, tabId)

        });
    })

    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("registration__form");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab__item");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" tab__item--active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " tab__item--active";
    }

});