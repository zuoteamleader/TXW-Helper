//读取路径 
const path0 = files.getSdcardPath() + "/Android/data/com.up366.mobile/files/flipbook/";
const path6 = files.getSdcardPath() + "/Android/data/com.up366.answer/cache/";

var b = files.read(path6 + "/资源文件夹.txt")
var a = files.read(path6 + "/作业文件夹.txt")

var i = dialogs.select("删除", "所选作业", "全部作业");
if (i == 0) {
    print(files.removeDir(a));
    toast("已删除所选作业")
}
if (i == 1) {
    print(files.removeDir(b));
    toast("全部作业删除完毕");
}
