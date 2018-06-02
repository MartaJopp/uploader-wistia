angular.module('videoUploaderApp', [])

    .component('videoUploader', {
        templateUrl: 'components/videoUploader/videoUploader.html',
        controller: 'videoUploaderController',
    }) //end component

    .controller('videoUploaderController', ['$scope', '$http',
        function ($scope, $http) {
            var vm = this;
            vm.message = 'Wistia Uploader';
            //wistia api info
            vm.wistia = {
                url: 'https://upload.wistia.com',
                api: 'Wistia API KEY'
            };

            //key pair value to meet multipart form data requirements
            vm.formData = [{
                name: 'api_password',
                value: vm.wistia.api
            }];

            vm.videoID = ''; //set videoID to empty string

            //uploads file and embeds into html
            angular.element('#fileupload').fileupload({
                dataType: 'json',
                formData: vm.formData,
                done: function (e, data) {
                    vm.videoID = data.result.hashed_id;
                    var selectElement = angular.element(document.querySelector('#player'));
                    selectElement.addClass('wistia_async_' + vm.videoID);
                },
                //progress bar
                progress: function (e, data) {
                    var progress = parseInt(data.loaded / data.total * 100, 10);
                    angular.element('#progress .progress-bar').css(
                        'width',
                        progress + '%'
                    );
                },
                error: function (e, data) {
                    console.log('Error', e.responseText);
                    alert('Error! Please check file type or account to verify video limit.');
                }
            }
            )
        }]) //end controller   