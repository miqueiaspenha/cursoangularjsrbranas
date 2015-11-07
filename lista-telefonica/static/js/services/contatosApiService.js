angular.module('listaTelefonica').factory('contatosAPI', function($http, config) {

	var __getContatos = function() {
		return $http.get(config.baseUrl + '/contatos');
	};

	var __saveContato = function(contato) {
		return $http.post(config.baseUrl + '/contatos', contato);
	}

	return {
		getContatos : __getContatos,
		saveContato : __saveContato
	};

});
