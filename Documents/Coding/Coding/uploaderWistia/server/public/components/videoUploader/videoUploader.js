angular.module('videoUploaderApp', [])

    .component('videoUploader', {
        templateUrl: 'components/videoUploader/videoUploader.html',
        controller: 'videoUploaderController'
    })

    .controller('videoUploaderController', ['$scope', '$http',
        function ($scope, $http) {
            var vm = this;
            vm.message = 'Wistia Uploader'
            vm.wistia = {
                url: 'https://upload.wistia.com',
                api: '9a5da9c8c45ebf9d1c0da58d51de2b01666572b4de0d8f01ba173c9e9a59b023'
            }
            vm.formData = [{
                name: 'api_password',
                value: vm.wistia.api
            }]
            vm.videoID = ''; //set videoID to empty string
            // vm.embedVideo = 'wistia_embed wistia_async_j38ihh83m5';
            angular.element('#fileupload').fileupload({
                dataType: 'json',
                formData: vm.formData,
                done: function (e, data) {
                    vm.videoID = data.result.hashed_id
                    var selectElement = angular.element(document.querySelector('#player'));
                    selectElement.addClass('wistia_async_' + vm.videoID);
                },
                progressall: function (e, data) {
                    var progress = parseInt(data.loaded / data.total * 100, 10);
                    $('#progress .progress-bar').css(
                        'width',
                        progress + '%'
                    );
                }
            }
            )
        }]) //end controller   