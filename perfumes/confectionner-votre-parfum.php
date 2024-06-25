<?php
session_start();
include_once('assets/database.php');
?>


<!DOCTYPE html>
<html lang="fr">
<head>
    <?php //include_once('assets/metas.php');?>
    <title>Maison Brinkert - Nos parfums</title>
    <link rel="stylesheet" href="assets/app_build_perfume.css">
</head>
<body>
    <style>
        :root {
            --first-color: #2c2c2c;
            --second-color: #111111;
            --white-color: #eae5e7;
        }

        body.dark-theme {
            --first-color: #ffffff;
            --second-color: #eae5e7;
            --white-color: #2c2c2c;
        }
    </style>
    
        <div class="main__wrapper">
            <div class="main__wrapper-nav">
                <a href="#" class="main__wrapper-nav__link"></a>
                <a href="#" class="main__wrapper-nav__link amsterdam"></a>
                <label for="themeToggle">
                    <span id="themeLabel"></span>
                </label>
                <input type="checkbox" id="themeToggle">
            </div>

            <div class="main__wrapper__container">
                <h1 class="main__wrapper__container__title"></h1>
                <form action="" id="userChoices">
                    <div class="tab capacity_wrapper">
                        <div>
                            <h2 class="userChoices__title uc_title1"></h2>
                        </div>
                        <div class="capacity_container">
                            <input type="radio" name="capacity" value="30" id="capacity_30" checked>
                            <label for="capacity_30">30ml <span>≈ 1oz</span></label>
                            <input type="radio" name="capacity" value="50" id="capacity_50">
                            <label for="capacity_50">50ml <span>≈ 1,7oz</span></label>
                            <input type="radio" name="capacity" value="100" id="capacity_100">
                            <label for="capacity_100">100ml <span>≈ 3,38oz</span></label>
                        </div>
                    </div>

                    <div class="tab">
                        <div>
                            <h2 class="userChoices__title uc_title2"></h2>
                        </div>
                        <div class="input_perfume_name"> 
                            <input type="text" name="perfume_name" id="perfume_name" maxlength="20">
                            <span id="maxLetters"></span>
                        </div>
                    </div>

                    <div class="tab">
                        
                    </div>

                    <div class="tab">

                    </div>

                    <div class="tab">

                    </div>
                    
                    <div class="steps_container">
                        <div class="steps">
                            <span class="step"></span>
                            <span class="step"></span>
                            <span class="step"></span>
                            <span class="step"></span>
                            <span class="step"></span>
                        </div>
                        <div>
                            <button type="button" id="prevBtn" onclick="nextPrev(-1)"><i class="fa fa-arrow-left"></i></button>
                            <button type="button" id="nextBtn" onclick="nextPrev(1)"></button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="main__wrapper__language">
                <form action="" class="languageStyle">
                    <select name="language" id="language">
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                    </select>
                    <div class="countrySelected" id="countryFlag"></div>
                </form>
            </div>
        </div>
    
    <script>
        console.log('██████████████████████████████████████████████████████');
    </script>
    <script src="assets/js/max_letters.js"></script>
    <script src="assets/js/app_build.js"></script>
    <script src="assets/js/tabs_userchoices.js"></script>
    <?php include_once('assets/scripts.php');?>
</body>
</html>