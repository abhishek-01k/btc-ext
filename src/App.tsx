import { useConnectModal } from "@particle-network/btc-connectkit";
import "./App.css";

function App() {
  const { openConnectModal, disconnect } = useConnectModal();
  return (
    <div className="App">
      Hello World
      <button onClick={openConnectModal}>Connect wallet</button>
      <button onClick={disconnect}>Disconnect wallet</button>
    </div>
  );
}

export default App;
