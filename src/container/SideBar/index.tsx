import FotoPerfil from '../../components/Avatar';
import Paragrafo from '../../components/Paragraph';
import Titulo from '../../components/Titulo';

import { BotaoTema, Descricao, SidebarContainer } from './styles';

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <FotoPerfil />
      <Titulo fontSize={20}>Kally assis</Titulo>
      <Paragrafo fontSize={16} tipo='secundario' >kallyassis</Paragrafo >
      <Descricao tipo='principal' fontSize={12}  >Programadora Full Stack</Descricao >
      <BotaoTema>Tocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
