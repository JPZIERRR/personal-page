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
            <Styled.GridTextElement>JavaScript</Styled.GridTextElement>
            <Styled.GridTextElement>ReactJS</Styled.GridTextElement>
            <Styled.GridTextElement>NextJS</Styled.GridTextElement>
            <Styled.GridTextElement>Strapi</Styled.GridTextElement>
            <Styled.GridTextElement>PostgreeSQL</Styled.GridTextElement>
            <Styled.GridTextElement>Wordpress</Styled.GridTextElement>
            <Styled.GridTextElement>MariaDb</Styled.GridTextElement>
            <Styled.GridTextElement>NodeJS</Styled.GridTextElement>
            <Styled.GridTextElement>NPM</Styled.GridTextElement>
            <Styled.GridTextElement>GIT</Styled.GridTextElement>
          </Styled.GridText>
        </Styled.GridTextContainer>
      </Styled.Grid>
    </Styled.Container>
  );
};
