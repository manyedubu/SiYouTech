let allCities,provinceId;
window.addEventListener("load",function(){
    new Ajax({
        type:"GET",
        url:"http://127.0.0.1:8081/js/allCities.json",
        success:function(){
            allCities = eval(arguments[0]);
            formBinding();
        }
    });
});
function formBinding(){
    /**     加载省     **/
    let province = "<option value=\"-1\">请选择省</option>";
    for(let value of allCities){
        if(value["ParentId"] === 0){
            province += "<option value=\"" + value["SysNo"] + "\">" + value["ProvinceName"] + "</option>";
        }
    }
    document.querySelector("#province").innerHTML = province;
    /**     加载市     **/
    document.querySelector("#province").addEventListener("change",loadCities);
    /**     加载区     **/
    document.querySelector("#cities").addEventListener("change",loadAreas);
    /**      清空     **/
    for(let value of document.querySelectorAll(".close")){
        value.addEventListener("click",empty);
    }
    /**      提交     **/
    document.querySelector(".btn a").addEventListener("click",submit);
}
function promptPop(){
    let prompt = "<div class=\"promptPop\">" + arguments[0] + "</div>";
    document.querySelector(".formPage").insertAdjacentHTML("beforeEnd",prompt);
    let target = document.querySelector(".promptPop");
    target.style["transition"]    = "0.35s linear all";
    setTimeout(function(){
        target.style["opacity"]   = 0.8;
    },10);
    setTimeout(function(){
        target.style["opacity"]   = 0;
    },2000);
    setTimeout(function(){
        target.remove();
    },2350);
}
function loadCities(){
    document.querySelector("#cities").innerHTML = "<option value=\"-1\">请选择市</option>";
    document.querySelector("#areas").innerHTML  = "<option value=\"-1\">请选择区</option>";
    provinceId = this.value;
    if(+provinceId === -1){
        return;
    }
    let cities = "<option value=\"-1\">请选择市</option>";
    const target = allCities.find(function(){
        return arguments[0]["SysNo"] >= +provinceId;
    });
    for (let value of target["CityList"]) {
        cities += "<option value=\"" + value["SysNo"] + "\">" + value["CityName"] + "</option>";
    }
    document.querySelector("#cities").innerHTML = cities;
}
function loadAreas(){
    let cityId = this.value;
    if(+cityId === -1){
        return;
    }
    let areas = "<option value=\"-1\">请选择区</option>";
    const target = allCities
        .find(function(){
            return arguments[0]["SysNo"] >= +provinceId;
        })["CityList"]
        .find(function(){
            return arguments[0]["SysNo"] >= +cityId;
        });
    for(let value of target["DistrictList"]){
        areas += "<option value=\"" + value["SysNo"] + "\">" + value["DistrictName"] + "</option>";
    }
    document.querySelector("#areas").innerHTML = areas;
}
function empty(){
    this.parentNode.querySelector("input").value = "";
}
function submit(){
    if(document.querySelector("#deliveryCode").value === ""){
        promptPop("请输入提货码");
        return;
    }
    if(document.querySelector("#name").value === ""){
        promptPop("请输入收货人姓名");
        return;
    }
    if(document.querySelector("#phone").value === ""){
        promptPop("请输入收货人手机号");
        return;
    }
    if(!/^1[34578][0-9]{9}$/.test(document.querySelector("#phone").value)){
        promptPop("手机号格式错误");
        return;
    }
    if(+document.querySelector("#province").options[
            document.querySelector("#province").selectedIndex].value === -1){
        promptPop("请选择省份");
        return;
    }
    if(+document.querySelector("#cities").options[
            document.querySelector("#cities").selectedIndex].value === -1){
        promptPop("请选择城市");
        return;
    }
    if(+document.querySelector("#areas").options[
            document.querySelector("#areas").selectedIndex].value === -1){
        promptPop("请选择地区");
        return;
    }
    if(document.querySelector("#address").value === ""){
        promptPop("请输入收货人详细地址");
        return;
    }
    let data = {
        PackageCode:document.querySelector("#deliveryCode").value,
        PackageNO:"F0C5CDC8FC684589B7FFEC19E8F1CFD1",
        Name:document.querySelector("#name").value,
        MobileTel:document.querySelector("#phone").value,
        DetailAddress:document.querySelector("#address").value,
        Province:document.querySelector("#province").options[
            document.querySelector("#province").selectedIndex].text,
        City:document.querySelector("#cities").options[
            document.querySelector("#cities").selectedIndex].text,
        Zone:document.querySelector("#areas").options[
            document.querySelector("#areas").selectedIndex].text,
        Street:""
    };
    submitInfo(data);
}
function submitInfo() {
    let timestamp = + (new Date()) + '';
    let req_params = {
        data:JSON.stringify(arguments[0]),
        oauth_consumer_key:"2589093245",
        oauth_timestamp:timestamp,
        oauth_version:"2.0"
    };
    let domain = "http://wdjhkb.benlai.com";
    let sigBase = "jfh9d8e784ohfnsi7632lPOST" + domain +
        "/Oauth2/execute/benlai_PackageNOChargedata" + JSON.stringify(arguments[0]) +
        "oauth_consumer_key2589093245oauth_timestamp" + timestamp + "oauth_version2.0";
    req_params.oauth_signature = md5(sigBase);
    let url = domain + "/Oauth2/execute/benlai_PackageNOCharge";
    new Ajax({
        type:"POST",
        url:url,
        contentType:"application/json",
        data:JSON.stringify(req_params),
        success:function(){
            let responseText  = eval("("+arguments[0]+")");
            if(responseText["IsValid"]){
                promptPop('成功');
                //window.location.href = './success.html';
            }else{
                promptPop(responseText["ErrorMessage"]);
            }
        },
        error:function(){
            promptPop("提交错误,请重试");
        }
    });
}