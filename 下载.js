//路径
var path6 = files.getSdcardPath() + "/Android/data/com.up366.answer/files/";

//MP3缓存路径
var pathmp3 = path6 + "mp3/1.mp3"
//url
var urlmp3 = "";

//JS缓存路径
var path2 = path6 + "js/";

var JS1 = path2 + "exam-zdcs.js";
var JS2 = path2 + "U3CompoLib.js";

//url
var urljs = "";

var urljs1 = urljs + "";
var urljs2 = urljs + "";

//提示版本
//配置文件URL
var url = "";
var res = http.get(url);
if (res.statusCode == 200) {
    let A = res.body.string();
    confirm("下载\n资源包版本：" + A )
    files.write(path6 + "/download.txt", A);
} else {
    toast("请检查网络");
}

//下载MP3
var res = http.get(urlmp3);
if(res.statusCode != 200){
    toast("请求失败");
}
files.writeBytes(pathmp3, res.body.bytes());
toast("mp3下载成功");

//下载JS1
var res = http.get(urljs1);
if(res.statusCode != 200){
    toast("请求失败");
}
files.writeBytes(JS1, res.body.bytes());
toast("JS1下载成功");

//下载JS2
var res = http.get(urljs2);
if(res.statusCode != 200){
    toast("请求失败");
}
files.writeBytes(JS2, res.body.bytes());
toast("JS2下载成功");