//读取路径 
const path0 = files.getSdcardPath() + "/Android/data/com.up366.mobile/files/flipbook/";
const path6 = files.getSdcardPath() + "/Android/data/com.up366.answer/cache/";

var path1 = files.read(path6 + "/资源文件夹.txt") + "bookres/media/" ;
//MP3缓存路径
var path2 = path6 + "mp3/1.mp3"

toastLog("正在更换为极短MP3");

files.copy(path2, path1 + "btitle0.mp3")
files.copy(path2, path1 + "btitle1.mp3")
files.copy(path2, path1 + "dingdong.mp3")
files.copy(path2, path1 + "ending.mp3")
files.copy(path2, path1 + "mending.mp3")
files.copy(path2, path1 + "mt1.mp3")
files.copy(path2, path1 + "mt2.mp3")
files.copy(path2, path1 + "mt3.1.mp3")
files.copy(path2, path1 + "mt3.2.mp3")
files.copy(path2, path1 + "mt4.1.mp3")
files.copy(path2, path1 + "mt4.2.mp3")
files.copy(path2, path1 + "mt5.1.mp3")
files.copy(path2, path1 + "mt5.3.mp3")
files.copy(path2, path1 + "mt6.1.mp3")
files.copy(path2, path1 + "mt6.4.mp3")
files.copy(path2, path1 + "section1.mp3")
files.copy(path2, path1 + "section2.mp3")
files.copy(path2, path1 + "section3.mp3")
files.copy(path2, path1 + "section4.mp3")
files.copy(path2, path1 + "section5.mp3")
files.copy(path2, path1 + "section6.mp3")
files.copy(path2, path1 + "shiyin.mp3")
files.copy(path2, path1 + "t1.mp3")
files.copy(path2, path1 + "t2.1.1.mp3")
files.copy(path2, path1 + "t2.1.mp3")
files.copy(path2, path1 + "t2.mp3")
files.copy(path2, path1 + "t3.1.mp3")
files.copy(path2, path1 + "t3.2.mp3")
files.copy(path2, path1 + "t4.1.mp3")
files.copy(path2, path1 + "t4.2.mp3")
files.copy(path2, path1 + "t4.3.mp3")
files.copy(path2, path1 + "t4.4.mp3")
files.copy(path2, path1 + "t4.5.mp3")
files.copy(path2, path1 + "t5.1.mp3")
files.copy(path2, path1 + "t5.2.mp3")
files.copy(path2, path1 + "t5.3.mp3")
files.copy(path2, path1 + "t5.4.mp3")
files.copy(path2, path1 + "t6.1.mp3")
files.copy(path2, path1 + "t6.4.mp3")
files.copy(path2, path1 + "title0.mp3")
files.copy(path2, path1 + "title1.mp3")
files.copy(path2, path1 + "title2.mp3")
files.copy(path2, path1 + "tongyong.mp3")
files.copy(path2, path1 + "zt1.mp3")
files.copy(path2, path1 + "zt2.1.mp3")
files.copy(path2, path1 + "zt2.2.mp3")
files.copy(path2, path1 + "zt2.mp3")
files.copy(path2, path1 + "zt3.mp3")
files.copy(path2, path1 + "zt4.1.mp3")
files.copy(path2, path1 + "zt4.2.mp3")
files.copy(path2, path1 + "zt4.3.mp3")
files.copy(path2, path1 + "zt5.mp3")

toastLog("旁白完成更换");

sleep("1000");

launchApp("天学网学生");