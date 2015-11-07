angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI, serialGenerator){

	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregaContatos = function() {
		contatosAPI.getContatos().success(function(data) {
			$scope.contatos = data;
		}).error(function (data, status) {
			$scope.error = "Não foi possível carregar os dados!";
		});
	};

	var carregaOperadoras = function() {
		operadorasAPI.getOperadoras().success(function(data) {
			$scope.operadoras = data;
		});
	}

	$scope.adicionarContato = function(contato) {
		$scope.contato.serial = serialGenerator.generate();
		$scope.contato.data = new Date();
		contatosAPI.saveContato(contato).success(function(data){
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregaContatos();
		});
	};

	$scope.apagarContatos = function(contatos) {
		$scope.contatos = contatos.filter(function(contato) {
			if(!contato.selecionado) return contato;
		});
	};

	$scope.isContatosSelecionados = function(contatos) {
		return contatos.some(function(contato) {
			return contato.selecionado;
		});
	};

	$scope.ordernarPor = function(campo) {
		$scope.criteiroDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	$scope.classe1 = "selecionado";
	$scope.classe2 = "negrito";

	carregaContatos();
	carregaOperadoras();

});
