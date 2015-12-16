(function($, hljs){

    $(document).ready(function(){

        if($('.content').length){

            // Syntax highlighting
            hljs.initHighlightingOnLoad();
            // Add Bootstrap styling to tables
            $('.content table').addClass('table');

            // FitVids
            $('.content').fitVids();

        }

        if($('.home-categories').length){
            $('.home-categories').masonry({
                columnWidth: '.col',
                itemSelector: '.col',
                transitionDuration: 0
            });
        }

        var panelHeading = $('.panel-heading');
    		var categoryTitle = $('.category-title');
    		for (var i = 0, l = panelHeading.length; i < l; i++) {
    			var str = panelHeading[i].innerHTML.replace(/ /g, '').toLowerCase();
    			if (str === 'reactnativeios') panelHeading[i].innerHTML = 'React Native iOS';
    		}
    		for (var i = 0, l = categoryTitle.length; i < l; i++) {
    			var str = categoryTitle[i].innerHTML.replace(/ /g, '').toLowerCase();
    			if (str === 'reactnativeios') categoryTitle[i].innerHTML = 'React Native iOS';
    		}

        $('img#right').click(function () {
            if ($('.header').hasClass('show')) {
                var input = $('.header.doc input');
                if (input.val()) {
                    $('.header.doc button').click();
                } else {
                    $('.cover').click();
                };
            } else {
                $('.header').addClass('show')
                $('.cover').addClass('show');
            };
        });

        $('img#left').click(function () {
            var dom = $('.menu.side');
            if (dom.hasClass('show')) {
                $('body').css('overflow', 'auto');
                dom.removeClass('show');
                $('.cover').removeClass('show');
            } else {
                $('body').css('overflow', 'hidden');
                dom.addClass('show');
                $('.cover').addClass('show');
            }
        });

        $('.cover').click(function () {
            $('body').css('overflow', 'auto');
            $('.header').removeClass('show');
            $('.menu.side').removeClass('show');
            $('.cover').removeClass('show');
        });

        setTimeout(function () {
            var pres = $('pre');
            for (var i = 0, l = pres.length; i < l; i++) {
                var pre = pres[i];
                var height = parseInt(getComputedStyle(pre).height.replace('px', ''))-40;
                var width1 = parseInt(getComputedStyle(pre).width.replace('px', ''))-70;
                var width2 = parseInt(getComputedStyle(pre.firstChild).width.replace('px', ''))-70;
                var width;
                if (width1 > width2) width = width1;
                else width = width2;

                var ol = document.createElement("ol");
                ol.className = 'line-num';
                ol.style.width = '30px';
                ol.style.height = height+'px';
                for (var j = 0, k = height/18; j < k; j++) {
                    var li = document.createElement("li");
                    li.style.width = width+'px';
                    ol.appendChild(li);
                }
                pre.appendChild(ol);
                console.log(height+', '+width);
            }
        }, 100);

    });

})(jQuery, hljs);
