<nav class="navbar bg-body-white fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">L'élixir des moments précieux</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <i class="fa fa-bars-staggered"></i>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Où voulez-vous aller?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.php">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.php#story">Maison Brinkert - L'Histoire</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.php#last">Dernière édition</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="processus-de-creation.php">Notre processus de création</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="composition-des-parfums.php">Composition des parfums</a>
          </li>
          <div class="dropdown">
            <button class="dropdown-toggle parfum_navbar_dropdown" type="button" data-bs-toggle="dropdown">
              Tous nos parfums <i class="fa fa-chevron-down" style="font-size:12px;"></i>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="parfums.php?sexe=homme">Parfums Homme</a></li>
              <li><a class="dropdown-item" href="parfums.php?sexe=femme">Parfums Femme</a></li>
              <li><a class="dropdown-item" href="parfums.php?edition=collector">Editions Collector</a></li>
            </ul>
          </div>
          <li class="nav-item">
            <a class="nav-link" href="confectionner-votre-parfum.php">Confectionner votre parfum</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Nous contacter</a>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control" type="search" placeholder="Rechercher" aria-label="Search">
          <button class="btn" type="submit"><i class="fa fa-magnifying-glass"></i></button>
        </form>
      </div>
    </div>
  </div>
</nav>