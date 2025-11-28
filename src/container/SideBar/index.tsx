import Titulo from '../../components/Titulo';
import { Imagen } from './styles';

const Sidebar = () => (
  <aside>
    <Imagen src="https://github.com/kallyassis.png" alt="foto de perfil" />
    <Titulo fontSize={20}>Kally assis</Titulo>
  </aside>
);

export default Sidebar;
