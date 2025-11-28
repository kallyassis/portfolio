import Projetos from "./container/Projetos";
import Sidebar from "./container/SideBar";
import Sobre from "./container/Sobre";
import { Container } from "./style";

function App() {
  return (
    <>
      <Container>
          <Sidebar />
          <main>
            <Sobre />
            <Projetos />
          </main>
      </Container>
    </>
  );
}

export default App;
