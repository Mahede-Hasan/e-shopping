import './App.css';
import Categories from './components/Categories/Categories';
import CollectionAdvertise from './components/CollectionAdvertise/CollectionAdvertise';
import Header from './components/Header/Header';
import NewCollectionBanner from './components/MiddleBanner/NewCollectionBanner';
import TrendyProducts from './components/TrendyProducts/TrendyProducts';

function App() {
  return (
    <div className="App" >
      <Header></Header>
      <Categories></Categories>
      <TrendyProducts></TrendyProducts>
      <NewCollectionBanner></NewCollectionBanner>
      <CollectionAdvertise></CollectionAdvertise>
    </div>
  );
}

export default App;
