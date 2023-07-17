import { useEffect } from "react";
import { launchTransak } from "./launchTransak";

// import { useNavigate } from "react-router-dom";
import Pusher from "pusher-js";

function Widget() {
  // const navigate = useNavigate();

  const queryParams = {
    /** Add Your params here */
  };

  useEffect(() => {}, []);

  const openTransak = () => {
    console.log(process.env);
    const transakParams = {
      apiKey: queryParams.apiKey || process.env.REACT_APP_API_KEY,
      environment: queryParams.environment || process.env.REACT_APP_ENVIRONMENT,
      defaultCryptoCurrency: queryParams.symbol || "ETH",
      fiatCurrency: queryParams.fiatCurrency || "EUR",
      network: queryParams.network || "polygon",
    };

    console.log(transakParams, "transakParams");

    const transakWidget = launchTransak(transakParams);
    console.log(transakWidget, "transakWidget");

    if (transakWidget) {
      transakWidget.init();

      // This will trigger when the user marks payment is made.
      transakWidget.on(
        transakWidget.EVENTS.TRANSAK_ORDER_SUCCESSFUL,
        async (orderData) => {
          let pusher = new Pusher("1d9ffac87de599c61283", { cluster: "ap2" });
          let orderId = orderData.status.id;

          // To subscribe to the channel
          let channel = pusher.subscribe(orderId);

          // need to conisder ORDER_COMPLETED event.
          channel.bind(`ORDER_COMPLETED`, (orderData) => {
            console.log(orderData, "onlyOrderId");
            transakWidget.close();
            // navigate("/success");
          });

          channel.bind(`ORDER_FAILED`, (orderData) => {
            console.log(orderData, "onlyOrderId");
            transakWidget.close();
            // navigate("/failed");
          });
        }
      );
    }
  };

  return (
    <div style={{ height: "100%", position: "relative" , display:"flex" , justifyContent:"center", marginTop:"40vh" }}>
      <button
        className="button"
        onClick={() => openTransak()}
      >
        Launch Transak
      </button>
    </div>
  );
}

export default Widget;
