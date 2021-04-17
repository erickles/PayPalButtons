import { Component, createElement } from "react";

import { PayPalComponent } from "./components/PayPalComponent";
import "./ui/PayPalButtons.css";

export default class PayPalButtons extends Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClick.bind(this);
        this.onSuccessHandler = this.onSuccess.bind(this);
        this.onCancelHandler = this.onCancel.bind(this);
        this.onErrorHandler = this.onError.bind(this);
    }

    render() {
        return (
            <PayPalComponent
                type={this.props.paypalbuttonsType}
                bootstrapStyle={this.props.bootstrapStyle}
                className={this.props.class}
                clickable={!!this.props.onClickAction}
                onSuccess={this.onSuccessHandler}
                onCancel={this.onCancelHandler}
                onError={this.onErrorHandler}
                clientId={this.props.clientID}
                style={this.props.style}
                value={this.props.valueAttribute ? this.props.valueAttribute.displayValue : ""}
            />
        );
    }

    onClick() {
        if (this.props.onClickAction && this.props.onClickAction.canExecute) {
            this.props.onClickAction.execute();
        }
    }

    onSuccess() {
        if (this.props.onSuccess && this.props.onSuccess.canExecute) {
            this.props.onSuccess.execute();
        }
    }

    onCancel() {
        if (this.props.onCancel && this.props.onCancel.canExecute) {
            this.props.onCancel.execute();
        }
    }

    onError() {
        if (this.props.onError && this.props.onError.canExecute) {
            this.props.onError.execute();
        }
    }
}
