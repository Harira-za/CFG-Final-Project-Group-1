

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        
        alert(`Thank you, ${name}! We have received your message:`);

       
        form.reset();
    });
});




