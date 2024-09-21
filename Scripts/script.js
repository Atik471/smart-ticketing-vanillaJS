let selectedSeats = [];

seats = document.querySelectorAll(".seat-list button");
seatNumber = document.getElementById("seat-numbers");

seatList = document.getElementById("seat-list");
seatInfo = document.querySelector(".seat-info");

let couponCode = "";

document
  .getElementById("coupon-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    couponCode = document.getElementById("coupon-code").value;
    if (couponCode === "NEW15") {
      document.getElementById("grand-amount").innerHTML =
        550 * selectedSeats.length * 0.85;
      document.getElementById("discount-amount").innerHTML =
        550 * selectedSeats.length * 0.15;
      document.getElementById("coupon-form").classList.add("hidden");
      document.getElementById("discount-info").classList.remove("hidden");
      document.getElementById("discount-info").classList.add("flex");
      for (seat of seats) {
        seat.disabled = true;
      }
    } else if (couponCode === "Couple20") {
      document.getElementById("grand-amount").innerHTML =
        550 * selectedSeats.length * 0.8;
      document.getElementById("discount-amount").innerHTML =
        550 * selectedSeats.length * 0.2;
      document.getElementById("coupon-form").classList.add("hidden");
      document.getElementById("discount-info").classList.remove("hidden");
      document.getElementById("discount-info").classList.add("flex");
      for (seat of seats) {
        seat.disabled = true;
      }
    } else {
      alert("Not a valid coupon code!");
    }
  });

for (let seat of seats) {
  seat.addEventListener("click", function (event) {
    if (selectedSeats.length == 4 && !selectedSeats.includes(event.target)) {
      alert("You can select 4 seats maximum!");
    } else if (seat.classList.contains("bg-custom-light-grey")) {
      seat.classList.remove("bg-custom-light-grey", "hover:bg-custom-grey-2");
      seat.classList.add(
        "bg-custom-green",
        "hover:bg-custom-green",
        "text-white"
      );
      selectedSeats.push(event.target);
      seatNumber.innerHTML = selectedSeats.length;

      let newSeat = document.createElement("div");
      newSeat.classList.add(...seatInfo.classList);
      newSeat.innerHTML = seatInfo.innerHTML;
      newSeat.firstElementChild.innerHTML = event.target.innerHTML;
      newSeat.classList.remove("hidden");
      newSeat.classList.add("flex");
      seatList.appendChild(newSeat);
    } else {
      seat.classList.remove(
        "bg-custom-green",
        "hover:bg-custom-green",
        "text-white"
      );
      seat.classList.add("bg-custom-light-grey", "hover:bg-custom-grey-2");
      selectedSeats = selectedSeats.filter((item) => item !== event.target);
      seatNumber.innerHTML = selectedSeats.length;

      infoItems = document.querySelectorAll(".seat-info");

      for (infoItem of infoItems) {
        if (infoItem.firstElementChild.innerHTML === event.target.innerHTML) {
          seatList.removeChild(infoItem);
          break;
        }
      }
    }

    document.getElementById("total-amount").innerHTML =
      550 * selectedSeats.length;
    document.getElementById("grand-amount").innerHTML =
      550 * selectedSeats.length;
    if (couponCode === "NEW15") {
      document.getElementById("grand-amount").innerHTML =
        550 * selectedSeats.length * 0.85;
    } else if (couponCode === "Couple20") {
      document.getElementById("grand-amount").innerHTML =
        550 * selectedSeats.length * 0.8;
    }

    document.getElementById("seats-left").innerHTML = 40 - selectedSeats.length;

    if (selectedSeats.length === 4) {
      document.getElementById("coupon-code").disabled = false;
      document.getElementById("coupon-btn").disabled = false;
      document
        .getElementById("coupon-btn")
        .classList.remove("bg-custom-grey-2", "text-custom-grey");
      document
        .getElementById("coupon-btn")
        .classList.add("bg-custom-green", "text-white");
    } else {
      document.getElementById("coupon-code").disabled = true;
      document.getElementById("coupon-btn").disabled = true;
      document
        .getElementById("coupon-btn")
        .classList.remove("bg-custom-green", "text-white");
      document
        .getElementById("coupon-btn")
        .classList.add("bg-custom-grey-2", "text-custom-grey");
    }
  });
}

passengerName = document.getElementById("passenger-name");
phoneNumber = document.getElementById("phone-number");

function passForm(event){ 
  if (
      phoneNumber.value.length >= 11 &&
      passengerName.value.length > 0 &&
      !isNaN(Number(phoneNumber.value)) &&
      selectedSeats.length > 0
    )
    {
      document.getElementById("passenger-form").disabled = false;
      document
        .getElementById("passenger-form")
        .classList.remove("bg-custom-grey-2", "text-custom-grey");
      document
        .getElementById("passenger-form")
        .classList.add("bg-custom-green", "text-white");
    }
    else{
        document.getElementById("passenger-form").disabled = true;
      document
        .getElementById("passenger-form")
        .classList.remove("bg-custom-green", "text-white");
      document
        .getElementById("passenger-form")
        .classList.add("bg-custom-grey-2", "text-custom-grey");
    }
}

phoneNumber.addEventListener('input', passForm)
passengerName.addEventListener('input', passForm)
for(seat of seats){seat.addEventListener('click', passForm)}

modal = document.getElementById("modal")

passengerForm = document.getElementById("passenger-form")
passengerForm.addEventListener('click', function(event){
  event.preventDefault()
  modal.classList.remove("hidden")
  modal.classList.add("flex")
})

modal.addEventListener('click', function(){
  modal.classList.add("hidden")
  modal.classList.remove("flex")
  location.reload();
})
