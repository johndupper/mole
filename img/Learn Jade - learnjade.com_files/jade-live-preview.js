$(function () {
    'use strict';

    $('.jade-live-preview textarea.source')
        .keydown(function (e) {
            // tabbing support
            var el,
                keyCode,
                start,
                end;
            keyCode = e.keyCode || e.which;

            if (keyCode == 9) {
                e.preventDefault();
                el = $(this);
                start = el.get(0).selectionStart;
                end = el.get(0).selectionEnd;

                el.val(el.val().substring(0, start) + "\t" + el.val().substring(end));
                el.get(0).selectionStart = el.get(0).selectionEnd = start + 1;
            }
        })
        .keyup(function (e) {
            // compiling
            var el,
                data,
                output;
            el = $(this);
            data = { 
                main: el.val() 
            };

            $.post('http://learnjade.com/api/compile/', data, function (data) {
                var row;
                if (data.success) {
                    row = el.parents('.jade-live-preview');
                    $('pre.output', row).text(data.output);
                }
            }, 'json');
        });
});
