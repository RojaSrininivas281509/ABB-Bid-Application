import './App.css';
import Header  from './Components/AuctionHeader';
import AuctionEntry from './Components/AuctionEntry';
import AuctionItems from './Components/AuctionItems';

function App() {
  return (
    <div className="app">
      <Header/>
      <AuctionEntry/>
      <AuctionItems/>
    </div>
  );
}

export default App;
