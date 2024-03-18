const url = `https://fakestoreapi.com/products`;
async function getProducts(){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Fetch did not work!')
        }

        const data = await response.json();
        console.log(data)
        const container = document.getElementById('container');
        data.forEach(item => {
            const divEl = document.createElement('div');
            divEl.classList.add('product');
            divEl.innerHTML+=`
                <img src="${item.image}" alt="${item.title}" class="product-img">
                <span class="product-title">${item.title}</span>
                <span class="product-price">UShs. ${(item.price*3700).toLocaleString()}</span>
                <button class="add-to-cart-btn" onclick="alert('Added successfully')">Add to cart</button>
            `
            container.appendChild(divEl);

        });
    }
    catch(error){
        console.log(error)
    }
}

getProducts();