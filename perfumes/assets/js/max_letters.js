let maxLettersShow = document.getElementById('maxLetters');
let inputToCount = document.getElementById('perfume_name');

inputToCount.addEventListener('keyup', countNumbers);
function countNumbers() {
    let number = inputToCount.value.length;
    maxLettersShow.innerText = `${number}/20`;
    
    if(inputToCount.value.length == "20") {
        maxLettersShow.classList.add('invalid_max_letters');
    } else {
        maxLettersShow.classList.remove('invalid_max_letters');
    }
}
countNumbers()