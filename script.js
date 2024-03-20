


const removeProductButons = document.getElementsByClassName('remove-product-button')
for (var i = 0; i < removeProductButons.length; i++) {
    removeProductButons[i].addEventListener('click',removeProduct)
}
    

function removeProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
}

function updateTotal() {
    let totalAmount = 0
const cartProducts = document.getElementsByClassName('cart-product')
for (var i = 0; i < cartProducts.length; i++) {
    //console.log(cartProducts[i])
    const productPrice = cartProducts[i].getElementsByClassName('cart-product-price')[0].innerText.replace('R$','').replace(',','.')
    const productQuantity = cartProducts[i].getElementsByClassName('product-qtd-input')[0].value
    
    totalAmount += productPrice * productQuantity
}
document.querySelector('.cart-total-container span').innerText = 'R$' + totalAmount.toFixed(2).replace('.',',')
}
