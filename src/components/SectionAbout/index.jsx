import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const SectionAbout = () => {
  return (
    <Styled.Container id="sobre">
      <Styled.Grid>
        <Styled.Img src="/my-img.jpg" alt="Minha foto" />
        <Styled.Text>
          <Heading as="h1" size="huge">
            Sobre mim
          </Heading>
          <TextComponent>
            Tenho 18 anos e moro em Uberlândia-MG. Sou completamente apaixonado
            por tecnologia principalmente pela programação. Sou extremamente
            dedicado a resolver problemas e escutar pessoas. Tenho facilidade em
            aprender e quero sempre estar aprendendo coisas novas, além de ser
            bastante flexível para me adequar as necessidades da empresa.
            Procuro uma vaga que vai me agregar experiência e conhecimento para
            sempre melhorar minhas skills.
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
            <Styled.GridTextElement>Express</Styled.GridTextElement>
            <Styled.GridTextElement>MongoDB</Styled.GridTextElement>
            <Styled.GridTextElement>mySQL</Styled.GridTextElement>
            <Styled.GridTextElement>RestAPI</Styled.GridTextElement>
            <Styled.GridTextElement>Git</Styled.GridTextElement>
          </Styled.GridText>
        </Styled.GridTextContainer>
      </Styled.Grid>
    </Styled.Container>
  );
};
