//读取所选作业路径
const path0 = files.getSdcardPath() + "/Android/data/com.up366.mobile/files/flipbook/";
const path6 = files.getSdcardPath() + "/Android/data/com.up366.answer/cache/";

var finalPath = files.read(path6 + "page.txt")

function JSONParse(text) {
    text = text.substring(15);
    return JSON.parse(text);
}

let text = files.read(finalPath);
var lx = 0;
var obj;
if (files.getName(finalPath) === "page1.js") {
    obj = JSONParse(text);
    lx = "JS";
} else if (files.getName(finalPath) === "correctAnswer.xml") {
    lx = "XML";
} else if (files.getName(finalPath) === ".tem") {
 lx = "TEM"   
}

function print(words) {
    //日记
    log(words);
    //保存
    var file = open(path6 + "answer.txt", "a");
    //要写入的文件内容
    var Q = "\n" + words;
    //写入文件
    file.write(Q);
    //关闭文件
    file.close();
}

//显示控制台
console.show();
//打印内容
print("天学网助手");
console.error("此脚本仅供学习，若违反规章制度，与开发者无关");
console.error("请适度使用!");
print("请关注微信公众号：Zuoteam，回复：天学网，获取APP与教程。");
print("");
print("作业路径：" + finalPath);
print("");
print("作业种类：" + lx);

//种类为JS
if (lx === "JS") {

    print("");
    print("开始解析");
    print("");
    print("答案如下");
    print("");

    function answers(answer_text) {
        if (answer_text === "A") {
            return 0;
        } else if (answer_text === "B") {
            return 1;
        } else if (answer_text === "C") {
            return 2;
        }
    }

    function answerTextProcess(value) {
        let answer = answers(value.answer_text);
        return value.options[answer].content;
    }

    const sectionProcess = value => value.slides.forEach(slideProcess);

    var a = 1;

    function slideProcess(value) {
        if (value.answer_text) {
            //标序号
            print("第" + a + "题");
            a = a + 1;
            let answerContent = answerTextProcess(value);
            print(answerContent);
            options.push(answerContent);
        } else if (value.hasOwnProperty("questionList") || value.hasOwnProperty("questions_list")) {
            if (Array.isArray(value.questionList)) {
                if (value.questionList.length !== 0) {

                    if (Array.isArray(value.questionList[0].questions_list)) {
                        const m = n => n.questions_list.forEach(questionProcess);
                        value.questionList.forEach(m);
                    } else {
                        value.questionList.forEach(questionProcess);
                    }
                } else if (value.questions_list) {
                    value.questions_list.forEach(questionProcess);
                }
            }
        } else if (mode !== "exam" && value.analysis) {
            //标序号
            print("第" + a + "题");
            a = a + 1;
            print(tagclean(value.analysis));
        } else if (value.questionObj) {
            questionProcess(value.questionObj);
        }
    }

    function questionProcess(value) {
        if (value.hasOwnProperty("answer_text") && value.options[0]) {
            //标序号
            print("第" + a + "题");
            a = a + 1;
            let answerContent = answerTextProcess(value);
            print(answerContent);
            options.push(answerContent);
        } else if (value.hasOwnProperty("answers_list")) {
            value.answers_list.forEach(answerProcess);
        } else if (value.hasOwnProperty("questions_list") && mode === "exam") {
            const f = function(value) {
                if (value.answer_text) {
                    print('');
                    let answerContent = answerTextProcess(value);
                    print(answerContent);
                    options.push(answerContent);
                } else if (value.answers_list) {
                    value.answers_list.forEach(answerProcess);
                }
            }
            value.questions_list.forEach(f);
        } else if (value.answers) {
            if (Array.isArray(value.answers.answer)) {
                value.answers.answer.forEach(answerProcess);
            } else if (Object.prototype.toString.call(value.answers.answer) === "[object Object]") {
                answerProcess(value.answers.answer);
            }
        } else if (value.analysis) {
            //标序号
            print("第" + a + "题");
            a = a + 1;
            print(tagclean(value.analysis));
        }
    }

    var options = [];
    var fills = [];

    if (obj.slides) {
        obj.slides.forEach(slideProcess);
    } else if (obj.sliders) {
        obj.sliders.forEach(slideProcess);
    } else if (obj.sections) {
        obj.sections.forEach(sectionProcess);
    } else if (obj.practice) {
        obj.practice.forEach(slideProcess);
    } else if (obj.sections) {
        obj.sections.forEach(sectionProcess);
    } else if (obj.element) {
        obj.element.forEach(questionProcess);
    };
} else if (lx === "XML") {
    print("<answers>字母</answers>，字母 就是答案");
    print(files.read(finalPath));
    
    var hh = confirm("为了更好的浏览，是否打开答案?\n解析还没写（打脸）");
    if (hh) {
        app.viewFile(path6 + "answer.txt")
        }
} else if (lx === "TEM") {
confirm("当前作业未下载完成，请下载完再解析。")
}
//反馈
if (a == 1 | finalPath == null | lx == 0) {
    print("");
    toastLog("解析失败");
} else {
    print("");
    toastLog("解析完成");
    toastLog("答案已保存，可去主页面分享答案");
};