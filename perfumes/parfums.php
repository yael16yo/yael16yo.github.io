<?php session_start();?>


<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once('assets/metas.php');?>
    <title>Maison Brinkert - Nos parfums</title>
</head>
<body>
    <?php include_once('assets/database.php');?>
    <?php include_once('icon_panier.php');?>
    <?php include_once('assets/navbar.php');?>
    
    
    <main id="tt">
    <p class="erreur-panier"><?php echo $erreur;?></p>
        
    <h1 class="panier-h4">Découvrez toutes nos créations</h1>

    <div class="wrapper_aside_and_items">
        <div class="wrapper_items_parfums col_items" id="productContainer">
                
        </div>
        <aside class="col_filters" id="col_filters">
            <div class="filter_aside" id="filter_aside">
                <p class="title_filter_aside">Filtres</p>
                <div class="container_param_filter">
                    <div class="param_items">
                        <select id="sexeFilter">
                            <option value="">Tous les genres</option>
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                        </select>
                    </div>

                    <hr class="hr_line_params">

                    <div class="param_items except">
                        <input type="range" id="priceRange" min="20" max="200" step="1" value="200">
                        <span id="dynamicContainer"></span>
                    </div>
                    
                    <hr class="hr_line_params">

                    <div class="param_items">
                        <div class="sale_filter_style">
                            <label for="saleFilter">En promotion</label>
                            <div class="checkbox-wrapper-2">
                                <input type="checkbox" id="sale" class="sc-gJwTLC ikxBAC">
                            </div>
                        </div>
                    </div>

                    <hr class="hr_line_params">

                    <div class="param_items">
                        
                    </div>

                </div>
            </div>
        </aside>
    </div>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
    $(document).ready(function() {
        $('#sexeFilter, #priceRange').on('input change', function() {
            filterProducts();
        });
        $('#sale').on('input checked', function() {
            filterProducts();
        });

        function filterProducts() {
            let sexe = $('#sexeFilter').val();
            let priceRange = $('#priceRange').val();
            let sale = $('#saleFilter').is(':checked') ? 1 : 0;
            //$('#priceRangeValue').text(priceRange);

            $.ajax({
                url: 'filter_products.php',
                type: 'GET',
                data: {
                    sexe: sexe,
                    priceRange: priceRange,
                    sale: sale
                },
                success: function(response) {
                    $('#productContainer').html(response);
                }
            });
        }

        filterProducts();
    });
</script>

    <script type="text/javascript">
        let dynamicSpanContainer = document.getElementById('dynamicContainer');
        let dynamicPrice = document.getElementById('priceRange');
        dynamicSpanContainer.innerHTML = `<p>${dynamicPrice.value}€ et plus</p>`;
        
        dynamicPrice.addEventListener("input", function() {
            let valueDynamicPrice = dynamicPrice.value;
            if(valueDynamicPrice >= 200) {
                dynamicSpanContainer.innerHTML = `<p>${dynamicPrice.value}€ et plus</p>`;
            } else {
            dynamicSpanContainer.innerHTML = `<p>${valueDynamicPrice}€</p>`;
            }
        })
    </script>
    <script src="assets/js/filter_bar.js"></script>
    <?php include_once('assets/footer.php');?>
    <?php include_once('assets/header-bottom.php');?>
    <?php include_once('assets/scripts.php');?>
</body>
</html>