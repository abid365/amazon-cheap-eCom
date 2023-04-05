import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async()=>{
 const loadedProducts = await fetch('products.json');
 const products = await loadedProducts.json();

 //If card data in database you should use async await
 const storedCard = getShoppingCart();
 const savedCart = [];

 console.log(storedCard);
 
 for (const id in storedCard){
    const addedProduct = products.find(pd => pd.id === id);
    if(addedProduct){
        const quantity = storedCard[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
    }
 }

//if you need to send two tyhings
// return [products,savedCart]
// another options
// return {products, cart: savedCart};

return savedCart;
}

export default cartProductsLoader;