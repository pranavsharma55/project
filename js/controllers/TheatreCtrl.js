angular.module('TheatreCtrl', []).controller('TheatreController', function($scope) {

	$scope.tagline = 'Theatres';	



      var refresh = function() {
        $http.get('/theatre/getTheatre').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.theatreList = response;
            $scope.theatre = "";
        });
    };

    refresh();

    
            $http({
                    method: 'POST',
                    url: '/theatre/addTheatre',
                     headers: {'Content-Type': 'application/json'},    
                    data: theatreObj
                })
                .then(function(response) {
                    console.log(response);
                    console.log("CREATE IS SUCCESSFUL");
                    refresh();
                });


            // var serviceName = 'movi'
            // $http.post('/movie/addMovie', movieObj).success(function(response) {
            //     console.log(response);
            //     console.log("CREATE IS SUCCESSFUL");
            //     refresh();
            // });

        });
        console.log($scope.contact);

    };

    $scope.removeTheatre = function(theatre) {
        //console.log(id);
        $http.delete('/theatre/deleteCity/' + .success(function(response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editTheatre = function(theatre) {
        $http.get('/theatre/gettheatre/' + .success(function(response) {
            $scope.theatre = response[0];
        });
    };

    $scope.updateTheatre = function() {
        console.log("REACHED UPDATE");
        console.log($scope.theatre._id);
        $http.put('/theatre/updateTheatre/' + .success(function(response) {
            console.log(response);
            refresh();
        })
    };
