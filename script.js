document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const image = document.getElementById('product-image').value;

    // Format price as currency
    const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

    // Create a new product card
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <img src="img/${image}" alt="${name}">
        <h3>${name}</h3>
        <p>${formattedPrice}</p>
        <button onclick="removeProduct(this)">Eliminar</button>
    `;

    // Append the product card to the product list
    document.getElementById('product-list').appendChild(productCard);

    // Clear form fields
    document.getElementById('product-form').reset();
});

function removeProduct(button) {
    button.parentElement.remove();
}
