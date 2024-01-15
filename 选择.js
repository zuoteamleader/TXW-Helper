//主程序
//目录
const path0 = files.getSdcardPath() + "/Android/data/com.up366.mobile/files/flipbook/";
const path6 = files.getSdcardPath() + "/Android/data/com.up366.answer/cache/";

function bookDetect(dir) {
    if (dir.length === 32) {
        return true;
    } else {
        return false;
    }
}

function selectDialog(i, text) {
    if (i.length !== 1) {
        return dialogs.select(text, i);
    } else {
        return 0;
    }
}

//选择作业
let modeDir;
i = files.listDir(path0, bookDetect);
modeDir = path0 + i[selectDialog(i, "选择作业1")] + "/";
i = files.listDir(modeDir, bookDetect);

const dirPath = modeDir + i[selectDialog(i, "选择作业2")];

function fileDetect(dirPath) {
    const types = ["page1.js", "correctAnswer.xml", ".tem"];
    let type;
    let filePath;

    for (type in types) {
        filePath = dirPath + "/" + types[type];
        if (files.exists(filePath)) {
            return filePath;
        }
    }

    const dirs = ["练习模式(或空白)", "考试模式"];
    let dir;
    for (dir in dirs) {
        if (files.exists(dirPath)) {
            dir = dialogs.select("选择作业类型", dirs) + 2;
            filePath = dirPath + "/" + dir + "/" + "page1.js";
            return filePath;
        }
    }
}

const finalPath = fileDetect(dirPath);

//缓存路径
//缓存page1路径
files.write(path6 + "/page.txt", finalPath);
//缓存资源文件夹/路径
files.write(path6 + "/资源文件夹.txt", modeDir);
//缓存作业文件夹/路径
files.write(path6 + "/作业文件夹.txt", dirPath + "/");

if (files.getName(finalPath) === "page1.js") {
    confirm("目前可以解析作业，修改作业，删除作业")
} else if (files.getName(finalPath) === "correctAnswer.xml") {
    confirm("目前仅可以解析作业，删除作业，不可修改作业(未支持xml类型)")
} else if (files.getName(finalPath) === ".tem") {
    confirm("目前作业未加载完成，删除作业，仅可以修改作业，若要进行其他操作，请将作业加载完成")
}