$("document").ready(function() {
    $('#p').css("background-color", "blue");
    $('#p2').css("background-color", "red");
    $('#oneButton').bind('click', alertButtonClick);
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $("#replaceWHtml").bind("click", replaceWHtml);
    $("#replaceWText").bind("click", replaceWText);
    $("#addAPara").bind("click", addAPara);
    $("#removeAPara").bind("click", removeAPara);
    
//$("#hideLogo").bind("click", hideTheImage);
//
//$("#showLogo").bind("click", showTheImage);

$("#toggleText").bind("click", toggleTheText);

//$("#fadeLogo").bind("click", fadeTheImage);

//$("#fadeALittle").bind("click", fadeALittle);

//$("#fullOpacity").bind("click", fullOpacityImage);

$("#slideAway").bind("click", slideTheImage);

$("#slideBack").bind("click", unslideTheImage);

//$("#customAnim").bind("click", customAnimate);

//$("#shakeLogo").bind("click", shakeLogo);

//$("#bounceLogo").bind("click", bounceLogo);

//$("#highlightLogo").bind("click", highlightLogo);

//$("#pulsateLogo").bind("click", pulsateLogo);

//$("#sizeLogo").bind("click", sizeLogo);


});

//function hideTheImage() {
//
//$("#logo").hide('puff',{}, 2500);
//}
//
// 
//
//function showTheImage() {
//
//$("#logo").show("fold", {}, 2500);
//
//}


function toggleTheText()

{

$("h4").toggle(2500);

}

 

//function fadeTheImage() {
//
//$("#logo").fadeOut(2500);
//
//}
//
// 
//
//function fadeALittle() {
//
//$("#logo").fadeTo(2500,.30);
//
//}
//
// 
//
//function fullOpacityImage() {
//
//$("#logo").fadeTo(2500,1);
//
//}

 

function slideTheImage() {

$("#second").slideUp(2500);

}

 

function unslideTheImage() {

$("#second").slideDown(2500);

}

//function customAnimate() {
//
//$("#logo").animate({opacity: 0.25, height: "150px"}, 2000, "easeOutBounce");
//
//}
//
// 
//
//function shakeLogo() {
//
//$("#logo").effect("shake", {times:5, direction:"down", distance: 10}, 200);
//
//}
//
// 
//
//function bounceLogo() {
//
//$("#logo").effect("bounce", {times:5, direction:"up", distance: 10}, 200);
//
//}
//
// 
//
//function highlightLogo() {
//
//$("h3").effect("highlight", {color: "purple"}, 500);
//
//}
//
// 
//
//function pulsateLogo() {
//
//$("#logo").effect("pulsate", {times:5}, 200);
//
//}
//
// 
//
//function sizeLogo() {
//
//$("#logo").effect("size", { to: {height: 350, width: 350}}, 200);
//
//}


function addAPara() {
    $("#randPara").append("<p>A WILD PARAGRAPH APPEARS</p>");
    
}function removeAPara() {
    $("#randPara p:last").remove();
    
}
function replaceWHtml() {
    $("#h3Tag").html("<h6>Now im an h6 in HTML</h6>");
    
}
function replaceWText() {
    $("#h3Tag").text("<h6>Now im an h6 in text</h6>");
    
}
function mouseOverMe() {
    $("#h1").html("MouseOn");
    $("#p").html("nyannyannyannyan :3 nyannyannyannyan");
     $("#p2").html("nyannyannyannyan :3 nyannyannyannyan");

}
function mouseOutMe() {
    $("#h1").html("Hover over me for a surprise!");
    $("#p").html("yo look these two lines are different i bet i just blew your mind");
    $("#p2").html("these two lines are called siblings, using the normal css (see technology page) it would take way more time<br /> effort, and code to pull this off");

}
function alertButtonClick() {
    alert("you clicked a button yay you are relatively smart");
}

