import { useState, FormEvent } from 'react';

import Dropzone from '../../components/DropZone';
import Graph from '../../components/Graph';
import { Container } from './styles';

const Home = () => {
  const [selectedFile,setSelectedFile] = useState<File>();
  const [haveResult,setHaveResult] = useState(false);


  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    if(selectedFile) {
      data.append('image', selectedFile);

      setHaveResult(true);
    }


  }

  return (
    <Container>
        <header className="page-header" >
          <div className="top-bar-container">
            <a href="localhost:3000">Link1</a>
            <a href="localhost:3000">Link2</a>
            <a href="localhost:3000">Link3</a>
          </div>
          <div className="header-content">
            <h2>Cabeçalho</h2>
          </div>
        </header>
        <div id="page-graphs-tools" className="container">
          <main>
            <div className="card">
              <h1>Título</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, autem fugit. Iste adipisci voluptate laudantium! Ducimus, eum. Totam, beatae omnis! Assumenda quo voluptas repellendus nesciunt doloribus sint obcaecati. Nemo, dignissimos.</p>
            </div>
            <div className="upload">
              <form onSubmit={handleSubmit}>
                <Dropzone  onFileUploaded={setSelectedFile} />
                <button type="submit">Calculate</button>
              </form>
            </div>
            <div className="result">
              <header>
                <h1>Plots</h1>
              </header>
              {haveResult && <Graph />}
            </div>
          </main>
        </div>
        <footer><h2>Rodapé</h2></footer>

    </Container>
  );
}

export default Home;
