$(document).ready(function () {
    var quantitiy = 0;
    $('.quantity-right-plus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        $('#quantity').val(quantity + 1);
    });
    $('.quantity-left-minus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }
    });
});

const btns = document.querySelectorAll('.js-add-cart');
const cart = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');
function showCart() {
    // alert('Modal opened successfully');
    cart.classList.add('js-modal-open');
}
function hideCart() {
    cart.classList.remove('js-modal-open');
}
for (const btn of btns) {
    btn.addEventListener('click', showCart);
}
modalClose.addEventListener('click', hideCart);
cart.addEventListener('click', hideCart);
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});