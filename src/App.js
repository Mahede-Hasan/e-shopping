import './App.css';
import Categories from './components/Categories/Categories';
import CollectionAdvertise from './components/CollectionAdvertise/CollectionAdvertise';
import Footer from './components/Footer/Footer';
import GalleryAndService from './components/GalleryAndService/GalleryAndService';
import Header from './components/Header/Header';
import NewCollectionBanner from './components/MiddleBanner/NewCollectionBanner';
import NewArrivals from './components/NewArrivals/NewArrivals';
import TrendyProducts from './components/TrendyProducts/TrendyProducts';

function App() {
  return (
    <div className="overflow-x-hidden" >
      <Header></Header>
      <Categories></Categories>
      <TrendyProducts></TrendyProducts>
      <NewCollectionBanner></NewCollectionBanner>
      <CollectionAdvertise></CollectionAdvertise>
      <NewArrivals></NewArrivals>
      <GalleryAndService></GalleryAndService>
      <Footer></Footer>
    </div>
  );
}

export default App;
