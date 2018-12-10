require(["./js/myjs/config.js"], function() {
    require(["jquery", "swiper", "bscroll"], function($, swiper, bscroll) {
        $.ajax({
            url: "/init",
            data: {
                page: 1,
                page_size: 10,
                type: 1
            },
            success: function(res) {
                console.log(res);
                if (res.code === 1) {
                    rander(res.data)
                }
            }
        })
        new bscroll("myad", {
            probeType: 2
        })

        var swiper = new swiper(".swiper-container");

        $("header>span").on("click", function() {
            $(this).addClass("active").siblings().removeClass("active");
            var index = $(this).index();
            swiper.slideTo(index);
        })

        function rander(data) {
            var html = "";
            var address = "http://172.23.46.24:3000/images/"
            data.forEach(function(file) {
                html += `<dl>
                <dt><img src="${address+file.url}" alt=""></dt>
                <dd>${file.title}</dd>
            </dl>`;
            })
            $(".list").html(html)
        }

    })
})