import * as Styled from './styles';

export const Heading = ({ as = 'h1', size = 'huge' }) => {
  return (
    <Styled.Title as={as} size={size}>
      Eu sou Joao
    </Styled.Title>
  );
};
