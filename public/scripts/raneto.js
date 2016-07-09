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

        // Raneto sucks because it _s.titlize(_s.humanize(everyOtherTitle))
        // The following are thus required to recover the title AS IS provided.
        titleAsIs([
            "云集浏览器 API",
            "云集浏览器 React Native iOS",
            "Solo IDE Logic Nodes",
            "Solo IDE Logic Tutorials",
        ]);
        headingAsIs([
            "AJAX",
        ]);

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

    // make the title look AS IS the provided string
    function titleAsIs(titles)
    {
        keepAsIs($('.panel-heading, .category-title').toArray(), titles);
    }

    // make the heading look AS IS the provided string
    function headingAsIs(headings)
    {
        keepAsIs($('li.page > a, h1').toArray(), headings);
    }

    // make the text content look AS IS the provided string
    function keepAsIs(elements, titles)
    {
        var map = titles.reduce((map, title) => {
            map[cleanTitle(title)] = title;
            return map;
        }, {});

        elements
            .map(el => ({ el, title: cleanTitle(el.textContent) }))
            .filter(m => map[m.title])
            .forEach(m => m.el.textContent = map[m.title]);
    }

    // to lower case and remove spaces
    // This works because Raneto did _s.humanize() on the titles
    function cleanTitle(title)
    {
        return title.toLowerCase().replace(/\s/g, '');
    }
})(jQuery, hljs);

