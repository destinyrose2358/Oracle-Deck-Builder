import { BrowserView, MobileView } from 'react-device-detect';
import './App.css';
import { OracleDeckBuilder } from './components/OracleDeckBuilder';

function App() {
  return (
    <div className="App">
      <BrowserView
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <OracleDeckBuilder/>
      </BrowserView>
      <MobileView>
        <p>Thank you for checking out the Oracle Deck Builder. Currently we are only supporting Desktop.</p>
      </MobileView>
    </div>
  );
}

export default App;
