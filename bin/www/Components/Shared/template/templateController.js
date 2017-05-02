angular.module('MolinaKR').controller('templateController',['$scope','$state','$filter',function($scope,$state,$filter)
{

    $scope.selectedMenuID=0;
    $scope.menuMaster =[];
    $scope.selectedMenu =[];

    $scope.breadCrumList =[];

    var menuObj={};
    menuObj.id=1;
    menuObj.parentID=0;
    menuObj.Text="Molina Process";
    menuObj.IsMenu="Y";
    $scope.menuMaster.push(menuObj);

    menuObj={};
    menuObj.id=2;
    menuObj.parentID=0;
    menuObj.Text="Molina Project";
    menuObj.IsMenu="Y";
    $scope.menuMaster.push(menuObj);

    menuObj={};
    menuObj.id=3;
    menuObj.parentID=0;
    menuObj.Text="Know your account";
    menuObj.IsMenu="Y";
    $scope.menuMaster.push(menuObj);

    menuObj={};
    menuObj.id=4;
    menuObj.parentID=0;
    menuObj.Text="Tranings";
    menuObj.IsMenu="Y";
    $scope.menuMaster.push(menuObj);

    menuObj={};
    menuObj.id=5;
    menuObj.parentID=4;
    menuObj.Text="Tranings_1";
    menuObj.IsMenu="Y";
    $scope.menuMaster.push(menuObj);

    menuObj={};
    menuObj.id=6;
    menuObj.parentID=4;
    menuObj.Text="Tranings_2";
    menuObj.IsMenu="Y";
    $scope.menuMaster.push(menuObj);

    menuObj={};
    menuObj.id=11;
    menuObj.parentID=6;
    menuObj.Text="Tranings_3";
    menuObj.IsMenu="Y";
    $scope.menuMaster.push(menuObj);

    menuObj={};
    menuObj.id=7;
    menuObj.parentID=4;
    menuObj.Text="Video1";
    menuObj.img="Images/1.png";
    menuObj.span=3;
    menuObj.IsMenu="N";
    $scope.menuMaster.push(menuObj);
    


    menuObj={};
    menuObj.id=8;
    menuObj.parentID=4;
    menuObj.Text="Video2";
    menuObj.img="Images/2.png";
    menuObj.span=3;
    menuObj.IsMenu="N";
    $scope.menuMaster.push(menuObj);


    menuObj={};
    menuObj.id=9;
    menuObj.parentID=4;
    menuObj.Text="Video3";
    menuObj.img="Images/2.png";
    menuObj.span=3;
    menuObj.IsMenu="N";
    $scope.menuMaster.push(menuObj);

    menuObj={};
    menuObj.id=10;
    menuObj.parentID=4;
    menuObj.Text="Video4";
    menuObj.img="Images/2.png";
    menuObj.span=3;
    menuObj.IsMenu="N";
    $scope.menuMaster.push(menuObj);


    $scope.filterMenu = function ( id) {
        $scope.selectedMenutemp=[];
        for(var i=0;i<$scope.menuMaster.length;i++)
        {
            if($scope.menuMaster[i].parentID==id)
            {
            $scope.selectedMenutemp.push($scope.menuMaster[i])
            }
        }
        $scope.selectedMenu=$scope.selectedMenutemp;
    };

        $scope.BreadcrumUpdate = function ( id) {
        $scope.selectedMenu=[];
        var lookforid=id;
            $scope.breadCrumListtemp=[];
        for(var i=$scope.menuMaster.length-1;i>=0;i--)
        {
            if($scope.menuMaster[i].id==lookforid)
            {
                var breadCrumItem={};
                 lookforid=breadCrumItem.id= $scope.menuMaster[i].parentID;
                 breadCrumItem.text="";

                 $scope.breadCrumListtemp.push(breadCrumItem); 

                 if(lookforid!=0)
                    {i=$scope.menuMaster.length;}                    
                    else
                    break;
            }
        }
        
        for(var i=0;i<$scope.breadCrumListtemp.length;i++)
        {
                for(var j=0;j<$scope.menuMaster.length;j++)
                {
                    if($scope.breadCrumListtemp[i].id==0)
                    {
                        $scope.breadCrumListtemp[i].text="Home";
                        break;
                    }
                    if($scope.breadCrumListtemp[i].id==$scope.menuMaster[j].id)
                    {
                        $scope.breadCrumListtemp[i].text=$scope.menuMaster[j].Text;
                        break;
                    }
                }
        }
           $scope.breadCrumList = $scope.breadCrumListtemp.reverse();
        
    };

    $scope.init=function()
    {
     
        $scope.selectedMenuID=0;
        $scope.filterMenu(0);
    };
    $scope.init();
    $scope.filterMenu(0);
    $scope.menuItemClicked=function(item){
        $scope.selectedMenuID=item.id;
        $scope.BreadcrumUpdate(item.id);
        console.log($scope.breadCrumList);
        $scope.filterMenu(item.id);
        
    };

       $scope.playvideo=function(item)
   {
        $state.go("menudashboard");
   }

    }
]);