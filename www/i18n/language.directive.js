(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .directive('compileTemplate', compileTemplate);

    function compileTemplate($compile, $parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var parsed = $parse(attr.ngBindHtml);

                function getStringValue() {
                    return (parsed(scope) || '').toString();
                }

                function compile() {
                    //The -9999 makes it skip directives so that we do not recompile ourselves
                    $compile(element, null, -9999)(scope);
                }

                //Recompile if the template changes
                scope.$watch(getStringValue, compile);
            }
        };
    }
})();