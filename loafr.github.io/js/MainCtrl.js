angular.module('lrApp').controller('MainCtrl', function($scope, mainService, ModalService) {
	ModalService.showModal({
	    templateUrl: "modal.html",
	    controller: "ModalController"
	  }).then(function(modal) {

	    //it's a bootstrap element, use 'modal' to show it
	    modal.element.modal();
	    modal.close.then(function(result) {
	      console.log(result);
	    });
	  });
});

app.controller('ModalController', function($scope, close) {

  // when you need to close the modal, call close
  close("Success!");
});