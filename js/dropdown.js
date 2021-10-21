function dropProduct() {
    document.getElementById("products").classList.toggle("show");
}

function dropFabric() {
    document.getElementById("fabric").classList.toggle("show");
}

function dropFood() {
    document.getElementById("food").classList.toggle("show");
}

window.addEventListener = function(event) {
    if (!event.target.matches('.dropbtn')) {
         var dropdowns = document.getElementsByClassName("dropdown-content");
         var i;
         for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                   openDropdown.classList.remove('show');
              }
         }
    }
}