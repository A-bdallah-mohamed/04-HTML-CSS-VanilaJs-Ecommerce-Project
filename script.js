
document.addEventListener('DOMContentLoaded', function () {
  // Get the moving photo element
  var movingPhoto = document.getElementById('pic1');

  // Listen for scroll events
  window.addEventListener('scroll', function () {
      // Get the current scroll position
      var scrollPosition = window.scrollY || window.pageYOffset;

      // Calculate the vertical movement based on the scroll position
      var verticalMovement = Math.min(scrollPosition, 75); // Limit the movement to 200 pixels

      // Apply the vertical movement to the photo
      movingPhoto.style.transform = 'translateY(-' + verticalMovement + 'px)';
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Get the moving photo element
  var movingPhoto = document.getElementById('pic2');

  // Listen for scroll events
  window.addEventListener('scroll', function () {
      // Get the current scroll position
      var scrollPosition = window.scrollY || window.pageYOffset;

      // Calculate the vertical movement based on the scroll position
      var verticalMovement = Math.min(scrollPosition, 50); // Limit the movement to 200 pixels

      // Apply the vertical movement to the photo
      movingPhoto.style.transform = 'translateY(-' + verticalMovement + 'px)';
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Get the moving photo element
  var movingPhoto = document.getElementById('pic3');

  // Listen for scroll events
  window.addEventListener('scroll', function () {
      // Get the current scroll position
      var scrollPosition = window.scrollY || window.pageYOffset;

      // Calculate the vertical movement based on the scroll position
      var verticalMovement = Math.min(scrollPosition, 100); // Limit the movement to 200 pixels

      // Apply the vertical movement to the photo
      movingPhoto.style.transform = 'translateY(-' + verticalMovement + 'px)';
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Get the moving photo element
  var movingPhoto = document.getElementById('pic4');


  window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY || window.pageYOffset;
      var verticalMovement = Math.min(scrollPosition, 50); 
      movingPhoto.style.transform = 'translateY(-' + verticalMovement + 'px)';
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var movingPhoto = document.getElementById('pic5');
  var secondSection = document.getElementById('About-Us');
  var scrollThreshold = secondSection.offsetHeight * 0.5;
  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var startOffset = secondSection.offsetTop;
    var verticalMovement = Math.max(0, Math.min(50, scrollPosition - startOffset));
   
    movingPhoto.style.transform = 'translateY(-' + verticalMovement + 'px)';
   
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var movingPhoto = document.getElementById('pic4');

  

  var secondSection = document.getElementById('About-Us');
  var scrollThreshold = secondSection.offsetHeight * 0.5;
  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Calculate the vertical movement based on the scroll position
    var startOffset = secondSection.offsetTop;
    var verticalMovement = Math.max(0, Math.min(50, scrollPosition - startOffset)); // Limit the movement to 50 pixels

    // Apply the vertical movement to the photo
    movingPhoto.style.transform = 'translateY(-' + verticalMovement + 'px)';
  });
});


function changeQuantity(amount, displayId) {
  var quantityDisplay = document.getElementById(displayId);
  var currentQuantity = parseInt(quantityDisplay.innerText);

  // Calculate the new quantity by adding the provided amount
  var newQuantity = currentQuantity + amount;

  // Ensure that the new quantity is within the allowed range [1, 9]
  newQuantity = Math.min(9, Math.max(1, newQuantity));

  // Update the displayed quantity with the new value
  quantityDisplay.innerText = newQuantity;
}


// Function to handle "Add to Cart" button click


  document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav");

    burgerButton.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const openButtons = document.querySelectorAll(".add-to-cart-btn");  
    const popup = document.querySelector(".popup");
    const closeButton = document.getElementById("closePopupButton");
  const productspan = document.getElementById("product");
  let name;
  function updateproductspan (){
    productspan.textContent = name ;
  }
    openButtons.forEach(function(button) {  // Fixed syntax error here
      button.addEventListener("click",function() {
        name = button.dataset.name;
        updateproductspan();
        popup.style.display = "block";
       
        popup.style.opacity = 1;
        setTimeout(() => {
          
        }, 300);
      });
      
    });
  
    closeButton.addEventListener("click", function() {
      popup.style.opacity = 0;
      setTimeout(() => {
        popup.style.display = "none";
      }, 300);
    });
  });
  

  function changeQuantity(change, displayId) {
    const quantityDisplay = document.getElementById(displayId);
    let currentQuantity = parseInt(quantityDisplay.textContent);
    currentQuantity = Math.max(currentQuantity + change, 0);
    quantityDisplay.textContent = currentQuantity;

  
    const addToCartButton = quantityDisplay.closest('.add-to-cart-btn');
    addToCartButton.dataset.quantity = currentQuantity;
}

function addToCart(event) {
  const addToCartButton = event.currentTarget;
  const quantityDisplay = addToCartButton.parentElement.querySelector('.quantity-display');
  const price = addToCartButton.dataset.price;
  const name = addToCartButton.dataset.name;
  const img = addToCartButton.dataset.img; 
  const quantity = quantityDisplay.textContent;
  const totalPrice = parseFloat(price) * parseInt(quantity);
  
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
  <td><img src=${img} style="width: 100px;"></td>
      <td>${name}</td>
      <td>${price}</td>
      <td>${quantity}</td>
      <td style="text-align: left;">${totalPrice.toFixed(2)}$</td>
      <td><a class="delprdct" onclick="deleteRow(this)"><i id="fasoliddel" class="fa-solid fa-x"></i><a></td>
  `;

  
  document.querySelector('#cartTable tbody').appendChild(newRow);
  
  displaydatatable();
  subb();
  displaydatatable()
}
function deleteRow(button) {

  const row = button.closest('tr');


  row.remove();
  displaydatatable();
  subb();
  displaydatatable()
}

function subb (){
  var table = document.getElementById('cartTable');
var subtotal = 0;
for (var i = 1; i<table.rows.length; i++){
  var price = parseFloat(table.rows[i].cells[4].textContent)
  subtotal += price;
}
subtotal = subtotal.toFixed(2);
var dis = document.getElementById('subno');
  dis.innerHTML = `${subtotal}$`;
  var diss = document.getElementById('vvv');
  diss.innerHTML = `${subtotal}$`;
}



function changeQuantity(change, displayId) {
    const quantityDisplay = document.getElementById(displayId);
    let quantity = parseInt(quantityDisplay.textContent) + change;

    // Ensure quantity is not less than 1
    quantity = Math.max(1, quantity);

    quantityDisplay.textContent = quantity;
}


document.addEventListener("DOMContentLoaded", function() {
  const openButton = document.getElementById("innerButton");  // Corrected selector
  const cartcontainer = document.getElementById("tablecontainer"); //a7a
  const closeto = document.getElementById("closecartbtn");
  const popupcheckouttttt = document.getElementById("popupcheckout");

  openButton.addEventListener("click", function() {
    cartcontainer.style.display = "block";
    void cartcontainer.offsetWidth;
    cartcontainer.style.opacity = 1;
    setTimeout(() => {
     
    }, 300);
  });

  closeto.addEventListener("click", function() {
    cartcontainer.style.opacity = 0;
    setTimeout(() => {
      cartcontainer.style.display = "none";
    }, 300);
    popupcheckouttttt.style.opacity = 0;
    setTimeout(() => {
      popupcheckouttttt.style.display = "none";
    }, 300);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const openButton = document.getElementById("btnnn");  
  const bookcontainer = document.getElementById("bookingg");
  const closetoo = document.getElementById("closebookbtn");
  const bookpopupp = document.getElementById('bookcheckout');

  openButton.addEventListener("click", function() {
    bookcontainer.style.display = "block";
    void bookcontainer.offsetWidth;
    bookcontainer.style.opacity = 1;
    setTimeout(() => {
     
    }, 300);
  });

  closetoo.addEventListener("click", function() {
    bookcontainer.style.opacity = 0;
    setTimeout(() => {
      bookcontainer.style.display = "none";
    }, 300);
    bookpopupp.style.opacity = 0;
    setTimeout(() => {
      bookpopupp.style.display = "none";
    }, 300);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const openButtonss = document.getElementById("procceedforcartt");  
  const popupcheckoutttt = document.getElementById("popupcheckout");
  const closeButtonn = document.getElementById("closecartbtnn");

  openButtonss.addEventListener("click", function() {
    popupcheckoutttt.style.display = "block";
    popupcheckoutttt.style.opacity = 1;
      setTimeout(() => {
         
      }, 300);
  });

  closeButtonn.addEventListener("click", function() {
    popupcheckoutttt.style.opacity = 0;
      setTimeout(() => {
        popupcheckoutttt.style.display = "none";
      }, 300);
  });
});

function displaydatatable(){
  var table = document.getElementById('cartTable');
  var displayeddata = '';
  var displayeddataa = '';
  for (var i=1; i <table.rows.length; i++){
    var productName = table.rows[i].cells[1].textContent;
    var productquantity = table.rows[i].cells[3].textContent;
    var productprice = table.rows[i].cells[4].textContent;
   
    displayeddata += `${productquantity} X ${productName}\n`;
    displayeddataa += `${productprice}\n`;
   

  }
  var displayedDataDiv = document.getElementById('ppp');
  displayedDataDiv.innerHTML = displayeddata;
  var displayedDataDiv = document.getElementById('aaa');
  displayedDataDiv.innerHTML = displayeddata;
  var displayedDataDiv = document.getElementById('ccc');
  displayedDataDiv.innerHTML = displayeddataa;
  var displayedDataDiv = document.getElementById('bbb');
  displayedDataDiv.innerHTML = displayeddataa;
}

// Get the select element
const daySelect = document.getElementById('dayselector');

// Populate the select with numbers from 1 to 31
for (let i = 0; i <= 31; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.text = i;
  daySelect.add(option);
}
const monthSelect = document.getElementById('monthselector');

// Populate the select with numbers from 1 to 31
for (let i = 0; i <= 12; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.text = i;
  monthSelect.add(option);
}
const peopleselector = document.getElementById('peoplecountselector');

// Populate the select with numbers from 1 to 31
for (let i = 0; i <= 9; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.text = i;
  peopleselector.add(option);
}
const hoursselector = document.querySelectorAll('.hours');

// Populate the select with numbers from 1 to 31
hoursselector.forEach((hoursselector) => {

for (let i = 0; i <= 12; i++) {
  const option = document.createElement('option');
  const formattedValuee = i < 10 ? `0${i}` : i;
  option.value = formattedValuee;
  option.text = formattedValuee;
  hoursselector.add(option);
}
});
const minsselectors = document.querySelectorAll('.mins');

minsselectors.forEach((minsselectors) => {
  // Populate each select with numbers from 0 to 59
  for (let i = 0; i <= 59; i++) {
    const option = document.createElement('option');
    const formattedValue = i < 10 ? `0${i}` : i;
    option.value = formattedValue;
    option.text = formattedValue;
    minsselectors.add(option);
  }
});
var submit = document.getElementById('bebe');
submit.addEventListener('click' , function() {
var inputname = document.getElementById('name').value;
var inputemail = document.getElementById('email').value;
var inputphone = document.getElementById('Phone').value;
var isphonetrue = (inputphone.trim() !== '' && !/[a-zA-Z]/.test(inputphone));
var isNameTrue = (inputname.trim() !== '' && !/\d/.test(inputname));
var isemailtrue = (inputemail.trim() !== '');
var nerror = document.getElementById('nameerror');
var eerror = document.getElementById('emailerror');
var perror = document.getElementById('phoneerror');
const bookpopup = document.getElementById('bookcheckout');
const closebookpopup = document.getElementById('closebookpopupbtn');
var namecontainer = document.getElementById('namedet');
var nametwocontainer = document.getElementById('namedett');
var dayselected = document.getElementById('dayselector').value; // day selector value
var isdaytrue = (dayselected !== '0');
var dayerror = document.getElementById('dayerror'); // day error
var monthselected = document.getElementById('monthselector').value; // month selector value
var ismonthtrue = (monthselected !== '0');
var montherror = document.getElementById('montherror'); //month error
var starthoursselected = document.getElementById('hoursselector').value; // start hours selector value
var isstarthourstrue = (starthoursselected !== '00');
var startminsselected = document.getElementById('minsselector').value; // start mins selector value
var isstartminsstrue = (startminsselected !== '00');
var startampmselected = document.getElementById('ampmselector').value;// start ampm selector value
var isstartampmstrue = (startampmselected !== '--');
var starterror = document.getElementById('starterror'); //start error
var endhoursselected = document.getElementById('endhoursselector').value; // end hours selector value
var isendhoursstrue = (endhoursselected !== '00');
var endminsselected = document.getElementById('endminsselector').value; // end mins selector value
var isendminsstrue = (endminsselected !== '00');
var endampmselected = document.getElementById('endampmselector').value;// end ampm selector value
var isendampmstrue = (endampmselected !== '--');
var enderror = document.getElementById('enderror'); //end error
var peopleselectedcount = document.getElementById('peoplecountselector').value; // people selector value
var ispeopletrue = (peopleselectedcount !== '0');
var peopleerror = document.getElementById('peopleerrorrr'); //people error
var peoplecontainer = document.getElementById('nopeopledet');
var startcontainer = document.getElementById('starttimedet');
var endcontainer = document.getElementById('endtimedet');
var datedetail = document.getElementById('datedet');
function removeerror (error){
  error.style.display = "none";
  void error.offsetWidth;
  error.style.opacity = 0;
  setTimeout(() => {
 
  }, 300);

}

 function displaydatacheckout(container,realdata){
container.textContent = realdata;
 }
function displaytime(hours,mins,ampm,container){
  container.textContent = hours + ':' + mins + ' ' + ampm ;
}
function displaydate (day,month,container){
  container.textContent = day + "/" + month;
}
    console.log('checking');
    if (isNameTrue && isphonetrue && isemailtrue && ispeopletrue && isdaytrue && ismonthtrue && isstarthourstrue && 
      isstartminsstrue && 
      isstartampmstrue && 
      isendhoursstrue && 
      isendminsstrue && 
      isendampmstrue) {
      console.log('true data');
     
      removeerror (nerror);
      removeerror (eerror);
      removeerror (perror);
      function appearpopup (){

        bookpopup.style.display = "block";
        void bookpopup.offsetWidth;
        bookpopup.style.opacity = 1;
        setTimeout(() => {
       
        }, 300);
      
      closebookpopup.addEventListener("click" , function(){
        bookpopup.style.opacity = 0;
        setTimeout(() => {
          bookpopup.style.display = "none";
        }, 300);
      });
      };
      displaydatacheckout(namecontainer,inputname);
      displaydatacheckout(nametwocontainer,inputname);
      displaydatacheckout(nopeopledet,peopleselectedcount);
      displaytime(starthoursselected,startminsselected,startampmselected,startcontainer);
      displaytime(endhoursselected,endminsselected,endampmselected,endcontainer);
      displaydate (dayselected,monthselected,datedetail);
      appearpopup ()
      } 
      if (!ispeopletrue){                          // is people true done
        console.log("people not selected");
        function appearerrorname(){
          peopleerror.style.display = "inline";
          void peopleerror.offsetWidth;
          peopleerror.style.opacity = 1;
          setTimeout(() => {
         
          }, 300);
        }
        appearerrorname()
      }
        else if(ispeopletrue){
          console.log("people selected");
          removeerror (peopleerror);
        }
      if (!isendhoursstrue ||                   // is end true done
        !isendminsstrue || 
        !isendampmstrue){                   
        console.log("end not selected");
        function appearerrorname(){
          enderror.style.display = "inline";
          void enderror.offsetWidth;
          enderror.style.opacity = 1;
          setTimeout(() => {
         
          }, 300);
        }
        appearerrorname()
      }
        else if(isendhoursstrue  &&
          isendminsstrue &&
          isendampmstrue){
          console.log("end selected");
          removeerror (enderror);
        }
      if (!isstarthourstrue ||                    //is start true done
        !isstartminsstrue || 
        !isstartampmstrue){                   
        console.log("start not selected");
        function appearerrorname(){
          starterror.style.display = "inline";
          void starterror.offsetWidth;
          starterror.style.opacity = 1;
          setTimeout(() => {
         
          }, 300);
        }
        appearerrorname()
      }
        else if(isstarthourstrue  &&
          isstartminsstrue &&
          isstartampmstrue){
          console.log("start selected");
          removeerror (starterror);
        }
      if (!ismonthtrue){                      //is month true done
        console.log("month not selected");
        function appearerrorname(){
          montherror.style.display = "inline";
          void montherror.offsetWidth;
          montherror.style.opacity = 1;
          setTimeout(() => {
         
          }, 300);
        }
        appearerrorname()
      }
        else if(ismonthtrue){
          console.log("month selected");
          removeerror (montherror);
        }
      if (!isdaytrue){                        // is day true done
        console.log("day not selected");
        function appearerrorname(){
          dayerror.style.display = "inline";
          void dayerror.offsetWidth;
          dayerror.style.opacity = 1;
          setTimeout(() => {
         
          }, 300);
        }
        appearerrorname()
      }
        else if(isdaytrue){
          console.log("day selected");
          removeerror (dayerror);
        }
     
      if (!isNameTrue){ // name error validation
        console.log("name wrong");
        function appearerrorname(){
          nerror.style.display = "inline";
          void nerror.offsetWidth;
          nerror.style.opacity = 1;
          setTimeout(() => {
         
          }, 300);
        }
        appearerrorname()
      }
      else if (isNameTrue) {
        console.log("right name")
        removeerror (nerror);
      }
      if (!isemailtrue){ // email error validation
        console.log("email wrong");
        function appearerrorname(){
          eerror.style.display = "inline";
          void eerror.offsetWidth;
          eerror.style.opacity = 1;
          setTimeout(() => {
         
          }, 300);
        }
        appearerrorname()
      }
      else if (isemailtrue) {
        console.log("right email")
        removeerror (eerror);
      }
      if (!isphonetrue){    // phone error validation
        console.log("phone wrong");
        function appearerrorname(){
          perror.style.display = "inline";
          void perror.offsetWidth;
          perror.style.opacity = 1;
          setTimeout(() => {
         
          }, 300);
        }
        appearerrorname()
      }
      else if (isphonetrue) {
        console.log("right phone")
        removeerror (perror);
      }
 });
  
  





