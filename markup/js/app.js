var config = {};

config.token = localStorage.getItem('token');
config.userName = localStorage.getItem('userName');
config.headers = {
	'Authorization': 'Bearer ' + config.token
}
config.baseUrl = 'http://learn-todo.gear.host/api/tasks';
config.tokenUrl = 'http://learn-todo.gear.host/token';
config.logoutUrl = 'http://learn-todo.gear.host/api/account/logout';
config.isAuthorized = false;


var routeProvider = (function() {
    return {
        getPage: function(pageTitle) {
            $.ajax({
                url: '/markup/inc/'+ pageTitle +'.html',
                type: 'GET',
                success: function (data) {
                    $('#main .container').html(data);
                },
                error: function (data) {
                    console.log('error');
                }
            });
        },

        refreshHeader:	function(headerTitle) {
        	$.ajax({
                url: '/markup/inc/'+ headerTitle +'.html',
                type: 'GET',
                success: function (data) {
                    $('.navbar-right').html(data);
                    
		            if (headerTitle === "registered-header") {
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

routeProvider.refreshHeader('unregistered-header');