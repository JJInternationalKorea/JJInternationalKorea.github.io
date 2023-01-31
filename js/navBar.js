var navMenu = document.getElementById("custom-nav-menu");
navMenu.innerHTML = `
<div class=\"container\">
  <a class=\"navbar-brand\" href=\"index.html\">JJ International Korea</a>
  <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
    <span class=\"navbar-toggler-icon\"></span>
  </button>
  <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">
    <ul class=\"navbar-nav ms-auto\">
      <li class=\"nav-item active\"><a class=\"nav-link\" href=\"index.html\">Home</a></li>
      <li class=\"nav-item\"><a class=\"nav-link\" href=\"about.html\">About</a></li>
      <li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">Protective Items</a>
        <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
          <li><a class=\"dropdown-item\" href=\"protective-cloth.html\">Protective Full Body Wearable</a></li>
          <li><a class=\"dropdown-item\" href=\"masks.html\">Masks</a></li>
        </ul>
      </li>
      <li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">Textile Fabrics</a>
        <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
          <li><a class=\"dropdown-item\" href=\"woven.html\">Woven</a></li><li><a class=\"dropdown-item\" href=\"knit.html\">Knit</a></li>
          <li><a class=\"dropdown-item\" href=\"lace.html\">Lace</a></li>
          <li><a class=\"dropdown-item\" href=\"foil-print.html\">Foil Print</a></li>
          <li><a class=\"dropdown-item\" href=\"mesh.html\">Mesh</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>`;