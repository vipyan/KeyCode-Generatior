const container = document.querySelector('.container');
window.addEventListener("keydown", function (event) {
  
    container.innerHTML = `
    
    <div class="card">
        <h1>event.key </h1>
        <p>${event.key}</p>
    </div>
    
    <div class="card">
        <h1>event.keyCode </h1>
        <p>${event.keyCode}</p>
    </div>

    <div class="card">
        <h1>event.code </h1>
        <p>${event.code}</p>
    </div>
    `;
});