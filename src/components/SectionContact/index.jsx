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
        <Styled.Link>
          <Styled.img src="/email.png" alt="logo email" /> Email
        </Styled.Link>
        <Styled.Link>
          <Styled.img src="/insta.png" alt="logo instagram" /> Instagram
        </Styled.Link>
        <Styled.Link>
          <Styled.img src="/github.png" alt="logo github" /> GitHub
        </Styled.Link>
        <Styled.Link>
          <Styled.img src="/telefone.png" alt="logo telefone" /> Telefone
        </Styled.Link>
      </Styled.ContactLinks>
    </Styled.Container>
  );
};
