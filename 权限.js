const path6 = files.getSdcardPath() + "/Android/data/com.up366.answer/";

var i = dialogs.select("请按步骤操作", "1.获取有关权限", "2.获取访问data目录权限", "3.获取打开天学网权限", "4.获取打开天学网助手权限", "5.创建缓存路径", "6.请选择一次作业缓存路径","7.下载资源包");

if (i == -1) {
    toast("请重新操作");
} else if (i == 0) {
    //获取权限
    var hh = confirm("请开启 悬浮窗权限 和 读取储存空间权限");
    if (hh) {
        openAppSetting("com.up366.answer");
    } else {
        toast("请开启 悬浮窗权限 和 读取储存空间权限");
    }

} else if (i == 1) {
    engines.execScriptFile("访问.js");
} else if (i == 2) {
    launchApp("天学网学生");
} else if (i == 3) {
    launch("com.up366.answer")
} else if (i == 4) {
    files.createWithDirs(path6 + "cache/")
    files.createWithDirs(path6 + "files/mp3/")
    files.createWithDirs(path6 + "files/js/")
    toast("缓存路径创建成功");
} else if (i == 5) {
    engines.execScriptFile("选择.js");
} else if (i == 6) {
    engines.execScriptFile("下载.js");
} 