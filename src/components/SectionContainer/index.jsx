import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const SectionContainer = () => {
  return (
    <Styled.Container>
      <Styled.Grid>
        <Styled.Text>
          <Heading>Eu sou o João Pedro</Heading>
          <TextComponent>
            Me chamo João Pedro tenho 18 anos e bla bla bla
          </TextComponent>
        </Styled.Text>
        <Styled.GridText></Styled.GridText>
      </Styled.Grid>
    </Styled.Container>
  );
};
