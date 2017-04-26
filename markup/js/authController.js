var authCtrl = (function () {
    return {
        login: function (e) {
            var self = this;
            var email = $('#email').val();
            var pass = $('#password').val();

            e.preventDefault(); 
            self.getToken(email, pass);

        },
        logout: function () {
            authService.logout()
                .done(function (data) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('userName');
                    config.token = '';
                    config.userName = '';
                    config.isAuthorized = false;
                    mainCtrl.refreshHeader();
                    routeProvider.getPage('login');
                })
                .fail(function (data) {
                    console.log("error");
                })
        },
        getToken: function(email, password) {
            authService.getToken(email, password)
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

                        mainCtrl.refreshHeader();
                        routeProvider.getPage('main');                                            
                    }
                })
                .fail(function (data) {
                    console.log(data);
                })
        }
    }
})();