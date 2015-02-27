(function($, w, d)
{
    'use strict';

    var h = d.documentElement
       ,b = d.createElement('body')
       ,e = d.createElement('div')
       ,c = []
       ,t;

    var screen = null
       ,size = null
       ,sizes = {
            XS: 0,
            SM: 1,
            MD: 2,
            LG: 3,
            XL: 4
        }
       ,keys = Object.keys(sizes);

    var apply = function()
    {
        var v;       
        e.className = '';

        for (var s in sizes) {
            v = s.toLowerCase();
            e.className = 'hidden-' + v;
            if (0 === e.clientWidth) {
                size = sizes[s];
                v = 'screen-' + v;
                break;
            }
        }

        screen = v;
        return v;
    };

    var mobile = (function() {
        var re = /Android|webOS|iP(hone|ad|od)|BlackBerry|IEMobile|Opera Mini/i;
        return function()
        {
            return (size <= sizes.MD) && re.test(navigator.userAgent);
        };
    })();

    ;(function()
    {
        $(function()
        {
            e = $(e).remove();
            h.removeChild(b);
            $(d.body).append(e);
            e = e.get(0);
        });

        b.appendChild(e);
        h.appendChild(b);
    })();

    ;(function()
    {
        var re = new RegExp(' screen-(?:' + keys.join('|') + ')', 'gi');

        var resize = function()
        {
            h.className = h.className.replace(re, '');
            h.className += (' ' + apply());

            if (mobile())
                h.className += ' device-mobile';
        };

        resize();

        $(w).resize(function()
        {
            t = clearTimeout(t);
            t = setTimeout(function()
            {
                resize();
            }, 15);
        });
    })();

})(window.jQuery, window, document);