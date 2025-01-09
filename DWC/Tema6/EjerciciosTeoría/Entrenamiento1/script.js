const parrafo1 = document.getElementById("parrafo1");    
parrafo1.addEventListener("click", (event) => {
    alert('Has hecho click.');
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.textContent);
    console.log(event.target.tagName);
});
