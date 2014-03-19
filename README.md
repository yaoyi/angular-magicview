angular-magicview
=================

#### Intro

google like image gallery, this module helps you algin image  both directions.

this module gets inspired from 
    
    http://blog.vjeux.com/2012/image/image-layout-algorithm-google-plus.html
    http://www.techbits.de/2011/10/25/building-a-google-plus-inspired-image-gallery/

also you could check this jquery plugin 
    
    http://brunjo.github.io/rowGrid.js/


#### Demo



##### basic setup

1.include libraries:

```
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.10/angular.min.js"></script>
```

2.include module

```
<script src="js/magicview.js"></script>
```

3.add html codes
```
<html ng-app="demo">
<body ng-controller="DemoCtrl">
    <div magicview class="magicview" data-items="items">
        <div class="item" ng-repeat="item in items">
            <img ng-src="{{item.url}}" alt="">
        </div>
    </div>
</body>
</html>
```

4.add javascript codes, basically just add sample items for demo

```
<script type="text/javascript">
    var demo = angular.module('demo', ['ui.magicview'])
    demo.controller('DemoCtrl', ['$scope', function($scope){
        $scope.items = [
            {
                title: "img1",
                url: "https://lh4.googleusercontent.com/-QNEzGy5w03o/UyfxhncSizI/AAAAAAAAAS8/aHsGyfrolL8/s0/00ca4ee4c9d30140c6abb0fe9b44f48f%252520-%252520Copy%252520%2525282%252529.jpg",
                width: 194,
                height: 227
            },
            ....
            {
                title: "img7",
                url: "https://lh6.googleusercontent.com/-ZBsO1ZZPwnw/Uyfx63qjDbI/AAAAAAAAATc/Fj67BLCWFEA/s0/b1cb496071a2427c7b13679db404df2e%252520-%252520Copy%252520-%252520Copy%252520-%252520Copy%252520%2525288%252529.jpg",
                width: 680,
                height: 680
            }
        ]
    }])
</script>
```


#### Options

modify follow options to change the height of each row, and margin among photos
```
//magicview.js
maxHeight: 130,
margin: '2px 3px 3px 2px'
```

