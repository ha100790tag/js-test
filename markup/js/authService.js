var authService = (function () {
	return {
		getToken: function (email, pass) {
		    var ajax = $.ajax({
		        url: config.tokenUrl,
		        type: 'POST',
		        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		        data: 'grant_type=password&username=' + email + '&password=' + pass
		    });
            
		    return ajax;
		},

		logout: function () {
		    $.ajax({
		        url: config.logoutUrl,
		        type: 'POST',
		        headers: config.headers,
		        success: function (data) {
		            localStorage.removeItem('token');
		            localStorage.removeItem('userName');
		            config.token = '';
		            config.userName = '';
		            config.isAuthorized = false;
		            routeProvider.refreshHeader('unregistered-header');
		            routeProvider.getPage('login');
		        },
		        error: function (data) {
		            console.log("error");
		        }
		    });
		}
	}
})();