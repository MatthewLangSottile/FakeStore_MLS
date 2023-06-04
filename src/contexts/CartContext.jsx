import { useState, createContext, useEffect } from 'react'

export const CartContext = createContext();

export default function CartContextProvider(props) {

    //create global state to hold cart
    const [cart, setCart] = useState([])

    //create global state to hold cart total price
    const [cartTotalPrice, setCartTotalPrice] = useState(0)

    //
    const [newCart, setNewCart] = useState([])

    useEffect(
        () => {

            const storedCart = localStorage.getItem('cartList')


            //check if something was there and
            //if so use that value to initialize
            if (storedCart) {
                //set with this value
                setCart(JSON.parse(storedCart))
            }

        }, [] //run one time when contex loads
    )

    useEffect(
        () => {
            //update locale storage every time the cart changes
            //save new state of cart when it changes
            localStorage.setItem('cartList', JSON.stringify(cart))

            let newTotal = newCart.reduce((total, item) => total + item.price, 0)

            setCartTotalPrice(newTotal.toFixed(2))


        }, [cart]
    )


    useEffect(() => {
        setCart(newCart)
    }, [newCart])

    // function will Add Product to Cart
    const addProductToCart = (productToAdd) => {

        setNewCart(() => [...cart, productToAdd])


    }

    //function to remove Producst from cart
    const removeProductFromCart = (productId) => {

        //filter will keep all that don't match product id 
        setNewCart(() => cart.filter(item => item.id !== productId))

    }
    // function to clear cart
    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, cartTotalPrice, clearCart, addProductToCart, removeProductFromCart, setCartTotalPrice }}>
            {props.children}
        </CartContext.Provider>
    )

}