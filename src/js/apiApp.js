//** ===== Photos API === */

const allPhotos = async () => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=london&client_id=68wlXxaMmNtUzrADXqGtupAgDMr3IQEtkb9lPwWhETY`
    );
    //console.log(response);
    // Si la respuesta es correcta

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);

      let photography = " ";

      data.results.forEach((photo) => {
        photography += `  
           
           <div class=" photos">
               <img class="posterPhoto"  src="" >
           </div>
        `;
      });

      document.querySelector("#container").innerHTML = photography;
    } else {
      console.log("Hubo un erro!");
    }
  } catch (error) {
    console.log(error);
  }
};

//allPhotos();
console.log(allPhotos());
