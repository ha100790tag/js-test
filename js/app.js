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
        }		
	}
})();