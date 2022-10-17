const btns = document.querySelectorAll('.js-add-cart');
const cart = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');
function showCart(){
    // alert('Modal opened successfully');
    cart.classList.add('js-modal-open');
}
function hideCart(){
    cart.classList.remove('js-modal-open');
}
for (const btn of btns){
    btn.addEventListener('click', showCart);
}
modalClose.addEventListener('click', hideCart);
cart.addEventListener('click', hideCart);
modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
});