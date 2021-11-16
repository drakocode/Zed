import './App.scss';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import VideoMontage from './components/VideoMontage';
import VideoSpotlight from './components/VideoSpotlight';
import Galeria from './components/Galeria';
import Lore from './components/Lore';

function App() {
  const nomeEmpresa = "Shadow's Troop";

  return (
    <>

      <Header empresa={nomeEmpresa} />

      <main>
        <Banner>
          <h2>ZED</h2>
          <p>
            "Equilíbrio é a maestria dos tolos."

          </p>
        </Banner>

        <Lore />
        
        <Galeria/>

        <VideoSpotlight />

        <VideoMontage />
     </main>

      <Footer empresa={nomeEmpresa} />

    </>


  );
}

export default App;
