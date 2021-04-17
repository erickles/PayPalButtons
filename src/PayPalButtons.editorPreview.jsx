import { Component, createElement } from "react";

import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";

import { PayPalComponent } from "./components/PayPalComponent";

export class preview extends Component {
    render() {
        return (
            <div ref={this.parentInline}>
                <PayPalComponent {...this.transformProps(this.props)}></PayPalComponent>
            </div>
        );
    }

    parentInline(node) {
        // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
        if (node && node.parentElement && node.parentElement.parentElement) {
            node.parentElement.parentElement.style.display = "inline-block";
        }
    }

    transformProps(props) {
        return {
            type: props.paypalbuttonsType,
            bootstrapStyle: props.bootstrapStyle,
            className: props.class,
            clickable: false,
            style: parseInlineStyle(props.style),
            defaultValue: props.paypalbuttonsValue ? props.paypalbuttonsValue : "",
            value: props.valueAttribute
        };
    }
}

export function getPreviewCss() {
    return require("./ui/PayPalButtons.css");
}
