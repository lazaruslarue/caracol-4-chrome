angular.module('caracolExtension.controllers',[])
  .controller('exportCtrl', [ 
            '$scope', '$state','servicefactory',
    function($scope,  $state, services){ 
      $scope.submitUrlsWrapper = function(){
        console.log('tests')
        services.submitUrls($scope.exports);
        $state.go('caracol.processed')
      }
    }
  ])
  .controller('firstrun', [ '$scope', '$state', 'servicefactory',
    function(   $scope,  $state,   services){ 
      var traverseTreeWrapper = function(node){
        var callback = function(node){
          node['caracolSubmitStatus'] = 'panel-info';
          $scope.bookmarks[node.id]= node;
        };
        services.traverseTree(node, callback);
      }
      
      var cb = function(data){$scope.$apply(traverseTreeWrapper(data[0]))}
      services.getMarks( cb );

      $scope.toggleUrlSubmitStatus=function(id, obj) { // add this Url to the the JSON for export to Caracol server
        services.toggleShading(obj.caracolSubmitStatus, obj); 
        if (  obj.caracolSubmitStatus === "panel-danger" ||
              obj.caracolSubmitStatus === "panel-info" ) {
          delete $scope.exports[id];
        } else {
          $scope.exports[id] = obj
        }
      }
    }
  ])
  .controller('fetchmyclippings',['$scope', '$state', 'servicefactory',
    function($scope, $state, services ) {
      console.log('controller running')
      // get clippings from caracol server  
      $scope.myclippings = {};
      var urlPortion = '/fetchmyclippings?batchSize=11&lastId=0'
      var cb = function(data) {
        $scope.myclippings = data;
        console.log('greatness acquired ', data);
      }
      services.getfromserver(cb, urlPortion);
    }
  ])
  .controller('fetchmyrecommendations',['$scope', '$state', '$sce', 'servicefactory',
    function($scope, $state, $sce, services ) {
      console.log('recommendation controller running')
      // get clippings from caracol server  
      /* commented for presentation purposes: 
      $scope.recommendations = {};
      var urlPortion = '/fetchmyrecommendations?batchSize=11&lastId=0'
      var cb = function(data) {
        $scope.recommendations = data;
        console.log('greatness acquired ', data);
      }
      services.getfromserver(cb, urlPortion);
      */ 

      $scope.recommendations = [
        
        {
          "content": "<div class=\"article-text\">\n<p>I'm idling outside Diamante's, [snip] ...</p></div>",
          "domain": "www.gq.com",
          "author": "Rafi Kohan",
          "url": "http://www.gq.com/sports/profiles/201202/david-diamante-interview-cigar-lounge-brooklyn-new-jersey-nets?currentPage=all",
          "short_url": "http://rdd.me/g3jcb1sr",
          "title": "Blowing Smoke with Boxing's Big Voice",
          "excerpt": "I'm idling outside Diamante's, a cigar lounge in Fort Greene, waiting for David Diamante, and soon I smell him coming. It's late January but warm. A motorcycle growls down the Brooklyn side street,&hellip;",
          "direction": "ltr",
          "word_count": 2892,
          "total_pages": 1,
          "date_published": null,
          "dek": "Announcer <strong>David Diamante</strong>, the new voice of the New Jersey (soon Brooklyn) Nets, has been calling boxing matches for years. On the side, he owns a cigar lounge in the heart of Brooklyn. We talk with Diamante about his new gig and the fine art of cigars",
          "lead_image_url": "http://www.gq.com/images/entertainment/2012/02/david-diamante/diamante-628.jpg",
          "next_page_id": null,
          "rendered_pages": 1
        },        
        {
          "content": "<div class=\"article-text\">\n<p>I'm idling outside Diamante's, [snip] ...</p></div>",
          "domain": "www.gq.com",
          "author": "Rafi Kohan",
          "url": "http://www.gq.com/sports/profiles/201202/david-diamante-interview-cigar-lounge-brooklyn-new-jersey-nets?currentPage=all",
          "short_url": "http://rdd.me/g3jcb1sr",
          "title": "Blowing Smoke with Boxing's Big Voice",
          "excerpt": "I'm idling outside Diamante's, a cigar lounge in Fort Greene, waiting for David Diamante, and soon I smell him coming. It's late January but warm. A motorcycle growls down the Brooklyn side street,&hellip;",
          "direction": "ltr",
          "word_count": 2892,
          "total_pages": 1,
          "date_published": null,
          "dek": "Announcer <strong>David Diamante</strong>, the new voice of the New Jersey (soon Brooklyn) Nets, has been calling boxing matches for years. On the side, he owns a cigar lounge in the heart of Brooklyn. We talk with Diamante about his new gig and the fine art of cigars",
          "lead_image_url": "http://www.gq.com/images/entertainment/2012/02/david-diamante/diamante-628.jpg",
          "next_page_id": null,
          "rendered_pages": 1
        }
      ]
    }
  ])



