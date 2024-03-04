var controller = new ScrollMagic.Controller();

function translateElem(elem, elemX, elemY, elemIndex) {
    $(elem).css({
        "-webkit-transform":
            "translate(" +
            elemX * (elemIndex + 1) +
            "px, " +
            elemY * (elemIndex + 1) +
            "px)",
        "-ms-transform":
            "translate(" +
            elemX * (elemIndex + 1) +
            "px, " +
            elemY * (elemIndex + 1) +
            "px)",
        transform:
            "translate(" +
            elemX * (elemIndex + 1) +
            "px, " +
            elemY * (elemIndex + 1) +
            "px)",
    });
}

if ($(".banner").length) {
    translateElem($(".banner__slide-content h1"), 0, 20, 0);
    translateElem($(".banner__slide-content p"), 0, 40, 0);
    translateElem($(".banner__slide-content .bttn"), 0, 60, 0);

    var bannerScene = new ScrollMagic.Scene({
        triggerElement: ".banner",
        triggerHook: 0.5,
        duration: window.innerHeight / 2,
    })
        .on("progress", function (event) {
            gsap.to($(".banner__slide-content h1"), {
                y: 20 - 20 * event.progress,
            });
            gsap.to($(".banner__slide-content p"), {
                y: 40 - 40 * event.progress,
            });
            gsap.to($(".banner__slide-content .bttn"), {
                y: 60 - 60 * event.progress,
            });
        })
        .addTo(controller);
}

// Products
if ($(".products").length) {
    const productItems = document.querySelectorAll(".products .product");
    if (productItems) {
        productItems.forEach((productItem, index) => {
            const effectiveIndex = index % 4;

            translateElem($(productItem), 0, (effectiveIndex + 1) * 20, 0);

            var productScene = new ScrollMagic.Scene({
                triggerElement: productItem,
                triggerHook: 0.8,
                duration: window.innerHeight / 2,
            })
                .on("progress", function (event) {
                    gsap.to($(productItem), {
                        y:
                            (effectiveIndex + 1) * 20 -
                            (effectiveIndex + 1) * 20 * event.progress,
                        duration: 0.5,
                    });
                })
                .addTo(controller);
        });
    }
}

// About
if ($(".about").length) {
    var aboutTranslate = [];
    $(".about p").each(function (index, item) {
        translateElem(item, 0, 50, index);
        aboutTranslate[index] = 50 * (index + 1);
    });

    translateElem($(".about__img"), 0, 50, 0);
    translateElem($(".about h2"), 0, 20, 0);

    var aboutScene = new ScrollMagic.Scene({
        triggerElement: ".about",
        triggerHook: 0.8,
        duration: window.innerHeight / 2,
    })
        .on("progress", function (event) {
            gsap.to($(".about__img"), { y: 50 - 50 * event.progress });
            gsap.to($(".about h2"), { y: 20 - 20 * event.progress });

            $(".about p").each(function (index, item) {
                gsap.to($(item), {
                    y:
                        aboutTranslate[index] -
                        aboutTranslate[index] * event.progress,
                    duration: 0.3,
                });
            });
        })
        .addTo(controller);
}

// Features
if ($(".features").length) {
    translateElem($(".features h2"), 0, 20, 0);
    translateElem($(".features__img"), 0, 50, 0);
    translateElem($(".features__slider"), 0, 70, 0);

    var aboutScene = new ScrollMagic.Scene({
        triggerElement: ".features",
        triggerHook: 0.8,
        duration: window.innerHeight / 2,
    })
        .on("progress", function (event) {
            gsap.to($(".features h2"), { y: 20 - 20 * event.progress });
            gsap.to($(".features__img"), { y: 50 - 50 * event.progress });
            gsap.to($(".features__slider"), { y: 70 - 70 * event.progress });
        })
        .addTo(controller);
}

// Reviews
if ($(".reviews").length) {
    var reviewsTranslate = [];
    $(".reviews__content > *").each(function (index, item) {
        translateElem(item, 0, 20, index);
        reviewsTranslate[index] = 20 * (index + 1);
    });

    translateElem($(".reviews h2"), 0, 50, 0);
    translateElem($(".reviews__img"), 0, 100, 0);
    translateElem($(".reviews__slider-wrap"), 0, 150, 0);

    var reviewsScene = new ScrollMagic.Scene({
        triggerElement: ".reviews",
        triggerHook: 0.8,
        duration: window.innerHeight / 2,
    })
        .on("progress", function (event) {
            gsap.to($(".reviews h2"), { y: 50 - 50 * event.progress });
            gsap.to($(".reviews__img"), { y: 100 - 100 * event.progress });
            gsap.to($(".reviews__slider-wrap"), {
                y: 150 - 150 * event.progress,
            });

            $(".reviews__content > *").each(function (index, item) {
                gsap.to($(item), {
                    y:
                        reviewsTranslate[index] -
                        reviewsTranslate[index] * event.progress,
                    duration: 0.3,
                });
            });
        })
        .addTo(controller);
}

// cta
if ($(".cta").length) {
    var ctaTranslate = [];
    $(".cta__image").each(function (index, item) {
        translateElem(item, 0, 30, index);
        ctaTranslate[index] = 30 * (index + 1);
    });

    translateElem($(".cta h5"), 0, 50, 0);
    translateElem($(".cta p"), 0, 70, 0);
    translateElem($(".cta__bttn"), 0, 90, 0);

    var ctaScene = new ScrollMagic.Scene({
        triggerElement: ".cta",
        triggerHook: 0.8,
        duration: window.innerHeight / 2,
    })
        .on("progress", function (event) {
            gsap.to($(".cta h5"), { y: 50 - 50 * event.progress });
            gsap.to($(".cta p"), { y: 70 - 70 * event.progress });
            gsap.to($(".cta__bttn"), { y: 90 - 90 * event.progress });

            $(".cta__image").each(function (index, item) {
                gsap.to($(item), {
                    y:
                        ctaTranslate[index] -
                        ctaTranslate[index] * event.progress,
                    duration: 0.3,
                });
            });
        })
        .addTo(controller);
}
