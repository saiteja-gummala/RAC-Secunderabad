function sendMail(){
 var params = {
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value
 }
 emailjs.send("service_ewe5knb","template_5e7q6da",params).then(function(){
    alert("We got your response, we will get back to you very soon")
 })
}

