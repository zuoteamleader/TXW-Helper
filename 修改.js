//读取page1路径
const path0 = files.getSdcardPath() + "/Android/data/com.up366.mobile/files/flipbook/";
const path6 = files.getSdcardPath() + "/Android/data/com.up366.answer/cache/";

var finalPath = files.read(path6 + "/page.txt")
var zyPath = files.read(path6 + "/作业文件夹.txt")
var Path1 = files.read(path6 + "/作业文件夹.txt")

//删除作业
files.removeDir(finalPath);
files.removeDir(zyPath);
toast("请选择要修改的作业");

//打开
launchApp("天学网学生");

//切后台
var G = true;
var window = floaty.window(
    <frame>
        <button id="action" text="加载进度条出现时点我!" w="250" h="40" bg="#FFA10028"/>
    </frame>
);

//手动
window.action.click(() => {
    toast("请耐心等待");
    G = false
    window.close();
});

//长按调整位置
window.action.longClick(() => {
    window.setAdjustEnabled(!window.isAdjustEnabled());
    return true;
});

setInterval(() => {}, 1000);

//自动
while (G) {
    if (files.exists(Path1 + ".tem") || G == false) {
        G = false;
        toast("正在切换到后台...");
        launch("com.up366.answer");
        sleep("100");
    }
}

//检测
var Q = true;
var window = floaty.window(
    <frame>
        <button id="action" text="请用意念判断天学网听力是否加载完成!再点我!跳过等待" w="250" h="100" bg="#FFA10028"/>
    </frame>
);

/*
//手动
window.action.click(() => {
    Q = false;
    window.close();
});
*/

//长按调整位置
window.action.longClick(() => {
    window.setAdjustEnabled(!window.isAdjustEnabled());
    //return true;
});

setInterval(() => {}, 1000);

//自动
var d = dialogs.build({
    title: "请耐心等待，加载中...",
    progress: {
        max: -1
    },
    cancelable: true
}).show();

while (Q) {
    if (files.exists(finalPath) == true || Q == false) {
        a = 1;
        toast("准备完毕");
        setTimeout(() => {
            d.dismiss();
        }, 1);
    } else {
        toast("加载中...");
        sleep("2000");
    }
}

//操作
var i = dialogs.multiChoice("接下来的操作", ["更换音频MP3(旁白)", "更改分数JS(速通)"]);

if (i.toString() == [0, 1].toString()) {
    //更换全部
    engines.execScriptFile("更换.js");
    engines.execScriptFile("速通.js");
} else if (i == 0) {
    //更换旁白
    engines.execScriptFile("更换.js");
} else if (i == 1) {
    //速通
    engines.execScriptFile("速通.js");
}