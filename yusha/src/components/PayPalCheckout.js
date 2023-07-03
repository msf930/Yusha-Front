import React, { useRef, useEffect, useState } from "react";

function PayPalCheckout() {
    const paypal = useRef();
    const [transactionStatus, setTransactionStatus] = useState(null);

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Yusha early access",
                                amount: {
                                    currency_code: "USD",
                                    value: 5.00,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();

                    console.log("success", order);
                    setTransactionStatus("success");
                },
                onError: (err) => {
                    console.log(err);
                    setTransactionStatus("failure");
                },
            })
            .render(paypal.current);
    }, []);

    if (transactionStatus === "success") {
        return alert("Success");
    }

    if (transactionStatus === "failure") {
        return alert("Fail");
    }

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}

export default PayPalCheckout;