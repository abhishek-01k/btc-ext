import React from "react";
import ReactDOM from "react-dom/client";
import {
  ConnectProvider,
  OKXConnector,
  UnisatConnector,
  BitgetConnector,
  TokenPocketConnector,
  BybitConnector,
  WizzConnector,
  XverseConnector,
} from "@particle-network/btc-connectkit";
import App from "./App";

import {
  MerlinTestnet,
  Merlin,
  BEVMTestnet,
  BEVM,
  MAPProtocolTestnet,
  MAPProtocol,
  SatoshiVMTestnet,
  BSquaredTestnet,
  Mantle,
  BitlayerTestnet,
  BotanixTestnet,
  PolygonzkEVMCardona,
} from "@particle-network/chains";

const root = document.createElement("div");
root.className = "container";
document.body.appendChild(root);
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <ConnectProvider
      options={{
        projectId: "7f20d8df-724a-45a9-8f03-20defec66c00", // -
        clientKey: "cM5l7vR8cIUjOxkhJAmKrBRkCwWPPT70QlnW9fZu", // Retrieved from https://dashboard.particle.network
        appId: "670e1d70-8207-4504-9165-c8060332e89e", // -
        aaOptions: {
          accountContracts: {
            BTC: [
              {
                chainIds: [
                  MerlinTestnet.id,
                  Merlin.id,
                  BEVMTestnet.id,
                  BEVM.id,
                  MAPProtocolTestnet.id,
                  MAPProtocol.id,
                  SatoshiVMTestnet.id,
                ],
                version: "1.0.0",
              },
              {
                chainIds: [
                  BitlayerTestnet.id,
                  BotanixTestnet.id,
                  PolygonzkEVMCardona.id,
                  BSquaredTestnet.id,
                  Mantle.id,
                ],
                version: "2.0.0",
              },
            ],
          },
        },
        walletOptions: {
          visible: true,
        },
      }}
      connectors={[
        new UnisatConnector(),
        new OKXConnector(),
        new BitgetConnector(),
        new TokenPocketConnector(),
        new BybitConnector(),
        new WizzConnector(),
        new XverseConnector(),
      ]}
    >
      <App />
    </ConnectProvider>
  </React.StrictMode>
);
