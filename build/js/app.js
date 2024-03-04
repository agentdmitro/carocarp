// JS fragment import example
import * as functions from "./modules/functions.js";
functions.isWebp();
functions.spollers();

// БАЗОВІ СКРИПТИ
import "./modules/base.js";

import "./libs/dynamicAdapt.js";

//  СЛАЙДЕР
import "./modules/slider.js";

//  Анімації
import "./modules/anim.js";

addEventListener("DOMContentLoaded", function () {
    if ($(".product__summary-wrap select")) {
        setTimeout(() => {
            $(".variations select").select2();
        }, 120);
    }
    if ($("select")) {
        setTimeout(() => {
            $(".value #tub").select2();
        }, 120);
    }
    if ($(".filter__bttn")) {
        $(".filter__bttn").click(function () {
            $(".filter__bttn").toggleClass("active");
            $(".filter__products").toggleClass("active");
            $(".filter__items").toggle();
            $(".filter__bttn-submit").toggle();
        });
    }

    const categoryMedia = window.matchMedia("(max-width: 1240px)");

    if ($(".parent_cat") && categoryMedia.matches) {
        $(".parent_cat").click("click", function (e) {
            const childCat = $(this).find(".child_cat");

            if (childCat.hasClass("active")) {
                childCat.removeClass("active");
                $(this).removeClass("active");
            } else {
                $(".parent_cat .child_cat").removeClass("active");
                childCat.addClass("active");
                $(".parent_cat").not(this).removeClass("active");

                $(this).addClass("active");
            }
        });
    }
});
