import { PayPalButton } from "react-paypal-button-v2";
import React from "react";

const PayPal = (props) => {
  return (
    <PayPalButton
      amount="50"
      onSuccess={(details, data) => props.success(details, data)}
      onButtonReady={props.botonReady}
      onError={(err) => props.error(err)}
      options={{
        clientId:
          "AZJFNeXltSSVbURt-BPMf_LIDeDNSsDkjOzXRjmT9Cwcf2n0Wnqd7N2w9SawIbZRK8609qmz-brjgWwT",
      }}
    />
  );
};

export default PayPal;
