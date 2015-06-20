angular.module('listaTelefonica').provider('serialGenerator', function () {
	var __length = 10;
	
	this.getLength = function () {
		return __length;
	};

	this.setLength = function (length) {
		__length = length;
	};

	this.$get = function () {
		return {
			generate: function () {
				var serial = '';
				while(serial.length < __length) {
					serial += String.fromCharCode(Math.floor( Math.random() * 90 + 48));
				}
				return serial;
			}
		}
	}
});