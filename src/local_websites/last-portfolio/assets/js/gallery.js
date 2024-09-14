// const dataLink = "datas/data.json";

// fetch(dataLink)
//   .then((res) => res.json())
//   .then((datas) => {
//     const sortedData = datas.sort((a, b) => a.id - b.id);

//     // Récupérer le conteneur du Swiper
//     const container = document.getElementById("portfolio-container");

//     // Ajouter dynamiquement les slides
//     sortedData.forEach((item) => {
//       const slide = document.createElement("div");
//       slide.classList.add("swiper-slide");

//       slide.innerHTML = `
//     <div class="card_portfolio">
//       <div class="black_filter"></div>
//       <img src="${item.imgUrl}" alt="${item.name}">
//       <div class="card_portfolio_container">
//         <h4 class="card_portfolio_title" data-aos="fade-left" data-aos-duration="600">${
//           item.name
//         }</h4>
//         <p class="card_portfolio_typesite" data-aos="fade-left" data-aos-duration="800">${
//           item.typesite
//         }</p>
//         <p class="card_portfolio_description" data-aos="fade-left" data-aos-duration="900">${item.description.substr(
//           0,
//           80
//         )}</p>
//         <a href="${
//           item.url
//         }" target="_blank" class="card_portfolio_button" data-aos="fade-left" data-aos-duration="1000">Découvrir ce site</a>
//       </div>
//     </div>
//   `;

//       container.appendChild(slide);
//     });
//   })
//   .catch((e) => {
//     e = "Error";
//   });
