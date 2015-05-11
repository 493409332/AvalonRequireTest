/// <reference path="avalon/avalon.js" />
define(["text!~/Navigation.html", "simplegrid", "dialog"], function (navigationtext, simplegrid, dialog)
{

    //avalon.log("开始延时2秒")
   
    //var start = new Date().getTime(); 
    //while (true) if (new Date().getTime() - start > 2000) break;

    //avalon.log("结束延时2秒")

    
    avalon.log("以下加载的js为组件的依赖")


    avalon.templateCache.navigationindextext = navigationtext;
   
    
    var simplegridVM
    avalon.define("Navigation", function (vm)
    {
        vm.$skipArray = ["simplegrid"]
        vm.simplegrid = {
            allchecked: false,
            onInit: function (gridVM)
            {
                simplegridVM = gridVM//方便外面调用
                gridVM.addColumn({
                    sortable: false,
                    defaultValue: false,
                    field: "checked",
                    align: "center",
                    text: "<input type='checkbox' ms-duplex-radio='allchecked' data-duplex-changed='checkAll'  />",
                    width: 80
                }, 0)
            },
            renderCell: function (val, key)
            {
                if (key === "checked")
                {
                    return "<input type='checkbox' ms-duplex-radio='row.checked' ms-data-index='$index' data-duplex-changed='checkOne' class='ui-helper-checkone'/>"
                }
                return val
            },
            checkAll: function ()
            {
                var vmodel = avalon.vmodels.xxx
                var bool = vmodel.allchecked = this.checked
                vmodel._data.forEach(function (el)
                {
                    el.checked = bool
                })
                vmodel.data.forEach(function (el)
                {
                    el.checked = bool
                })
            },
            checkOne: function ()
            {
                var vmodel = avalon.vmodels.xxx
                var index = vmodel.startIndex + (avalon(this).data("index") || 0)
                vmodel.data[index].checked = this.checked
                if (!this.checked)
                {
                    vmodel.allchecked = false
                } else
                {
                    vmodel.allchecked = vmodel._data.every(function (el)
                    {
                        return el.checked
                    })
                }
            },
            columns: [
                { field: "zzz", text: "生成订单量", resizable: true },
                { field: "yyy", text: "访问量", resizable: true },
                { field: "xxx", text: "确认订单量", resizable: true }
            ],
            showRows: 10,
            pageable: true,
            pager: {
                perPages: 30,
                totalItems: 1000,
                showPages: 5,
                options: [10, 20, 30, 40]
            },
            columnsOrder: ["xxx", "yyy", "zzz"],
            data: []//{xxx: 13223, yyy: "sdfdf", zzz: "dfsdf"}
        }
        vm.showDialog = function ()
        {
            avalon.vmodels.aa.toggle = true
        }
        vm.$testdialogopts = {
            zIndex:101
        }
        vm.addRow = function ()
        {
            console.log("添加多一行")
            if (simplegridVM)
            {
                simplegridVM.data.push({ xxx: new Date - 0, yyy: "sdfdf", zzz: "dfsdf" })
                simplegridVM.reRender(simplegridVM.data, simplegridVM)
            }
        }
        vm.message = "hello"
    })


    avalon.vmodels.Index.page.Navigationindex = "navigationindextext";
    avalon.scan();
});

 