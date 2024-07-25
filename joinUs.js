function joinUs(){
    var joinParams = {
        fullName:document.getElementById('fullName').value,
        email:document.getElementById('email').value,
        contactNumber:document.getElementById('contactNumber').value,
        whatsappNumber:document.getElementById('whatsappNumber').value,
        profession:document.getElementById('profession').value,
        dob:document.getElementById('dob').value,
        findUs:document.getElementById('findUs').value,
        knowAnyone:document.getElementById('knowAnyone').value,
        expectations:document.getElementById('expectations').value,    
    }
    emailjs.send("service_ewe5knb","template_5dknlqi",joinParams).then(function(){
        alert("We got your response, we will get back to you very soon")
     })
}