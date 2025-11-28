import { Paragraph } from './styles';
export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario';
  fontSize?: number
};

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <Paragraph fontSize={fontSize} tipo={tipo}>{children}</Paragraph>
);

export default Paragrafo;
