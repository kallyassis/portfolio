import { Paragraph } from './styles';
export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario';
};

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <Paragraph tipo={tipo}>{children}</Paragraph>
);

export default Paragrafo;
