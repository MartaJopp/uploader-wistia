
'use strict';
describe('Component: videoUploader', function () {
    beforeEach(module('videoUploaderApp'));
    var element;
    var scope;
    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<video-uploader></video-uploader>');
        scope.$apply(function () {
            $compile(element)(scope);
        });
    }));
    it('should render the video uploader', function () {
        expect(angular.element('#videoUploader'))
    });
    it('should upload a video when progress is complete and class is added', function () {
        expect(angular.element('#player'))
    });
});