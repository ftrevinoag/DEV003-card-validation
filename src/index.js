import validator from './validator.js';
const cCard = document.getElementById("cCard"),
  forms = document.getElementById("forms"),
  modal = document.getElementById("myModal");

cCard .addEventListener("click", () =>{
  if(cCard .classList.contains('active')){
    cCard.classList.remove('active');} 
  else {
    cCard .classList.add('active');
  }
})


for(let i = 1; i<= 12; i++){
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  forms.selectMonth.appendChild(opcion);
}

const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  forms.selectYear.appendChild(opcion);
}

function loadModal(){
  modal.style.display = "block";
}

document.getElementById("close").addEventListener("click", () =>{
  modal.style.display = "none";
} )

document.getElementById("button").addEventListener("click", takecCardNumber);

function takecCardNumber() {
  const cCardNumber = document.getElementById("inputNumber").value;
  const cCardName = document.getElementById("inputName").value;
  if (cCardNumber === "") {
    loadModal();
  } else {
    const valid = validator.isValid(cCardNumber);
    if(valid){
      const mask = validator.maskify(cCardNumber);
      document.getElementById("number").innerHTML = mask;
      document.getElementById("firms").innerHTML = cCardName;
    } else {
      loadModal();
    }
  }
}
