import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


 const StripeButton = ({ price,name }) => {
     const priceForStripe = price * 100
     const publishableKey = 'pk_test_bu7KkEYpaJwJcvi5N8IF0wAh00mLJ4D79e'
    
     const onToken = token => {
         console.log(token);
         alert('Payment Successful')
     }
    
     return (  
            <StripeCheckout
                label='Buy'
                name={name}
                billingAddress
                shippingAddress
                image='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Buy'
                token={onToken}
                stripeKey={publishableKey}
            />
    )
}


export default StripeButton;