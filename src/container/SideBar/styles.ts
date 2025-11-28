import styled from 'styled-components';
import { Paragraph } from '../../components/Paragraph/styles';

export const Descricao = styled(Paragraph)`
  margin: 24px 0 40px;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`;

export const BotaoTema = styled.button`
  border-radius: 12px;
  margin-bottom: 24px;
  border: none;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;

  &:hover{
    opacity: .9;
  }
`;
