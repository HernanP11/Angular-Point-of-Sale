angular.module("foodController",[]).controller("mainController",["$scope","$http","Food",function(o,n,t){o.formData={},o.loading=!0,t.get().success(function(n){o.foods=n,o.loading=!1}),o.createFood=function(){void 0!=o.formData.text&&(o.loading=!0,t.create(o.formData).success(function(n){o.loading=!1,o.formData={},o.foods=n}))},o.deleteFood=function(n){o.loading=!0,t["delete"](n).success(function(n){o.loading=!1,o.foods=n})}}]);