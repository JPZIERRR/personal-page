import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const SectionAbout = () => {
  return (
    <Styled.Container id="sobre">
      <Styled.Grid>
        <Styled.Text>
          <Heading as="h1" size="huge">
            Eu sou o João Pedro
          </Heading>
          <TextComponent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quas
            reiciendis odio praesentium sapiente deleniti amet minus facere
            aperiam dignissimos? Nostrum aliquid vel ullam facere fuga
            accusantium soluta enim itaque?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Molestiae reiciendis non adipisci vel
            sint, laboriosam debitis accusantium, molestias amet velit, quo quos
            architecto optio sequi in accusamus quas minima voluptates!
          </TextComponent>
        </Styled.Text>
        <Styled.GridTextContainer>
          <Heading as="h2" size="big">
            Habilidades
          </Heading>
          <Styled.GridText>
            <Styled.GridTextElement>HTML</Styled.GridTextElement>
            <Styled.GridTextElement>CSS</Styled.GridTextElement>
            <Styled.GridTextElement>JAVASCRIPT</Styled.GridTextElement>
            <Styled.GridTextElement>REACTJS</Styled.GridTextElement>
            <Styled.GridTextElement>NEXTJS</Styled.GridTextElement>
            <Styled.GridTextElement>STRAPI</Styled.GridTextElement>
            <Styled.GridTextElement>POSTGREESQL</Styled.GridTextElement>
            <Styled.GridTextElement>GRAPHQL</Styled.GridTextElement>
            <Styled.GridTextElement>STORYBOOK</Styled.GridTextElement>
            <Styled.GridTextElement>JEST</Styled.GridTextElement>
            <Styled.GridTextElement>NPM</Styled.GridTextElement>
            <Styled.GridTextElement>GIT</Styled.GridTextElement>
          </Styled.GridText>
        </Styled.GridTextContainer>
      </Styled.Grid>
    </Styled.Container>
  );
};
