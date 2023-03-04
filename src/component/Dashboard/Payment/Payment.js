import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51JwNMjCkzxdRkj23qr3OLpL8mH2txMbFejo5CovtCsILegRoibRsju0jBMwJSba59j9Tbr6stT94lexolj6ibVmB00lRH7Vr2e')

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`https://coffee-time-server2.vercel.app/order/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [id]);

    return (
        <div>
            <h3 className="fw-bold mb-5">Please Pay ${order?.price} for {order.name}</h3>
            {order?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    order={order}
                />
            </Elements>}
        </div>
    );
};
export default Payment;