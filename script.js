


const removeProductButons = document.getElementsByClassName('remove-product-button')
for (var i = 0; i < removeProductButons.length; i++) {
    removeProductButons[i].addEventListener('click',removeProduct)
}


const quantityInputs = document.getElementsByClassName('product-qtd-input')
for (var i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener('change', updateTotal)
}


const addTocastButtons = document.getElementsByClassName('button-hover-background')
for (var i = 0; i < addTocastButtons.length; i++) {
    addTocastButtons[i].addEventListener('click',addProductTocart)
}


function addProductTocart(event) {
    const button = event.target
    const protuctInfos = button.parentElement.parentElement
    const productImage = protuctInfos.getElementsByClassName('product-image')[0].src
    const productTitle = protuctInfos.getElementsByClassName('product-title')[0].innerText
    const productPrice = protuctInfos.getElementsByClassName('product-price')[0].innerText
    
    let newCartProduct = document.createElement('tr')
    newCartProduct.classList.add('cart-product')

    newCartProduct.innerHTML = `
    
    <td class="product-identification">
        <img src="${productImage}" alt="${productTitle}" class="cart-product-image">
        <strong class="cart-product-title">${productTitle}</strong>
    </td>
    <td>
        <span class="cart-product-price">${productPrice}</span>
    </td>
    <td>
        <input type="number" value="1" min="0" class="product-qtd-input">
        <button type="button" class="remove-product-button">Remover</button>
    </td>
    `

    const tableBody = document.querySelector('.cart-table tbody')
    tableBody.append(newCartProduct)
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
