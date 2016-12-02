import './dialog.scss'

//参数配置
//type: 'title',
//title: '上传失败',
//con: '淘宝接口请求不稳定，请点击重试！',
//mask: true, //是否显示遮盖层
//btnfont: '点击重试' //按钮字体

function Dialog(conf) {
    var that = this;
    if(!(that instanceof Dialog)) {
        return new Dialog(conf);
    };
    that._init(conf);
    //console.log(this)
}
Dialog.prototype._init = function(conf){
    var that = this
    const defaultConf = {
        type: 'title',
        title: '上传失败',
        con: '淘宝接口请求不稳定，请点击重试！',
        noMask: false, //是否显示遮盖层
        btnfont: '点击重试', //按钮字体
        cancelFun: function () {
            console.log('关闭执行')
            return true // 不关闭弹窗
        },
        confirmFun: function () {
            console.log('成功执行')
            return true // 不关闭弹窗
        }
    }
    const confs = conf ? conf : defaultConf
    that.appends(that.htmls(confs))
    confs.mask ? document.getElementsByClassName('ui-dialog')[0].style.background = 'none' : ''
    document.getElementById('btn-cancel') ? document.getElementById('btn-cancel').addEventListener('click', that.cancel.bind(that, confs.cancelFun)) : ''
    document.getElementById('btn-confirm') ? document.getElementById('btn-confirm').addEventListener('click', that.confirm.bind(that, confs.confirmFun)) : ''
    //console.log(that)
    return that
}
//html模板
Dialog.prototype.htmls = function (confs) {
    let arrays = confs.type == 'tipTitle' && confs.con.split('|'), tipTitleCons = ''
    arrays.map((array) => {
        tipTitleCons += '<p>'+array+'</p>'
    })
    const title =
        '<div class="ui-dialog">'+
        '<div class="ui-dialog-title ui-dialog-con animated fadeInUp">'+
        '<header>'+
        '<i class="ui-up-icon ui-icon-warn-im"></i>'+confs.title+''+
        '</header>'+
        '<p class="ui-txt-tip">'+confs.con+'</p>'+
        '<section class="ui-btn-con">'+
        '<button id="btn-confirm" class="ui-btn-one">'+confs.btnfont+'</button>'+
        '</section>'+
        '</div>'+
        '</div>'
    const tip =
        '<div class="ui-dialog">'+
        '<div class="ui-dialog-tip ui-dialog-con animated fadeInUp">'+
        '<section>'+
        '<p class="ui-txt-tip">'+confs.con+'<!--系统默认有缓存，如果当前页面的商品数据与实际不符，请点击按钮进行刷新！--></p>'+
        '</section>'+
        '<section class="ui-btn-con">'+
        '<a id="btn-cancel" href="javascript:;" class="ui-btn-one ui-color-red">关闭</a>'+
        '</section>'
        '</div>'+
        '</div>'
    const tipTitle = 
        '<div class="ui-dialog">'+
            '<div class="ui-dialog-tipTitle ui-dialog-con animated fadeInUp">'+
                '<header class="ui-dialog-title ui-color-red"><h3><i class="ui-up-icon ui-icon-warn"></i>'+confs.title+'</h3></header>'+
                    '<section class="ui-tipTitle-con">'+
                        ''+tipTitleCons+''+
                    '</section>'+
                    '<section class="ui-btn-con"><a href="javascript:;" id="btn-cancel" class="ui-btn-one ui-color-red">'+confs.btnfont+'</a></section>'+
            '</div>'+
        '</div>'
    const html = confs.type == 'title' ? title : confs.type == 'tip' ? tip : confs.type == 'tipTitle' ? tipTitle : false
    return html
}
Dialog.prototype.appends = function(html){
    const dialog = document.createElement('div')
    dialog.innerHTML = html
    document.body.appendChild(dialog)
}
//close移除
Dialog.prototype.close = function(){
    const con = event.target.parentNode.parentNode
    con.className = 'ui-dialog-title ui-dialog-con animated rotateOut'
    setTimeout(() => {
        document.body.removeChild(document.body.getElementsByClassName('ui-dialog')[0].parentNode) //remove ui-dialog
    },400)
    //typeof callback == 'function' ? callback() : ''
    //console.log(callback)
}
// cancel btn
Dialog.prototype.cancel = function (callback) {
    const that = this
    const closes = callback()
    closes ? that.close() : false //返回true关闭弹窗
}
Dialog.prototype.confirm = function (callback) {
    const that = this
    const closes = callback()
    closes ? that.close() : false //返回true关闭弹窗
}

export default Dialog