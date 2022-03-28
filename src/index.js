//** == ========== ========= Call API == ======= ========*/
//** Usamos Promesas = Promise */
//**===== Variables  */
const apiBtn = document.querySelector("#apiBtn");
//console.log(apiBtn);
const dataAPI = document.querySelector("#dataAPI");
console.log(dataAPI);

//**=== === Events  and Functions =*/
const addApi = () => {
  //onsole.log("API Llamando!");

  fetch("https://pokeapi.co/api/v2/")
    .then((res) => res.json())
    .then((data) => {
      dataAPI.innerText = JSON.stringify(data);
    })
    .catch((err) => console.error(new Error(err)));
};

apiBtn.addEventListener("click", addApi);
