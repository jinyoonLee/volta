$(document).ready(function(){
    scrollEvent("header div:nth-child(2)");
    scrollEvent("header div:nth-child(1) p");
    scrollEvent("[class*='Area'] aside");
    scrollEvent("#searchPanel");
    scrollEvent(".btnTop");
    muiToggleControl();
    openCloseControlPanel("header div:nth-child(2) >ul li input[type='button']","#searchPanel .btnClose");
    openCloseControlPopup(".contactContainer2 input[type='button']","#contactPop .btnClose","#contactPop .aBtn");
    openCloseControlPopup(".findContainer1 input[type='button']","#findPop .btnClose","#findPop .aBtn");
    customSlider(".brandSlider >ul",true,1,1,1500,0,true,true,true,true);
    customSlider(".figuresSlider >ul",true,1,1,1600,100,false,true,true,true);
    customSlider(".aboutArea div:last-of-type ul",false,1,1,460,235,true,true,true,true);
    bestSlider();
    productColor(".productCard ul li");
    productColor(".productCardList ul li");
    productColor(".detailTabMenu li");
    listScrollEvent(".contentArea");
    detailTab();
    accControl(".detailArea aside .accComp li h3");
    countControl();
    promotionScrollEvent();
    emptyBoxControl();
    radioAControl();
    numberOnly();
    profileEditControl();
});
function scrollEvent(target){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>80){
            $(target).addClass("scroll");
        }else {
            $(target).removeClass("scroll");
        }
    })
}
function muiToggleControl(){
    $("#muiNavBtn").click(function(){
        if($(this).val() == "menu"){
            $(this).val("close");
        }else if($(this).val() == "close"){
            $(this).val("menu");
        }
        $(this).toggleClass("active");
        $("header nav").toggleClass("active");
    });
}
function openCloseControlPanel(target, button){
    var currentPanel = null;
    $(target).click(function(){
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
    $(button).click(function(){
        $(currentPanel).removeClass("active");
    });
}
function openCloseControlPopup(target, button1, button2){
    var currentPopup = null;
    $(target).click(function(){
        currentPopup = "#" + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
    });
    $(button1).click(function(){
        $(currentPopup).removeClass("active");
    });
    $(button2).click(function(){
        $(currentPopup).removeClass("active");
    });
}
function customSlider(target, pgVal, mivSVal, maxSVal, swVal, smVal, hcoVal,infVal, ctVal, aVal){
    $(target).bxSlider({
        pager: pgVal,
        minSlides: mivSVal,
        maxSlides: maxSVal,
        slideWidth: swVal,
        slideMargin: smVal,
        hideControlOnEnd: hcoVal,
        infiniteLoop: infVal,
        moveSlides: 1,
        adaptiveHeight: true,
        controls : ctVal,
        auto: aVal,
        autoHover: true,
        pause: 2000
    });
}
function bestSlider(){
    if (window.matchMedia("(max-width: 767px)").matches){
        $(".bestSlider >ul").bxSlider({
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 420,
                slideMargin: 0,
                moveSlides: 1,
                infiniteLoop: true,
                adaptiveHeight: true,
                auto: true,
                autoHover: true,
                pause: 3000
            });
    }else{
        $(".bestSlider >ul").bxSlider({
            minSlides: 3,
            maxSlides: 3,
            slideWidth: 420,
            slideMargin: 0,
            moveSlides: 3,
            infiniteLoop: true,
            adaptiveHeight: true,
            auto: true,
            autoHover: true,
            pause: 3000
        });
    }
}
function productColor(target){
    for(var i=0; i<$(target).length; i++){
        var targetLI=$(target).eq(i);
        var colorName=targetLI.text();
        targetLI.addClass("color-"+colorName);
    }
}
function listScrollEvent(target){
    var scrollH1 = null;
    $(window).scroll(function(){
        if(scrollH1!=null){
            var scrollH2 = $(window).scrollTop();
            if(scrollH1<scrollH2){
                $(target).addClass("scroll");
            }else{
                $(target).removeClass("scroll");
            }
        }
        scrollH1 = $(window).scrollTop();
    });
}
function detailTab(){
    $(".detailTabMenu li").click(function(){
        var activeTab=$(this).text();
        $(".detailTabMenu li").removeClass("active");
        $(this).addClass("active");
        $(".detailArea >div").removeClass("active");
        $("#"+activeTab).addClass("active");
    });
}
function accControl(accBtn){
    $(accBtn).click(function(){
        $(this).toggleClass("active");
    });
}
function countControl(){
    var countArea=$("#countNumb");
    var subTotalArea=$(".subTotalPrice");
    var subTotalPrice=parseInt(subTotalArea.text());
    var deliveryPrice=parseInt($("#deliveryPrice").text());
    var totalArea=$(".totalPrice");
    var countN=parseInt(countArea.val());
    $(".countMinus").click(function(){
        if(countN>1){
            countN=countN-1;
        }else{
            countN=1;
        }
        countArea.val(countN);
        subTotalArea.text(subTotalPrice*countN);
        totalArea.text(subTotalPrice*countN+deliveryPrice);
    });    
    $(".countPlus").click(function(){
        if(countN<20){
            countN=countN+1;
        }else{
            countN=20;
        }
        countArea.val(countN);
        subTotalArea.text(subTotalPrice*countN);
        totalArea.text(subTotalPrice*countN+deliveryPrice);
    });
}
function promotionScrollEvent(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=0){
            $(".promotionArea ul li div").removeClass("scroll");
            $(".promotionArea ul li:nth-of-type(1) div").addClass("scroll");
        }
        if(top>=600){
            $(".promotionArea ul li div").removeClass("scroll");
            $(".promotionArea ul li:nth-of-type(2) div").addClass("scroll");
        }
        if(top>=1500){
            $(".promotionArea ul li div").removeClass("scroll");
            $(".promotionArea ul li:nth-of-type(3) div").addClass("scroll");
        }
    })
}
function emptyBoxControl(){
    $(".mycartContainer2 .btnClose").click(function(){
        $(".mycartContainer2").css("display","none");
        if(window.matchMedia("(min-width:1280px)").matches){
            $("#emptyBox").css("display","flex");
        }else{
            $("#emptyBox").css("display","block");
        }
    });
}
function radioAControl(){
    $(".checkoutContainer2 input[name='checkOut']").click(function(){
        var radioID = $(this).attr("id");
        if(radioID=="checkoutPayRadio"){
            $("#orderBtn").attr({"href":"https://www.paypal.com/signin?locale.x=en_US&country.x=US", "target":"_blank"});
        }else{
            $("#orderBtn").attr({"href":"order_payment.html", "target":"_self"});
        }
    });
}
function numberOnly(){
    $("input[type='tel']").on("keyup", function(){
        $(this).val($(this).val().replace(/[^0-9]/g,""));
    });
}
function profileEditControl(){
    var button=$(".profileEditContainer2 .bBtn");
    $(button).click(function(){
        if(button.val()=="EDIT"){
            $("[id^='edit']").attr("disabled", false);
            button.attr("value","SAVE");
        }else{
            $("[id^='edit']").attr("disabled", true);
            button.attr("value","EDIT");
        }
    });
}
