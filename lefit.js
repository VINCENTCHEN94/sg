const url = $request.url;
let obj = { "code": 0, "msg": "ok", "data": {} };

// 如果是开屏接口，data 返回数组
if (url.indexOf("AppAdvertisingFrontService") != -1) {
    obj.data = [];
} else {
    // 首页配置接口，data.list 返回空数组
    obj.data = { "list": [] };
}

$done({ response: { status: 200, body: JSON.stringify(obj), headers: {"Content-Type": "application/json"} } });
