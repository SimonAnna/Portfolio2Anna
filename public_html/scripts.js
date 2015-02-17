$("document").ready(function() {
    /*changes to get the first p and second p to be different*/
    $('#p').css("background-color", "blue");

    $('#p2').css("background-color", "red");
    /*for alerts when clicked*/
    $('#oneButton').bind('click', alertButtonClick);
    /*for hovering*/
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    /*changing texts*/
    $("#replaceWHtml").bind("click", replaceWHtml);

    $("#replaceWText").bind("click", replaceWText);

    $("#addAPara").bind("click", addAPara);

    $("#removeAPara").bind("click", removeAPara);
    /*animations for logo and text*/
    $("#hideLogo").bind("click", hideTheImage);

    $("#showLogo").bind("click", showTheImage);

    $("#toggleText").bind("click", toggleTheText);

    $("#fadeLogo").bind("click", fadeTheImage);

    $("#fadeALittle").bind("click", fadeALittle);

    $("#fullOpacity").bind("click", fullOpacityImage);

    $("#slideAway").bind("click", slideTheImage);

    $("#slideBack").bind("click", unslideTheImage);

    $("#customAnim").bind("click", customAnimate);

    $("#shakeLogo").bind("click", shakeLogo);

    $("#bounceLogo").bind("click", bounceLogo);

    $("#highlightLogo").bind("click", highlightLogo);

    $("#pulsateLogo").bind("click", pulsateLogo);

    $("#sizeLogo").bind("click", sizeLogo);
    /*accordion*/
    $("#superHumans").accordion({header: "h5"});
    //background
    $("#body").css({"background-image": "url(http://youtu.be/ZwTfmCgnL_0)"})
            .css("background-size", "1302,5000");
});
/*FUNctions(they arnt that fun)*/

/*hidding the image in a "puff"*/
function hideTheImage() {

    $("#logo").hide('puff', {}, 2500);
}
/*showing the image in a "fold"*/
function showTheImage() {

    $("#logo").show("fold", {}, 2500);

}
/*changes the text from one thing to another*/
function toggleTheText()

{

    $("h4").toggle(2500);

}
/*different animations*/
function fadeTheImage() {

    $("#logo").fadeOut(2500);

}
//drops opacity/fades
function fadeALittle() {

    $("#logo").fadeTo(2500, .30);

}
//full view
function fullOpacityImage() {

    $("#logo").fadeTo(2500, 1);

}
//slides away
function slideTheImage() {

    $("#second").slideUp(2500);

}
//slides it back
function unslideTheImage() {

    $("#second").slideDown(2500);

}
//i dont know how to explain this :? WH4T N0W?
function customAnimate() {

    $("#logo").animate({opacity: 0.25, height: "150px"}, 2000, "easeOutBounce");

}
//shakes the pic
function shakeLogo() {

    $("#logo").effect("shake", {times: 5, direction: "down", distance: 10}, 200);

}
//bounce
function bounceLogo() {

    $("#logo").effect("bounce", {times: 5, direction: "up", distance: 10}, 200);

}
//pulsate(get a rave up in here :3)
function pulsateLogo() {

    $("#logo").effect("pulsate", {times: 5}, 200);

}
//resizes the pic(kinda glitchy)
function sizeLogo() {

    $("#logo").effect("size", {to: {height: 350, width: 350}}, 200);

}
//highlights the text above logo
function highlightLogo() {

    $("h3").effect("highlight", {color: "purple"}, 500);

}
//functions for adding,changing,and deleting text and html(A WILD PARAGRAPH APPEARS)
function addAPara() {
    $("#randPara").append("<p>A WILD PARAGRAPH APPEARS</p>");

}
//removes a paragraph, kinda explains itself
function removeAPara() {
    $("#randPara p:last").remove();

}
function replaceWHtml() {
    $("#h3Tag").html("<h6>Now im an h6 in HTML</h6>");

}
function replaceWText() {
    $("#h3Tag").text("<h6>Now im an h6 in text</h6>");

}
//functions for what happens when you put your mouse over or not over a certain thing
//mouse over or mouse out there is no between
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
//an alert that pops up when you push a button
function alertButtonClick() {
    alert("you clicked a button yay you are relatively smart");
}

