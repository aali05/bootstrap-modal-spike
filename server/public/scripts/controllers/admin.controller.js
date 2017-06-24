myApp.controller('AdminController', function($uibModal, $log) {
  console.log('admin controller running');

  var vm = this;

  vm.animationsEnabled = true;

  vm.open = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.add-location-modal' + parentSelector)) : undefined;
      // '.modal-demo '  can be .what-you-named-modal-modal aka class of div you start modal with
      //

    var modalInstance = $uibModal.open({
      animation: vm.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'addLocationModalContent.html',   // HTML in the modal.html template
      controller: 'AddLocationModalInstanceController',
      controllerAs: 'almic',
      size: size,
      appendTo: parentElem,
      resolve: {

      }
    });  // end modalInstance

    // // log a timestamp when the modal is dismissed
    // modalInstance.result.then(function () {
    //   $log.info('Modal dismissed at: ' + new Date());
    // });
  }; // end open

});


myApp.controller( 'AddLocationModalInstanceController', [ '$uibModalInstance', '$uibModal', '$log', function ( $uibModalInstance, $uibModal, $log ) {
  var vm = this;

  vm.addNewLocation = function(){
    var itemToSend = {
      name: vm.name,
      description: vm.description,
      address: vm.address,
      phoneNum: vm.phoneNum,
      websiteURL: vm.websiteURL
    };
    //FILESTACK IMG URL GOES HERE
    console.log(itemToSend);


    $uibModalInstance.close();
  };//end add Item


  vm.clearLocationInputs = function (){
    vm.name = "";
    vm.description = "";
    vm.address = "";
    vm.phoneNum = "";
    vm.websiteURL = "";


    $uibModalInstance.close();
  };

  vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

  vm.clearLocationInputs();
}]);
