const frontColor = document.getElementById("front")
const backColor = document.getElementById("back")
const webb = document.getElementById("emailB")
//const nodes = document.querySelectorAll("#line1, #line2, #line3, #line4, #line5, #link, #firstColor, #secondColor")

function changeFrontBg(){
    frontColor.style.background = background.value
    backColor.style.background = background.value
}
function changeWebBg(){
    webb.style.background = document.getElementById("inputWebBg").value;
}
function changeLineBg(){
 //   nodes.style.background = document.getElementById("inputLineBg").value
    document.getElementById("line1").style.background = document.getElementById("inputLineBg").value
    document.getElementById("line2").style.background = document.getElementById("inputLineBg").value
    document.getElementById("line3").style.background = document.getElementById("inputLineBg").value
    document.getElementById("line4").style.background = document.getElementById("inputLineBg").value
    document.getElementById("line5").style.background = document.getElementById("inputLineBg").value
    document.getElementById("link").style.background = document.getElementById("inputLineBg").value
    document.getElementById("firstColor").style.background = document.getElementById("inputLineBg").value
    document.getElementById("secondColor").style.background = document.getElementById("inputLineBg").value 
}

function change_Text(){
    frontColor.style.color = Text.value;
    website.style.color = Text.value;
}
function printNameH(){
    document.getElementById("nameB").innerHTML = inputName.value;
}
function printJobH(){
    document.getElementById("jobH").innerHTML = inputJob.value;
}
function printEmailH(){
    document.getElementById("emailH").innerHTML = inputEmail.value;
}
function printTelephoneH(){
    document.getElementById("phoneH").innerHTML = inputTelephone.value;
}
function printAddressH(){
    document.getElementById("addressH").innerHTML = inputAddress.value;
}
function printWebsiteH(){
    document.getElementById("websiteH").innerHTML = inputWebsite.value;
}
function changeTextH(){
    document.getElementById("contactH").style.color = document.getElementById("inputTextH").value;
}
//function changeTextH(){
//    document.getElementById("contactH").style.color = document.getElementById("inputTextH").value;
//}