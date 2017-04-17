var authCtrl = (function () {
    return {
        login: function (e) {
            e.preventDefault();
            var email = $('#email').val();
            var pass = $('#password').val();
            
            authService.getToken(email, pass)
                .done(function (data) {
                    var token = data.access_token;
                    var userName = data.userName;

                    if (token && token.trim() != '') {
                        localStorage.setItem('token', token);
                        localStorage.setItem('userName', userName);


                        config.token = token;
                        config.headers = {
                            'Authorization': 'Bearer ' + config.token
                        }

                        config.userName = userName;
                        config.isAuthorized = true; 

                        routeProvider.refreshHeader('registered-header');
                        routeProvider.getPage('main');                                            
                    }
                })
                .fail(function (data) {
                    console.log(data);
                })
            
        },
        logout: function () {
            authService.logout();
        }
    }
})();