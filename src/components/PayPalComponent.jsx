import { React, Component, createElement } from "react";
import classNames from "classnames";
import { PayPalButton } from "react-paypal-button-v2";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export class PayPalComponent extends Component {
    render() {
        const { value, clientId, onSuccess, onCancel, onError } = this.props;

        const onApproveAction = (date, actions) => {
            onSuccess();
        }

        const onCancelAction = (date, actions) => {
            onCancel();
        }

        const onErrorAction = (date, actions) => {
            onError();
        }

        const createOrder = (data, actions) => {
            return actions.order
                .create({
                    purchase_units: [
                        {
                            amount: {
                                currency_code: "USD",
                                value: value
                            }
                        }
                    ]
                })
                .then(orderID => {
                    //setOrderID(orderID);
                    return orderID;
                });
        };

        // https://luehangs.site/lue_hang/projects/react-paypal-button-v2
        return (
            <PayPalScriptProvider
                options={{ "client-id": clientId }}
            >
                <PayPalButtons 
                style={{ layout: "horizontal" }} 
                createOrder={createOrder}  
                onApprove={onApproveAction}
                onCancel={onCancelAction}
                onError={onErrorAction}
                />
            </PayPalScriptProvider>
        );
    }
}
