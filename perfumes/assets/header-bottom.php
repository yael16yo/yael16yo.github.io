<header class="header-bottom fixed-bottom" id="header-bottom">
    <!--<span class="first-span">יעל</span>-->
    <span class="first-span">Maison Brinkert</span>
    <span class="middle-span"></span>
    <?php if(isset($_SESSION['loggedin'])){
        ?>
        <span class="last-span"><a href="./logout.php"><img src="assets/img/icon-logout.svg" width="16" alt=""></a><a href="./profile.php"><img src="assets/img/icon-user.png"
                width="23" alt=""></a></span>
        <?php
            } else {
                ?>
        <span class="last-span"><a href="register.php"><img src="assets/img/icon-register.png" width="23" alt=""></a><a href="login.php"><img src="assets/img/icon-login.svg" width="18" alt=""></a></span>
                <?php
            }
        ?>
</header>