
import Header from './componentes/Header';
import Article from './componentes/Article';
import Sidebar from './componentes/Sidebar';
import Footer from './componentes/Footer';

function App() {
  const postData = {
    titulo: "Descobrindo as Praias do Paraná",
    data: "10 de novembro de 2024",
    paragrafos: [
      "Viajar pelas praias do Paraná foi algo incrível. As praias possuem águas cristalinas, areia branca e paisagens que parecem sair de um cartão postal.",
      "Durante minha viagem visitei vários lugares maravilhosos, incluindo a encantadora Ilha do Mel."
    ],
    imagem: {
      url: "https://www.parana.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2025-02/ilha_do_mel_027_0.jpg",
      alt: "Praias paradisíacas no Paraná",
      caption: "Uma das belas praias do Paraná"
    }
  };

  const related = ["Explorando as Montanhas", "Viagem pelo Nordeste Brasileiro"];

  return (
    <div className="container"> 
      <Header title="Meu Blog de Viagens" />
      <Article 
        title={postData.titulo}
        date={postData.data}
        paragraphs={postData.paragrafos}
        image={postData.imagem}
      />
      <Sidebar relatedPosts={related} />
      <Footer />
    </div>
  );
}

export default App;