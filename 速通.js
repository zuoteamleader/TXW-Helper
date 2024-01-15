//读取路径 
const path0 = files.getSdcardPath() + "/Android/data/com.up366.mobile/files/flipbook/";
const path6 = files.getSdcardPath() + "/Android/data/com.up366.answer/cache/";
const path2 = files.getSdcardPath() + "/Android/data/com.up366.answer/files/js/";

var path1 = files.read(path6 + "/资源文件夹.txt") + "resources/" ;

toastLog("正在更换有关js");

files.copy(path2 + "", path1 + "")
files.copy(path2 + "", path1 + "")

toastLog("js完成更换");

sleep("1000");

launchApp("天学网学生");