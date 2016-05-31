$(function(){
    // Open a pull request
    var openPr = setInterval(function(){
        var $newPr = $('.compare-pr-header');
        var $prTitle = $('#pull_request_title');
        // if ($newPr.is(':visible') && $prTitle.val().match(/(?!\[WIP\])/i)) {
        if ($newPr.is(':visible')) {
          $prTitle.val('[WIP] ');
          $('.js-issue-assign-self').click();

          clearInterval(openPr);
        }
    }, 1000);

    // Disable a merge button and a close button if work is in process
    var $issueTitle = $('.js-issue-title');
    if ($issueTitle.text().match(/wip/i)) {
        // merge button
        $('.js-merge-branch-action').attr('disabled', true);
        // close button
        $('.js-comment-and-button').attr('disabled', true);
    }

    // Add a tab to show a source diff with no white space
    var $tab = $('.tabnav.tabnav-pr');
    if ($tab.length) {
        var $lastTab = $tab.find('a:last-child');
        var href = $lastTab.attr('href') + '?w=1';
        var html = '';
        html += '<a id="js-no-space" href="' + href + '" class="tabnav-tab  js-pjax-history-navigate">';
        html += '  <svg aria-hidden="true" class="octicon octicon-diff" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M6 7h2v1H6v2h-1V8H3v-1h2V5h1v2zM3 13h5v-1H3v1z m4.5-11l3.5 3.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h6.5z m2.5 4L7 3H1v12h9V6zM8.5 0S3 0 3 0v1h5l4 4v8h1V4.5L8.5 0z"></path></svg>';
        html += '  no white space';
        html += '</a>';

        $('.tabnav-tabs').append(html);
    }

    var tabs = function() {
        var $tab = $('.tabnav.tabnav-pr');
        if ($tab.find('a').length === 3) {
            var $lastTab = $tab.find('a:last-child');
            var href = $lastTab.attr('href') + '?w=1';
            var html = '';
            html += '<a id="js-no-space" href="' + href + '" class="tabnav-tab  js-pjax-history-navigate">';
            html += '  <svg aria-hidden="true" class="octicon octicon-diff" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M6 7h2v1H6v2h-1V8H3v-1h2V5h1v2zM3 13h5v-1H3v1z m4.5-11l3.5 3.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h6.5z m2.5 4L7 3H1v12h9V6zM8.5 0S3 0 3 0v1h5l4 4v8h1V4.5L8.5 0z"></path></svg>';
            html += '  no white space';
            html += '</a>';

            $('.tabnav-tabs').append(html);
        }

        if (hasQueryString('w')) {
            $('.tabnav-tab.selected').removeClass('selected');
            $('#js-no-space').addClass('selected');
        }
    };
    setInterval(tabs, 300);

    // check that query string contains a given value
    function hasQueryString(key) {
        return window.location.search.substr(1).split("&").some(function(item) {
            if (key ==  item.split("=")[0]) {
                return true;
            }
        });
    };



});