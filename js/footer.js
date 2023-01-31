var footer = document.getElementById("custom-footer");
footer.innerHTML = `
<section class=\"py-2\">
  <div class=\"container text-center text-md-start mt-5\">
    <div class=\"row mt-3\">
      <div class=\"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4\">
        <h6 class=\"text-uppercase fw-bold mb-4\">
          <i class=\"fas fa-gem me-3\"></i>JJ International Korea
        </h6>
      </div>
      <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4\">
        <h6 class=\"text-uppercase fw-bold mb-4\">Products</h6>
        <p><a href=\"protective-cloth.html\" class=\"text-reset\">Protective Full Body Wearable</a></p>
        <p><a href=\"masks.html\" class=\"text-reset\">Masks</a></p>
      </div>
      <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4\">
        <h6 class=\"text-uppercase fw-bold mb-4\">Textile Fabrics</h6>
        <p><a href=\"woven.html\" class=\"text-reset\">Woven</a></p>
        <p><a href=\"knit.html\" class=\"text-reset\">Knit</a></p>
        <p><a href=\"lace.html\" class=\"text-reset\">Lace</a></p>
        <p><a href=\"foil-print.html\" class=\"text-reset\">Foil Print</a></p>
        <p><a href=\"mesh.html\" class=\"text-reset\">Mesh</a></p>
      </div>
      <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4\">
        <h6 class=\"text-uppercase fw-bold mb-4\">Contact</h6>
        <p><i class=\"fas fa-home me-3\"></i> 626 Janggok-ro, Euijeongbu, Gyeonggi-do, South Korea</p>
        <p><i class=\"fas fa-envelope me-3\"></i>jeyjeyintl@gmail.com</p>
        <p><i class=\"fas fa-phone me-3\"></i> 031-928-5666</p>
      </div>
    </div>
  </div>
</section>
<div class=\"text-center p-4\" style=\"background-color: rgba(0, 0, 0, 0.05);\">
  © ${new Date().getFullYear()} Copyright:
  <a class=\"text-reset fw-bold\" href=\"index.html\">JJ International Korea</a>
</div>`;