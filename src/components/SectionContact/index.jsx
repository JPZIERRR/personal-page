import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const SectionContact = ({ id }) => {
  return (
    <Styled.Container id="contato">
      <Styled.ContactHeader>
        <Heading as="h2" size="huge">
          Vamos trabalhar juntos?
        </Heading>
        <TextComponent>Aqui estão as formas de contato.</TextComponent>
      </Styled.ContactHeader>
      <Styled.ContactLinks>
        <Styled.Link href="mailto:joaofornaz_ier@hotmail.com">
          <Styled.img src="/email.png" alt="logo-email" /> Email
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/jo%C3%A3o-pedro-martins-fornazier-800318265/"
          target="_blank"
        >
          <Styled.img src="/linkedn.png" alt="logo-linkedin" /> linkedin
        </Styled.Link>
        <Styled.Link href="https://github.com/JPZIERRR" target="_blank">
          <Styled.img src="/github.png" alt="logo-github" /> GitHub
        </Styled.Link>
        <Styled.Link href="tel:+55034991700827">
          <Styled.img src="/telefone.png" alt="logo-telefone" /> Telefone
        </Styled.Link>
      </Styled.ContactLinks>
    </Styled.Container>
  );
};
