 $(window).load(function() {
        $('.loadBar').delay(3000).fadeOut(1000);
    });

    jQuery('img.svg').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });



    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    autoplay: true,
                    mouseDrag: true,
                    touchDrag: true,
                    lazyLoad: true
                },
                600: {
                    items: 3,
                    dots: true,
                    lazyLoad: true
                },
                1000: {
                    items: 3,
                    loop: false,
                    margin: 20,
                    dots: true,
                    lazyLoad: true
                }
            }
        });
        $('.owl-carousel-floor').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    autoplay: true,
                    mouseDrag: true,
                    touchDrag: true,
                    lazyLoad: true
                },
                600: {
                    items: 3,
                    dots: true,
                    lazyLoad: true
                },
                1000: {
                    items: 5,
                    loop: false,
                    margin: 20,
                    dots: true,
                    lazyLoad: true
                }
            }
        });
    });