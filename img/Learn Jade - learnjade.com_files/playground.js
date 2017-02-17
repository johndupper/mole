(function ($) {
    'use strict';
    var button
      , input
      , modal;
    modal = $('#add-template-modal');
    input = $('input[name="template-name"]', modal);
    button = $('.btn-primary', modal).click(function () {
        if (!input.val()) {
            modal.modal('hide');
            return;
        }
        var tabs
          , index
          , newTab
          , adder
          , content
          , source
          , textarea;
        index = new Date().getTime();
        tabs = $('#templates .tabbable ul.nav');
        adder = $('li.adder', tabs);
        newTab = $('<li><a href="#template-' + index + '" data-toggle="tab"></a></li>');
        $('a', newTab).text(input.val());
        adder.before(newTab);
        content = $('#source.tab-content');
        source = $('<section class="tab-pane" id="template-' + index + '" />');
        textarea = $('<textarea class="span8" rows="30" />')
            .attr('name', input.val());
        source.append(textarea);
        content.append(source);
        modal.modal('hide');
    });
}(jQuery));
(function ($) {
    'use strict';
    $(function () {
        var btn;
        btn = $('#templates .tabbable ul.nav li.preview a');
        btn.click(function (e) {
            e.preventDefault();
            var form
              , data
              , templates;
            form = $('form[name="source"]');
            data = form.serializeArray();
            $.post('http://learnjade.com/api/compile/', data, function (data) {
                var preview
                  , iframe;
                preview = $('#preview').empty();
                if (data.success) {
                    iframe = $('<iframe />').attr('srcdoc', data.output).attr('id', 'preview-source');

                    preview.append(iframe);
                } else {
                    preview.text('there was a problem');
                }
                $(this).tab('show');
            }, 'json');
        });
    });
}(jQuery));
