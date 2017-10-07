require(["jquery", "bootstrap", "popper"], function ($) {
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    var Widget = function() {};

    var widget = Widget;

    widget.prototype.init = function () {
        this.console();
        this.stickyHeader();
        this.searchSubmit();
        this.backToTop();
    };

    widget.prototype.console = function () {
    };

    widget.prototype.stickyHeader = function () {
        var header = $(".header");
        var headerHeight = header.height();
        var stickyClass = "sticky";
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= headerHeight) {
                header.addClass(stickyClass);
            } else {
                header.removeClass(stickyClass);
            }
        });
    };

    widget.prototype.searchSubmit = function () {
        $("#btn-submit").click(function (e) {
            e.preventDefault();
            $("#searchform").submit();
        });
    };

    widget.prototype.backToTop = function () {
        if ($("#back-to-top").length) {
            var scrollTrigger = 100, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $("#back-to-top").addClass("show");
                    } else {
                        $("#back-to-top").removeClass("show");
                    }
                };
            backToTop();
            $(window).on("scroll", function () {
                backToTop();
            });
            $("#back-to-top").on("click", function (e) {
                e.preventDefault();
                $("html,body").animate({
                    scrollTop: 0
                }, 700);
            });
        }
    };

    $(document).ready(function () {
        var widget = new Widget();
        widget.init();
    });
});