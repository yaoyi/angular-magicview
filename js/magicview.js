angular.module('ui.magicview',[])
.value('rconfig', {
	maxHeight: 130,
	margin: '2px 3px 3px 2px'
})
.directive('magicview', ['$window','$timeout', function ($window, $timeout) {
	return {
		restrict: 'A',
		replace: true,
		transclude: true,
		template: '<div ng-transclude></div>',
		scope: {
			items: '='
		},
		link: function (scope, element, attrs, ctrl) {
			ctrl.setSelector(attrs.selector || 'img')
			var w = angular.element($window);
			w.bind('resize', function () {
				$timeout(function () {
					ctrl.layout()
				}, 0)
			})
			scope.$watchCollection('items', function () {
				$timeout(function () {
					ctrl.layout()
				},0)
			})
		},
		controller: function ($scope, $element, rconfig) {
			var _HEIGHTS = [];
			var _selector = ''

			this.setSelector = function (selector) {
				_selector = selector
			}

			function getheight(images, width, items) {
			  width -= images.length * 5;
			  var h = 0;
			  for (var i = 0; i < images.length; ++i) {
			    h += items[i].width / items[i].height;
			  }
			  return width / h;
			}

			function setheight(images, height, items) {
			  _HEIGHTS.push(height);
			  for (var i = 0; i < images.length; ++i) {
			    $(images[i]).css({
			      width: height * items[i].width / items[i].height,
			      height: height
			    });
			  }
			}

			this.layout = function () {
			  $('.magicview .item').css('display', 'inline-block')
			  $(_selector, '.magicview .item').css('margin', rconfig.margin)
			  var maxHeight = rconfig.maxHeight			  
			  var size = $element.innerWidth() - 20;
			  var n = 0;
			  var images = $(_selector, $element);
			  var items = $scope.items
			  w: while (images.length > 0) {
			    for (var i = 1; i < images.length + 1; ++i) {
			      var slice = images.slice(0, i);
			      var slice_items = items.slice(0, i)
			      var h = getheight(slice, size, slice_items);
			      if (h < maxHeight) {
			        setheight(slice, h, slice_items);
			        n++;
			        images = images.slice(i);
			        items = items.slice(i);
			        continue w;
			      }
			    }
			    setheight(slice, Math.min(maxHeight, h), slice_items);
			    n++;
			    break;
			  }
			}

		}
	}		
}])