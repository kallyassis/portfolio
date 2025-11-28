import { Cart, LinkBotao } from "./styles";

import Paragrafo from "../Paragraph";
import Titulo from "../Titulo";

const Projeto = () => (
  <Cart>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feitas com VueJS</Paragrafo>
    <LinkBotao>
      Visualizar
    </LinkBotao>
  </Cart>
)

export default Projeto
