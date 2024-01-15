"ui";
/*
天学网助手
com.up366.answer
开源版本
*/

//检测浮窗权限
if (!floaty.checkPermission()) {
    intent = new Intent();
    intent.setAction("android.settings.action.MANAGE_OVERLAY_PERMISSION");
    app.startActivity(intent);
}

//检查系统版本
var sysver = android.os.Build.VERSION.RELEASE;
if (sysver > 10) {
    confirm("注意！当前安卓版本:" + sysver + "\n请执行 设置-设置应用权限-2.获取访问data目录权限")
}

ui.statusBarColor("#ff17a8ff");
ui.layout(
    <vertical>
        <frame background="#ff17a8ff">
            <text w="*" h="45" gravity="center" size="24sp" textStyle="bold" color="#ffffff">天学网助手V3</text>
        </frame>
        <text text ="基础功能:" size="20" color="black"/>
        <button id="open" text="打开天学网" color="#ffffff" style="Widget.AppCompat.Button.Colored"/>
        <button id="cheer" text="选择作业" color="#ffffff" style="Widget.AppCompat.Button.Colored"/>
        
        <text text ="解析:（auto js 引擎)" size="20" color="black"/>
        <text text="支持更多作业"/>
        <button id="answer" text="解析答案并保存" color="#ffffff" style="Widget.AppCompat.Button.Colored"/>
        <button id="words" text="打开/分享/删除 已保存答案" color="#ffffff" style="Widget.AppCompat.Button.Colored"/>
        
        <text text ="修改:" size="20" color="black"/>
        <text text="仅支持听力培优"/>
        <button id="six" text="更换旁白/速通(支持自定义)" color="#ffffff" style="Widget.AppCompat.Button.Colored"/>
        <button id="delete" text="删除作业" color="#ffffff" style="Widget.AppCompat.Button.Colored"/>
        
        <text text ="设置:" size="20" color="black"/>
        <button id="app" text="设置应用权限" color="#ffffff" style="Widget.AppCompat.Button.Colored"/>
        <button id="download" text="下载资源包" color="#ffffff" style="Widget.AppCompat.Button.Colored"/>
        
        <text text="版本：back" gravity="center"/>
        <text text="By:No one" gravity="center"/>
    </vertical>
);


ui.open.click(() => {
    toast("正在打开 天学网");
    launchApp("天学网学生");
});

ui.app.click(() => {
    engines.execScriptFile("权限.js");
});

ui.download.click(() => {
    engines.execScriptFile("下载.js");
});

ui.cheer.click(() => {
    engines.execScriptFile("选择.js");
});

ui.six.click(() => {
    engines.execScriptFile("修改.js");
});

ui.delete.click(() => {
    engines.execScriptFile("删除.js");
});

ui.answer.click(() => {
    engines.execScriptFile("解析.js");
});

ui.words.click(() => {
    engines.execScriptFile("答案.js");
});

//检查更新
engines.execScriptFile("更新.js");

var isCanFinish = false;
var isCanFinishTimeout;
ui.emitter.on("back_pressed", e => {
    if (!isCanFinish) {
        isCanFinish = true;
        toast("在按一次退出");
        isCanFinishTimeout = setTimeout(() => {
            isCanFinish = false;
        }, 2000);
        e.consumed = true;
    } else {
        clearTimeout(isCanFinishTimeout);
        e.consumed = false;
    };
});