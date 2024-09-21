


let selectedSeats = [];

seats = document.querySelectorAll(".seat-list button")
seatNumber = document.getElementById('seat-numbers')

seatList = document.getElementById("seat-list")
seatInfo = document.querySelector(".seat-info")

let couponCode = ''

document.getElementById("coupon-btn").addEventListener('click', function(event){
    event.preventDefault()
    couponCode = document.getElementById("coupon-code").value
    if(couponCode === 'NEW15'){
        document.getElementById("grand-amount").innerHTML = 550 * selectedSeats.length * 0.85
    }
    else if(couponCode === 'Couple20'){
        document.getElementById("grand-amount").innerHTML = 550 * selectedSeats.length * 0.8
    }
    else{
        alert("Not a valid coupon code!")
    }
})


for(let seat of seats){
    seat.addEventListener('click', function(event){ 
        if(selectedSeats.length == 4 && !selectedSeats.includes(event.target)){
            alert('You can select 4 seats maximum!')
        }
        else if (seat.classList.contains("bg-custom-light-grey")) {
            seat.classList.remove("bg-custom-light-grey", "hover:bg-custom-grey-2");
            seat.classList.add("bg-custom-green", "hover:bg-custom-green", "text-white");
            selectedSeats.push(event.target)
            seatNumber.innerHTML = selectedSeats.length

            let newSeat = document.createElement('div')
            newSeat.classList.add(...seatInfo.classList)
            newSeat.innerHTML = seatInfo.innerHTML
            newSeat.firstElementChild.innerHTML = event.target.innerHTML
            newSeat.classList.remove("hidden")
            newSeat.classList.add("flex")
            seatList.appendChild(newSeat)


        } else {
            seat.classList.remove("bg-custom-green", "hover:bg-custom-green", "text-white");
            seat.classList.add("bg-custom-light-grey", "hover:bg-custom-grey-2");
            selectedSeats = selectedSeats.filter(item => item !== event.target);
            seatNumber.innerHTML = selectedSeats.length

            infoItems = document.querySelectorAll(".seat-info")

            for(infoItem of infoItems){
                if(infoItem.firstElementChild.innerHTML === event.target.innerHTML)
                {
                    seatList.removeChild(infoItem)
                    break;
                }
            }
        }

        document.getElementById("total-amount").innerHTML = 550 * selectedSeats.length
        document.getElementById("grand-amount").innerHTML = 550 * selectedSeats.length
        if(couponCode === 'NEW15'){
            document.getElementById("grand-amount").innerHTML = 550 * selectedSeats.length * 0.85
        }
        else if(couponCode === 'Couple20'){
            document.getElementById("grand-amount").innerHTML = 550 * selectedSeats.length * 0.8
        }

        document.getElementById("seats-left").innerHTML = 40 - selectedSeats.length
        
    });
}


