//更新APP
//配置文件URL
var url1 = "";
var res1 = http.get(url1);

var url2 = "";
var res2 = http.get(url2);

if (res1.statusCode == 200) {
    //toast("正在检查更新");
    var N = res1.body.string();
    var W = res2.body.string();

    var B = app.versionCode;

    if (N > B) {
        toast("发现新版本!");

        dialogs.build({
            //对话框标题
            title: "发现新版本",
            //对话框内容
            content: "新版本(内部版本号)：" + N + "\n当前版本(内部版本号)：" + B + "\n更新日记：" + W,
            //确定键内容
            positive: "下载",
            //取消键内容
            negative: "取消",
            //中性键内容
            //neutral: "到浏览器下载",
            //勾选框内容
            //checkBoxPrompt: "不再提示"
        }).on("positive", () => {
            //监听确定键
            toast("开始下载....");
            app.openUrl("https://api.zuoteam.club/TXWZS/app/1.apk")

        }).on("neutral", () => {
            //监听中性键
        }).on("check", (checked) => {
            //监听勾选框
        }).show();

    } else {
        //toast("当前是最新版本");
    }
} else {
    confirm("检查更新失败，请检查网络设置！");
}

//更新资源包
const path6 = files.getSdcardPath() + "/Android/data/com.up366.answer/files/";

let C = files.read(path6 + "/download.txt")
//配置文件URL
var url = "";
var res = http.get(url);
if (res.statusCode == 200) {
    //toast("正在检查更新");
    let A = res.body.string();
    if (A > C) {
        toast("发现新资源包!");
        confirm("发现新资源包：\n" + A + "\n当前版本：\n" + C + "\n\n请点击下载资源包，下载最新版!")
    } else {
        //toast("当前是最新资源包");
    }
} else {
    }
/*
//公告
//配置文件URL
var url = "";
var res = http.get(url);
if (res.statusCode == 200) {
    let G = res.body.string();
    confirm(G);
} else {
    toast("暂无新公告");
}
*/