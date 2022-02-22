const company = document.getElementById("outputCompany")
const message = document.getElementById("outputMessage")
const myName = document.getElementById("outputName")
const occupation = document.getElementById("outputJob")
const email = document.getElementById("outputEmail")
const phone = document.getElementById("outputTelephone")
const background = document.getElementById("inputBg")
const backgroundb = document.getElementById("inputbBg")
const bgColor = document.getElementById("b_card")
const allText = document.getElementById("all")
const detailsColor = document.getElementById("inputDetailsBg")
const details = document.getElementById("details")
const Text = document.getElementById("inputText")
const Textb = document.getElementById("inputbText")
const address = document.getElementById("outputAddress")
const website = document.getElementById("outputWebsite")

            //FRONT
const loadFile = (event) => {
    let image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
}
  
function printCompany(){
    company.innerHTML = inputCompany.value
    document.getElementById("outputbCompany").innerHTML = inputCompany.value;
}

function printMessage(){
    message.innerHTML = inputMessage.value
    document.getElementById("outputbMessage").innerHTML = inputMessage.value;
}

function changeBg(){
    bgColor.style.background = background.value;
}

function changeDetailsBg(){
    details.style.background = detailsColor.value;
}

function changeText(){
    allText.style.color = Text.value;
}

function textAlign(selected_id){
    bgColor.className = selected_id;
}

function detailsAlign(selected_id){
    document.getElementById("contact").className = selected_id;
}

function printName(){
    myName.innerHTML = inputName.value;
}

function printJob(){
    occupation.innerHTML = inputJob.value;
}

function printEmail(){
    email.innerHTML = "Email: " + inputEmail.value;
}

function printTelephone(){
    phone.innerHTML = "Phone No: " + inputTelephone.value;
}

function printAddress(){
    address.innerHTML = "Address: " + inputAddress.value;
}

function printWebsite(){
    website.innerHTML = inputWebsite.value;
}

                            //BACK
const loadImg = (event) => {
    let images = document.getElementById("outputb");
    images.src = URL.createObjectURL(event.target.files[0]);
}

function printbMessage(){
    
}

function changebBg(){
    document.getElementById("top").style.background = backgroundb.value;
}

function changebText(){
    document.getElementById("allb").style.color = Textb.value;
}

function changeFooterBg(){
    document.getElementById("footer").style.background = document.getElementById("inputFooterBg").value;
}

function printbWebsite(){
    document.getElementById("outputbWebsite").innerHTML = inputbWebsite.value;
}

function changeAvatarBg(){
    document.getElementById("webb").style.background = document.getElementById("avatarBg").value;
}

            //BUTTON
function formSubmit(){
    if (!inputName.value, !inputCompany.value, !inputMessage.value, !inputEmail.value, !inputJob.value, !inputTelephone.value){
        alert("Please, fill all sections.")
    }
}

function formReset(){
    window.location.reload();
}