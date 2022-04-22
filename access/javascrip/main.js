// slider
$(document).ready(function(){
    $('.slider').bxSlider();
    });


// modal
//lấy ra các thẻ
const buyBtns= document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalClose= document.querySelector('.js-modall-close')
const modalContainer = document.querySelector('.js-modall-content')
//hàm mở modal
function showBuyTickets() {
    modal.classList.add('open')
}

//hàm đóng modal
function closeBuuyTickets() {
    modal.classList.remove('open')
}


//tao sự kiện
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTickets)
}
modalClose.addEventListener('click', closeBuuyTickets)
modal.addEventListener('click', closeBuuyTickets)

// ngừng việc nổi bọt
modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
})

