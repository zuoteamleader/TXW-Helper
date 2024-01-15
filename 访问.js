'ui';
importClass(java.io.File);
let safUtil = require('./saf.js')
ui.layout(
    <vertical>
        <text id="ps" text="请授权! 完成授权后，请返回上一界面！" textSize="20sp" gravity="center" />
    </vertical>)

dialogs.alert('注意！','请授与本APP读写data路径的权限').then(()=>{safUtil.getPermission(activity);})