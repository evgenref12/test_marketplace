let marketplace_app = angular.module('marketplace_app', []);
marketplace_app.factory('marketplace_factory', function($http){
	let factory = {};
	factory.index = function(callback){
		$http.get('/getPhone').success(function(output){
            callback(output);
		});
	};

	factory.addPhone = function(phone, callback){
		$http.post('/addPhone', phone).success(function(output){
			callback(output);
		});
	};

	factory.removePhone = function(phone, callback){
        $http.post('/removePhone', phone).success(function(output){
			callback(output);
		});
	};

    factory.updatePhone = function(phone, callback){
        $http.post('/updatePhone', phone).success(function(output){
            callback(output);
        });
    };
	return factory;
});

marketplace_app.controller('phones_controller', function($scope, marketplace_factory) {
    $scope.phones = [];
    $scope.modal_add_phone = false;
    $scope.modal_info_phone = false;
    $scope.info_phone_show = {};
    $scope.all_filters = ['model', 'price', 'rating'];
    $scope.new_phone = {
    	model: '',
		price: '',
		rating: 0,
        features: ''
	};

    $scope.getElements = function() {
        marketplace_factory.index(function(data) {
            $scope.phones = data;
            $scope.total_items = data.length;
        });
    };

	$scope.addPhone = function(){
        marketplace_factory.addPhone($scope.new_phone, function() {
            $scope.getElements();
            $scope.total_items = $scope.phones.length;
            $scope.modal_add_phone = false;
            $scope.new_phone = {
                model: '',
                price: '',
                rating: 0,
                features: ''
            };
        });
	};

	$scope.remove = function(item){
        marketplace_factory.removePhone(item, function(data) {
            $scope.phones = data;
            $scope.total_items = data.length;
		});
	};

    $scope.update = function(item){
        marketplace_factory.updatePhone(item, function(data) {
        });
    };

    $scope.showModalAddPhone = function() {
        $scope.modal_add_phone = true;
    };

    $scope.hideModalAddPhone = function() {
        $scope.modal_add_phone = false;
    };

    $scope.showModalInfoPhone = function(item) {
        $scope.modal_info_phone = true;
        $scope.info_phone_show = item;
    };

    $scope.hideModalInfoPhone = function() {
        $scope.modal_info_phone = false;
    };

    $scope.ratingUp = function(item) {
        item.rating += 1;
        $scope.update(item);
    };

    $scope.getElements();
}); 
