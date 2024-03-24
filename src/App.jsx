import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header titulo="Adopta un perrito" />
      <section className="MyCards">
        <MyCard
          imagen="https://placedog.net/500/334"
          nombre="Bart"
          descripcion="En busca de un hogar ideal, ayudanos a brindar su lugar especial"
          color="success"
          tag="Husky"
        />
        <MyCard
          imagen="https://placedog.net/500/333"
          nombre="Canelo"
          descripcion="Es juguetón, amigable y se lleva bien con niños. Joven con mucha energía"
          color="primary"
          tag="Joven"
        />
        <MyCard
          imagen="https://placedog.net/500/324"
          nombre="Miel"
          descripcion="Una hermosa cachorrita que viene a dar alegria a tu hogar ideal para niños"
          color="danger"
          tag="Cachorra"
        />
        <MyCard
          imagen="https://placedog.net/500/325"
          nombre="Negro"
          descripcion="Un gran compañero de aventuras. ¡Ayuda a Negrito a encontrar su final feliz!"
          color="warning"
          tag="Negrito peludo"
        />
      </section>
      <footer>
      <Footer final="Transformar tu hogar, agregando alegría y mucho amor con estos pequeños que te entregan compañia. Busca a tu amigo peludo." />
      </footer>
    </>
  );
};

export default App;