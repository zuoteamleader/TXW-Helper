var path6 = files.getSdcardPath() + "/Android/data/com.up366.answer/cache/";

var Q = path6 + "answer.txt"

var i = dialogs.select("对已保存答案进行操作", "其他APP打开/分享", "删除");
if (i == 0) {
    toast("答案路径：" + Q);
    app.editFile(Q);
}
if (i == 1) {
    files.remove(Q);
    toast("已删除答案");
}