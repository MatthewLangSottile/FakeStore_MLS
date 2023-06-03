import {useState, createContext, useEffect} from 'react'

export const CartContext = createContext();

export default function CartContextProvider(props){
    //create global state to hold cart
    const [cart, setCart] = useState([])

    //create global state to hold cart total price
    const [cartTotalPrice, setCartTotalPrice] = useState(0)

    useEffect(
        ()=>{
            console.log('context loaded')
            const storedCart = localStorage.getItem('cartList')
            console.log("stored value is ", storedCart)
            //setDarkMode(JSON.parse(storedDarkMode))
            //check if something was there and
            //if so use that value to initialize
            if (storedCart){
                //set with this value
                setCart(JSON.parse(storedCart))       
            }

        }, [] //run one time when contex loads
    )

    useEffect(
        ()=>{
            //update locale storage every time the cart changes
            //save new state of cart when it changes
            localStorage.setItem('cartList', JSON.stringify(cart))
        
            console.log('cartTotalPrice is $',cartTotalPrice)
        }, [cart]
    )
    

    // // // function to calulate cart total price
    // const calcCartTotal = (newCart) => {
    //     let newTotal = 
    //     newCart.reduce((total, item) => total.price + item.price,0)
    //     // console.log(result)
    //     setCartTotalPrice(newTotal.toFixed(2))
    // }
   
    // function will Add Product to Cart
    const addProductToCart = (productToAdd) => {
        console.log('adding', productToAdd)
        let newCart = [...cart, productToAdd]
        setCart(newCart)
        //
        console.log('new cart is', newCart)
        let newTotal = newCart.reduce((total, item) => total + item.price,0)
        console.log('total is',newTotal)
        setCartTotalPrice(newTotal.toFixed(2))
    }

    //function to remove Producst from cart
    const removeProductFromCart = (productId) => {
        console.log("remove", productId)
        //filter will keep all that don't match product id 
        let newCart = cart.filter(item=>item.id !== productId)
        setCart(newCart)
        //
        console.log('new cart is', newCart)
        let newTotal = newCart.reduce((total, item) => total + item.price,0,)
        console.log('total is',newTotal)
        setCartTotalPrice(newTotal.toFixed(2))
    }
    // function to clear cart
    const clearCart = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart, cartTotalPrice, clearCart, addProductToCart, removeProductFromCart}}>
            {props.children}
        </CartContext.Provider>
    )

}