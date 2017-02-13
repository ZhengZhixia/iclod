    var remainder=angular.module('remainder',[]);
     

    // 左侧组件
    remainder.directive('myContainer',[function(){
		return {
			restrict:'AE',
			transclude:true,
			template:'<div><div ng-transclude></div></div>',
			replace:true,
		    link:function(scope,el){
				$(el).on('click','.container.con3',function(){
					$('.container.con3').removeClass('play bianji');
					$(this).addClass('play');
				});


				$(el).on('mousedown',false);
				$(el).on('dblclick','.container.con3','.container.con3',function(){
					$(this).addClass('bianji');
					var input=$(this).find('input');
					input.val(input.val()).focus();
				})
				$(el).find('input').on('blur',function(){
					$(this).closest('.container.con3').removeClass('bianji');
				})
				$(document).on('keyup',function(e){
					if (e.keyCode===8) {
						var id=parseInt($(el).find('.play').attr('data_id'));
						scope.$apply(function(){
							scope.cates=scope.cates.filter(function(v,i){
								return v.id!=id;
							});
							console.log(scope.cates);
						})
					};
				})
			}
		}
	}])
    // 选项组件
    remainder.directive('myCard',[function(){
    	return{
    		restrict:'AE',
    		transclude:true,
    		template:'<div><div ng-transclude></div></div>',
    		replace:true,
    		link:function(scope,el){
    			$(el).on('click','.xuanxiang',function(){
                     $(this).find('.card').toggleClass('active')
                     return false;
		    	});
		    	$(el).on('click keyup','.card',false);

		    	$(document).on('click',function(){
		    		$(this).find('.xuanxiang .card').removeClass('active');
		    	})
		    	$(el).on('click','.delete',function(){
                    scope.$apply(function(){
			    		scope.cates.forEach(function(v,i){
			    			if(v==scope.current){
			    				scope.cates.splice(i,1);
			    				// scope.current=$scope.cates[i+1];
			    			}

			    		})
			    		
		    		})
		    	})
    		}
    	}
    }])
    // 已完成和未完成组件


remainder.controller('mainCtrl',['$scope',function($scope){

	$scope.colors=['color1','color2','color3','color4','color5','color6','color7'];

    $scope.cates=[
         {id:1001,color:'color1',title:'新列表1',
            todos:[
               {id:1001,title:'买车',state:1},
               {id:1002,title:'买房',state:1},
               {id:1003,title:'买手机',state:0},
               {id:1004,title:'买冰箱',state:0}
            ]
         },
         {id:1002,color:'color2',title:'新项目2',
            todos:[
               {id:1001,title:'1',state:1},
               {id:1002,title:'2',state:1},
               {id:1003,title:'3',state:0},
               {id:1004,title:'4',state:0}
            ]
         },
         {id:1003,color:'color3',title:'新项目3',
            todos:[
               {id:1001,title:'a',state:1},
               {id:1002,title:'b',state:1},
               {id:1003,title:'c',state:0},
               {id:1005,title:'e',state:1},
               {id:1004,title:'d',state:0}
            ]
         },
         {id:1004,color:'color4',title:'新项目4',
            todos:[
               {id:1001,title:'a',state:1},
               {id:1002,title:'b',state:1},
               {id:1003,title:'c',state:0},
               {id:1005,title:'e',state:1},
               {id:1004,title:'d',state:0}
            ]
         },
         {id:1005,color:'color5',title:'新项目5',
            todos:[
               {id:1001,title:'a',state:1},
               {id:1002,title:'b',state:1},
               {id:1003,title:'c',state:0},
               {id:1005,title:'e',state:1},
               {id:1004,title:'d',state:0}
            ]
         },
         {id:1006,color:'color6',title:'新项目6',
            todos:[
               {id:1001,title:'a',state:1},
               {id:1002,title:'b',state:1},
               {id:1003,title:'c',state:0},
               {id:1005,title:'e',state:1},
               {id:1004,title:'d',state:0}
            ]
         },
         {id:1007,color:'color7',title:'新项目7',
            todos:[
               {id:1001,title:'a',state:1},
               {id:1002,title:'b',state:1},
               {id:1003,title:'c',state:0},
               {id:1005,title:'e',state:1},
               {id:1004,title:'d',state:0}
            ]
         }
    ];

    $scope.current=$scope.cates[0];
    $scope.setCurrent=function(v){
    	 $scope.current=v;
    }

    $scope.add=function(){
    	var m_id=-Infinity;
    	$scope.cates.forEach(function(v,i){
    		if (id<v.id) {
    			id=v.id;
    		};
    	})
    	var id=m_id+1;
    	var color=$scope.colors[$scope.cates.length%7];
    	var newcate={id:id,color:color,title:'新项目'+($scope.cates.length+1)}
    	$scope.cates.push(newcate);
    }

}])

