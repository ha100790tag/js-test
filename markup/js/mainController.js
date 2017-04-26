var mainCtrl = (function () {
    return {
        refreshHeader:  function() {
            var navUrl = config.isAuthorized ? '/markup/views/registered-header.html' : '/markup/views/unregistered-header.html';
            $.ajax({
                url: navUrl,
                type: 'GET',
                success: function (data) {
                    $('.navbar-right').html(data);
                    
                    if (config.isAuthorized === true) {
                        var userNameLink = "<li><a href='#'>" + config.userName + "</a></li>";
                        $('.navbar-right').prepend(userNameLink);
                    }
                },
                error: function (data) {
                    console.log('error');
                }
            });
        }
    }
})();

mainCtrl.refreshHeader();