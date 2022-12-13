const services =[ {
  // takes details from the only selling item
  id:1,
  name:"Initial Service",
  image:"img/product-1.png",
  price:"1,500.00"
},
];

/* eslint-disable */
function add(id){
  // this function finds and returns the details from the only selling item and throws this information in 'checkout.html'
  const servicesSelected = services.find(function(service) { return service.id === id });
  localStorage.setItem('service', JSON.stringify(servicesSelected));
  window.location = "checkout.html";
}
 /* eslint-enable */

/* eslint-disable */
function charge(){
  // this function adds the details from the only selling item 
  let service = localStorage.getItem('service');
  service = JSON.parse(service);
  document.getElementById("name").innerText = service.name
  document.getElementById("price").innerText = service.price
  document.getElementById("image").src = 'img/product-1.png'
  // console.log(service);
}
 /* eslint-enable */
 