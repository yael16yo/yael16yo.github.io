<footer id="contact">
<div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-11 col-lg-11 col-md-11 col-11 text-center">
            <div class="">
                <h5 class="text-center mb-4">Vous avez une question?</h5>
                <form class="form-card" onsubmit="event.preventDefault()">
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label">Prénom<span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Entrez votre prénom" onblur="validate(1)"> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label">Nom<span class="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Entrez votre nom de famille" onblur="validate(2)"> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label">E-mail<span class="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="Entrez votre email" onblur="validate(3)"> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label">Sujet</label> <input type="text" id="sujet" name="sujet" placeholder="Ex : proposition de mécénat" onblur="validate(4)"> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label">Message<span class="text-danger"> *</span></label> <textarea id="message" name="message" placeholder="Entrez votre message ici" onblur="validate(6)"></textarea> </div>
                    </div>
                    <div class="row">
                        <div class="form-group"> <button type="submit" class="button-for-last-creation-basket">Envoyer <i class="fa fa-truck-fast"></i></button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="copyrights">
    <p>Maison BRINKERT - Tous droits réservés © 2024 - Made with ❤️ by <a href="https://yaelou.fr/index.php" target="_blank">yaelou</a></p>
</div>
</footer>