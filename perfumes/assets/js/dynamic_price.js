let dynamicSpanContainer = document.getElementById('dynamicContainer');
let dynamicPrice = document.getElementById('priceRange');

dynamicPrice.addEventListener("input", function() {
    let valueDynamicPrice = dynamicPrice.value;
    dynamicSpanContainer.innerHTML = `<p>${valueDynamicPrice}</p>`;
})