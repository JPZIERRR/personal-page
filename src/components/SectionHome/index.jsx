import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const SectionHome = () => {
  return (
    <Styled.Container id="home">
      <TextComponent>Olá, me chamo...</TextComponent>
      <Heading as="h3" size="big">
        João Pedro,
      </Heading>
      <Styled.Descprition>Sou desenvolvedor fullstack </Styled.Descprition>
    </Styled.Container>
  );
};
