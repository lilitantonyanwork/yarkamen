var swiper = new Swiper(".banner", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
});
var swiper2 = new Swiper(".service__list--slider", {
    spaceBetween: 0,
    slidesPerView: 4,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: "1",
            spaceBetween: 0,
        },
        480: {
            slidesPerView: "2",
            spaceBetween: 0,
        },
        769: {
            slidesPerView: "3",
            spaceBetween: 0,
        },
        901: {
            slidesPerView: "4",
            spaceBetween: 0,
        },
    },
});
var swiper3 = new Swiper(".project__list", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper4 = new Swiper(".categories-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: "1",
            spaceBetween: 0,
        },
        480: {
            slidesPerView: "2",
            spaceBetween: 24,
        },
        768: {
            slidesPerView: "3",
            spaceBetween: 24,
        },
        900: {
            slidesPerView: "3",
            spaceBetween: 24,
        },
    },
});
var swiper5 = new Swiper(".mySwiper", {
    spaceBetween: 24,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper6 = new Swiper(".mySwiper2", {
    spaceBetween: 10,

    thumbs: {
        swiper: swiper5,
    },
});

document.addEventListener("DOMContentLoaded", function() {
    const banner__block = document.querySelectorAll(".banner  .banner__right");
    // const banner__box  = document.querySelector(".banner .swiper-slide-active .banner__product--info ");
    const banner__point =  document.querySelectorAll(".banner  .banner__point");
    const tab  = document.querySelectorAll(".registration__tabs .tab__item");
    const tab__content  = document.querySelectorAll(".registration__form");
    const deliveryTab  = document.querySelectorAll(".delivery__tabs .tab__item--delivery");
    const bankTab  = document.querySelectorAll(".bank__tabs .tab__item--bank");
    const deliverycontent  = document.querySelectorAll(".registration__form");

    const searchBtn  = document.querySelector(".btn__search-open");
    const search  = document.querySelector(".search");
    const searchInput = document.getElementById("search");
    const result = document.querySelector(".search__result");
    const menu__btn = document.querySelector(".mobile__btn");
    const menu__box = document.querySelector(".menu__box");
    const mainBlock  = document.querySelector("body ");
    const hasSub = document.querySelectorAll(".has-sub");
    const closeSearch = document.querySelector(".btn__close-search");
    const showMore = document.querySelector(".btn__show-more");

    if(showMore){
        showMore.addEventListener("click", (e) => {
            const parent = showMore.closest('.filter__content--more'); // or .banner__right
            if (parent.classList.contains('open')) {
                parent.classList.remove('open');
                const dataMore = showMore.getAttribute('data-more');
                showMore.textContent = dataMore;

            } else {
                parent.classList.add('open');

                const dataLess = showMore.getAttribute('data-less');
                showMore.textContent = dataLess;
            }

        });
    }
    menu__btn.addEventListener("click", () => {

        if (menu__box.classList.contains('open')) {
            mainBlock.classList.remove("no-scroll")
            menu__box.classList.remove('open');
            menu__btn.classList.remove('open');
        } else {
            menu__box.classList.add("open");
            menu__btn.classList.add("open");
            mainBlock.classList.add("no-scroll")
        }

    });

    searchInput.addEventListener("input", function(event) {
            const value = searchInput.value.trim();
            if (value.length >= 3) {
                result.style.display = "block";
            } else {
                result.style.display = "none";

        }
    });
    if (closeSearch){
        closeSearch.addEventListener("click", (event) => {
            event.preventDefault();
            search.classList.remove('open');
            result.style.display = "none";

        });
    }
    hasSub.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const child = button.querySelector(".menu-sub");
             if (button.classList.contains('open')) {
                 button.classList.remove('open');
                 button.parentElement.classList.remove('open');
            } else {
                 button.classList.add("open");
                 button.parentElement.classList.add('open');
            }

        });
    })


    if(banner__block){
        banner__block.forEach(button => {
            button.addEventListener("click", () => {
                const banner__box = button.querySelector('.banner__product--info');
                if (banner__box.classList.contains('open')) {
                    banner__box.classList.remove('open');
                } else {
                    banner__box.classList.add("open");
                }

            });
        })
    }
    if(banner__point){
        banner__point.forEach(div => {
            div.addEventListener('mouseenter', () => {
                const container = div.closest('.banner__right');
                const infoBox = container.querySelector('.banner__product--info');
                if (infoBox) {
                    infoBox.classList.add('open');
                }
            });

            div.addEventListener('mouseleave', () => {
                const container = div.closest('.banner__right');
                const infoBox = container.querySelector('.banner__product--info');
                if (infoBox) {
                    infoBox.classList.remove('open');
                }
            });
        });
    }
    tab.forEach(button => {
        button.addEventListener("click", (event) => {
            const tabId = button.dataset.tab
            openTab(event, tabId)

        });
    })

    deliveryTab.forEach(button => {

        button.addEventListener("click", (event) => {
            document.querySelectorAll('.tab__item--delivery').forEach(el => {
                el.classList.remove('tab__item--active');
            });

            // Add active class to the clicked button
            button.classList.add('tab__item--active');

        });
    })
    bankTab.forEach(button => {

        button.addEventListener("click", (event) => {
            document.querySelectorAll('.tab__item--bank').forEach(el => {
                el.classList.remove('tab__item--active');
            });

            // Add active class to the clicked button
            button.classList.add('tab__item--active');

        });
    })

    searchBtn.addEventListener("click", () => {
        search.classList.add('open');
        menu__box.classList.remove('open');
        document.querySelector(".search__form").removeAttribute('style');

    });
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

    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
    openAccordion();
    function openAccordion(){
        var acc = document.getElementsByClassName("accordion");
        var ii;

        for (ii = 0; ii < acc.length; ii++) {
            acc[ii].addEventListener("click", function() {
                /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
                this.classList.toggle("active");

                /* Toggle between hiding and showing the active panel */
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    }

    function priceRange(){
        const rangeInput = document.querySelectorAll(".range-input input"),
            priceInput = document.querySelectorAll(".price-input input"),
            range = document.querySelector(".slider .progress");
        let priceGap = 1000;

        priceInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minPrice = parseInt(priceInput[0].value),
                    maxPrice = parseInt(priceInput[1].value);

                if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
                    if (e.target.className === "input-min") {
                        rangeInput[0].value = minPrice;
                        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                    } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                    }
                }
            });
        });

        rangeInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minVal = parseInt(rangeInput[0].value),
                    maxVal = parseInt(rangeInput[1].value);

                if (maxVal - minVal < priceGap) {
                    if (e.target.className === "range-min") {
                        rangeInput[0].value = maxVal - priceGap;
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                    }
                } else {
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
                    range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            });
        });

    }
    const modal = document.getElementById("partner-modal");
    const modalRequest = document.getElementById("request-modal");
    const modalVideo = document.getElementById("video-modal");
    const video = document.querySelector(".modal__video video");
    const btnVideo = document.querySelector(".btn__play");
    const openButton = document.querySelector(".become__partner");
    const openRequest = document.querySelectorAll(".btn__request");
    const closeBtn = document.querySelectorAll(".btn__close");
    const modalSubmit = document.querySelector(".modal__partner .btn__primary");
    const notification = document.querySelector(".notification");
    const btnFilter = document.querySelector(".btn__filter");
    const filter = document.querySelector(".categories__filter");

    if (btnFilter){

        btnFilter.addEventListener("click", (event) => {
            event.preventDefault();
            if (filter.classList.contains('open')) {
                filter.classList.remove('open');
                btnFilter.classList.remove('open');
            } else {
                filter.classList.add('open');
                btnFilter.classList.add('open');
            }


        });

    }
    if (openButton){

        openButton.addEventListener("click", (event) => {
            event.preventDefault();
            modal.style.display = "flex";
        });

    }
    if(btnVideo){
        btnVideo.addEventListener("click", (event) => {
            event.preventDefault();
            modalVideo.style.display = "flex";
            video.style.maxWidth = '100%';
            video.style.maxHeight = '100%';
        });
    }
    if (openRequest){
        console.log('aaa')
        openRequest.forEach(button => {
            button.addEventListener("click", (event) => {
                event.preventDefault();
                modalRequest.style.display = "flex";
            });
        })


    }
    if(modalSubmit){
        modalSubmit.addEventListener("click", (event) => {
            event.preventDefault();
            modal.style.display = "none";
            notification.style.display = "flex";
            setTimeout(
                function (){
                    notification.style.display = "none";
                }, 5000
            )


        });
    }
    if(closeBtn){
        closeBtn.forEach(button => {

            button.addEventListener("click", () => {
                if (modal){
                    modal.style.display = "none";
                }
                if (modalRequest){
                    modalRequest.style.display = "none";
                }
                if(modalVideo){
                    if (video) {
                        video.pause();
                        video.currentTime = 0;
                    }
                    modalVideo.style.display = "none";
                }
            });
        });
    }
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";

        }
        if (event.target === modalRequest) {
            modalRequest.style.display = "none";

        }
        if (event.target === modalVideo) {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
            modalVideo.style.display = "none";

        }

    });
    //inputMask
    let phoneInputs = document.querySelectorAll('.js-phone-mask');
    phoneInputs.forEach(function (input) {
        var maskOptions = {
            mask: '+7 (999) 999-99-99',  // Здесь вы можете установить свою маску
            greedy: false,
            placeholder: '_',
            showMaskOnHover: false,
        };

        Inputmask(maskOptions).mask(input);
    });

    const fileInput = document.querySelector(".file__upload");
    const uploadBtn = document.querySelector(".file__uploader");
    if(fileInput){
        uploadBtn.addEventListener("click", function () {
            fileInput.click(); // Triggers file upload dialog
        });
    }

    const masterCheckbox = document.querySelector('.card__table--head input[type="checkbox"]');
    const itemCheckboxes = document.querySelectorAll('.card__table--body input[type="checkbox"]');

    if(masterCheckbox){
        masterCheckbox.addEventListener('change', function () {
            itemCheckboxes.forEach(checkbox => {
                checkbox.checked = masterCheckbox.checked;
            });
        });
    }


    if(itemCheckboxes){
        itemCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (!checkbox.checked) {
                    masterCheckbox.checked = false;
                } else {
                    const allChecked = Array.from(itemCheckboxes).every(cb => cb.checked);
                    masterCheckbox.checked = allChecked;
                }
            });
        });
    }

});