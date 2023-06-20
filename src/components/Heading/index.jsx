import * as Styled from './styles';

export const Heading = ({ as = 'h1', size = 'huge', children }) => {
  return (
    <Styled.Title as={as} size={size}>
      {children}
    </Styled.Title>
  );
};
