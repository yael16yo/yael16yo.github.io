(function() {
    window.onscroll = function() {
        let header_bottom = document.getElementById("header-bottom");
        if(scrollY > 60) {
            header_bottom.style.display = "block";
        } else {
            header_bottom.style.display = "none";
        }
    }
})();
