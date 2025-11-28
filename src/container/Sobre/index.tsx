import Paragrafo from "../../components/Paragraph";
import Titulo from "../../components/Titulo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, nostrum fugiat? Dolorum eum iure voluptate fugiat. Aliquam fuga omnis aut eveniet, iste, a incidunt doloribus doloremque voluptatum porro distinctio id.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=kallyassis&theme=radical&_icons=true" alt="Github seção" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kallyassis&layout=compact&langs_count16&theme=radical" alt="Github seção"  />
    </GithubSecao>
  </section>
)

export default Sobre;
