angular.module('CityCtrl', []).controller('CityController', function($scope) {

	$scope.tagline = 'Select your city here!';


      var refresh = function() {
        $http.get('/city/getCity').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.cityList = response;
            $scope.city = "";
        });
    };

    refresh();

    
            $http({
                    method: 'POST',
                    url: '/city/addCity',
                     headers: {'Content-Type': 'application/json'},    
                    data: cityObj
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

        // });
        console.log($scope.contact);

    };

    $scope.removeCity = function(city) {
        //console.log(id);
        $http.delete('/city/deleteCity') .success(function(response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editCity = function(city) {
        $http.get('/city/getCity') .success(function(response) {
            $scope.city = response[0];
        });
    };

    $scope.updateCity = function() {
        console.log("REACHED UPDATE");
        console.log($scope.city._id);
        $http.put('/city/updateCity')  .success(function(response) {
            console.log(response);
            refresh();
        })
    };

});