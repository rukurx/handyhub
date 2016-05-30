$(function(){
    // Disable a merge button and a close button if work is in process
    var $issueTitle = $('.js-issue-title');
    if ($issueTitle.text().match(/wip/i)) {
        // merge button
        $('.js-merge-branch-action').attr('disabled', true);
        // close button
        $('.js-comment-and-button').attr('disabled', true);
    }
});