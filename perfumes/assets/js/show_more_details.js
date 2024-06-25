const show_more_or_less_text = document.getElementById("show_more_or_less_text");
//show_more_or_less_text.innerText = "Voir plus";
const handleClickViewMore = (element) => {
  if(element.classList.contains("opened")){
    element.classList.remove("opened");
    show_more_or_less_text.innerText = "Voir plus";
  }else{
    element.classList.add("opened");
    show_more_or_less_text.innerText = "Voir moins";
  }
}