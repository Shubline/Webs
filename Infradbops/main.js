    
        $('.drop-toggle').on('click', function () {
            $('.dropdown-content').removeClass('show');
            $(this).closest('.dropdown').children('.dropdown-content').toggleClass('show');
        });
        $(document).on('click', function (e) {
            if (!e.target.matches('.drop-toggle')) {

                if (e.target.offsetParent) {
                    if (!e.target.offsetParent.className.includes('dropdown-content')) {
                        if ($('.dropdown-content').hasClass('show')) {
                            $('.dropdown-content').removeClass('show');
                        }
                    }
                }
                else { $('.dropdown-content').removeClass('show'
                ); }
            }
        });

        $('#shub').on('click', function () {
            $('.headrow').toggleClass('show');
        });


        $(document).ready(() => {

            const backToTop = $('#backToTop')
            const amountScrolled = 300

            $(window).scroll(() => {
                $(window).scrollTop() >= amountScrolled
                    ? backToTop.fadeIn('fast')
                    : backToTop.fadeOut('fast')
            })

            backToTop.click(() => {
                $('body, html').animate({
                    scrollTop: 0
                }, 600)
                return false
            })
        });

        $('.notice a').on('click', function () {
            $('.notice').remove();
        });
    
    
    


        $('.acc-toggle').on('click', function () {
            
            if (!$(this).closest('.accordion').children('.acc-content').hasClass('show')) {
                $('.acc-toggle.show').toggleClass('show');
                $(this).toggleClass('show');
                $('.acc-content.show').slideToggle(150);
                $('.acc-content.show').toggleClass('show');
                $(this).closest('.accordion').children('.acc-content').toggleClass('show');
                $(this).closest('.accordion').children('.acc-content').slideToggle(150);
            }
            else {
                $(this).toggleClass('show');
                $(this).closest('.accordion').children('.acc-content').toggleClass('show');
                $(this).closest('.accordion').children('.acc-content').slideToggle(150);
            }

        });

        let ismobile = window.matchMedia('(max-width: 600px)');

        $('.choose-item').on('click', function () {
            $('.choose-item').addClass('active');
            $('.choose-message').slideDown({
                start: function () {
                    $(this).css({
                        display: "flex"
                    })
                }
            }, 300);
            if (ismobile.matches) {
                var position = $('.choose-message').offset().top
                    - $('body').offset().top
                    + $('body').scrollTop();

                $('html, body').animate({
                    scrollTop: position - 50
                });
            }
        });

        var swiper = new Swiper(".testimonialitems", {
            slidesPerView: 1,
            spaceBetween: 10,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }
        });

   


