function trashCake(cakeId) {
    // remove selected cake from localStorage
    storedCakesData.splice(cakeId, 1);
    localStorage.setItem("cakesData", JSON.stringify(storedCakesData));

    // For development purpose only, set flag to false, to prevent full reload of all cakes
    // sessionStorage.setItem("canReloadAllCakesAgain","false");

    window.location.href = "cakes_cart";
}

const inch8 = 12; // add $12 for 8inch cake choice
const inch10 = 16; // add $16 for 12inch cake choice
var selectedCakeSizeCost = 0.0; // updated cost of cake, depending on chosen cake size
var subTotalCakeCost = 0.0;
var totalCost = 0.0; // customer will pay this final amount, to pass to cakes_cart.html
var gst = 0.0;
var cakePriceConvertToNumber;

// For development purpose only, set flag to false, to prevent full reload of all cakes
// sessionStorage.setItem("canReloadAllCakesAgain","false");

sessionStorage.setItem("totalCost", JSON.stringify(totalCost));
sessionStorage.setItem("gst", JSON.stringify(gst));
let output = "";

// get stored data from in local storage
var storedCakesData = JSON.parse(localStorage.getItem("cakesData"));

var i = 0;

// StoredCakesData can be NULL if no cakes were selected before entering cakes_cart page
if (storedCakesData !== null) {
    for (i = 0; i < storedCakesData.length; i++) {

        // subTotalCakeCost = selectedCakeSizeCost * storedCakesData[i].cakesQuantity;
        // totalCost = totalCost + subTotalCakeCost;
        // sessionStorage.setItem("totalCost",JSON.stringify(totalCost));
        //
        // gst = (totalCost*0.07).toFixed(2);
        // sessionStorage.setItem("gst",JSON.stringify(gst));

        cakePriceConvertToNumber = parseInt(storedCakesData[i].price);

        switch (storedCakesData[i].cakeSize) {
            case "8":
                selectedCakeSizeCost = cakePriceConvertToNumber + inch8;
                break;

            case "10":
                selectedCakeSizeCost = cakePriceConvertToNumber + inch10;
                break;

            default: // 6inch here
                selectedCakeSizeCost = storedCakesData[i].price;
        }
        subTotalCakeCost = selectedCakeSizeCost * storedCakesData[i].cakesQuantity;
        totalCost = totalCost + subTotalCakeCost;
        sessionStorage.setItem("totalCost", JSON.stringify(totalCost));

        gst = (totalCost * 0.07).toFixed(2);
        sessionStorage.setItem("gst", JSON.stringify(gst));
        output +=
            `
 <div class="container-fluid bg-white row_cart" style="width:100%; padding-left: 30px;">
    <form action="#" id="edit-cart${i}" method="post" enctype="multipart/form-data">
    <div class="row mb-3" style="width:100%;">
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-sm-6 col-md-3 mb-2 cartSmallScreenImage">
            <img src="${storedCakesData[i].imageUrl}"
                alt="${storedCakesData[i].productName}"
                class="rounded img-fluid d-block mx-auto" style="border:2px solid black;">
          </div>
          <div class="cart_product_font col-sm-6 col-md-8 mb-2 text-center">
          ${storedCakesData[i].productName}, ${storedCakesData[i].cakeSize} inch, 
          with ${storedCakesData[i].candles} candle(s)</div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="cart_productprice_font col-sm-3 text-left mb-2">
            $${selectedCakeSizeCost}  </div> 
          <div class="col-sm-3 text-left mb-2">
            ${storedCakesData[i].cakesQuantity} Qty
          </div>
          <div class="cart_totalproductprice_font col-sm-4 text-left mb-2">$${subTotalCakeCost}</div>
          <div class="col-sm-2 text-right mb-2">
            <button type="button" class="btn btn-danger" onclick="trashCake(${i})"><i
                class="fa fa-trash"></i></button>
          </div>
        </div>
      </div>
    </div> 
     </div>
        </div>
      </div>
    </div> 
    `
        document.getElementById("cart").innerHTML = output;
    }
} else alert("Cart is empty.");
// --------------------------------------------------------------
// pass totalCost & gst to cakes_cart.html File, via localstorage

document.getElementById("overallSubTotalCost").innerHTML = `$${totalCost}`;
document.getElementById("gstHere").innerHTML = `$${gst}`;
document.getElementById("overallTotalCost").innerHTML = `$${totalCost}`;

// if (totalCost !== 0) {
//     document.getElementById("noMoneyNoHoney").style.display = "block";
// } else {
//     document.getElementById("noMoneyNoHoney").style.display = "none";
// }
document.getElementById("noMoneyNoHoney").innerHTML = `
<div class="text-center"><a href="/checkout/${totalCost}" class="checkout_btn btn btn-warning btn-block">Checkout</a></div>`


