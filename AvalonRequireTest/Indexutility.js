 
define("Indexutility", ["jquery"], function ()
{


    //Do setup work here
    window.Indexutility = {};
   
    window.Indexutility.RegionborderUpdate = function ()
        {
            $("#Regionborder").width($("#Regionborder")[0].parentElement.clientWidth - 5);
            $("#Regionborder").height($("#Regionborder")[0].parentElement.clientHeight - 2);
             avalon.log("ok");
        }
    
});