import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const SectionProjects = () => {
  return (
    <Styled.Container id="projetos">
      <Styled.Title>
        <Heading as="h2" size="big">
          Projetos
        </Heading>
      </Styled.Title>
      <Styled.Grid>
        <Styled.GridElement>
          <Styled.LinkGrid
            href="https://fornazier.netlify.app/"
            target="_blank"
          >
            <Styled.Image src="/forkify.img" />
          </Styled.LinkGrid>
          <Styled.Description>
            <Heading as="h4" size="small">
              Site de receitas
            </Heading>
            <TextComponent>Neste site foi usado javascript puro</TextComponent>
          </Styled.Description>
        </Styled.GridElement>
        <Styled.GridElement>
          <Styled.LinkGrid
            href="https://landingpagefornazier.netlify.app/"
            target="_blank"
          >
            <Styled.Image src="/landing.img" />
          </Styled.LinkGrid>
          <Styled.Description>
            <Heading as="h4" size="small">
              Landing Page
            </Heading>
            <TextComponent>
              Neste site foi usado React.JS e Strapi
            </TextComponent>
          </Styled.Description>
        </Styled.GridElement>
        <Styled.GridElement>
          <Styled.LinkGrid>
            <Styled.Image src="/forkify.img" />
          </Styled.LinkGrid>
          <Styled.Description>
            <Heading as="h4" size="small">
              Site de receitas
            </Heading>
            <TextComponent>Neste site foi usado javascript puro</TextComponent>
          </Styled.Description>
        </Styled.GridElement>
        <Styled.GridElement>
          <Styled.LinkGrid>
            <Styled.Image src="/landing.img" />
          </Styled.LinkGrid>
          <Styled.Description>
            <Heading as="h4" size="small">
              Landing Page
            </Heading>
            <TextComponent>
              Neste site foi usado React.JS e Strapi
            </TextComponent>
          </Styled.Description>
        </Styled.GridElement>
        <Styled.GridElement>
          <Styled.LinkGrid>
            <Styled.Image src="/forkify.img" />
          </Styled.LinkGrid>
          <Styled.Description>
            <Heading as="h4" size="small">
              Site de receitas
            </Heading>
            <TextComponent>Neste site foi usado javascript puro</TextComponent>
          </Styled.Description>
        </Styled.GridElement>
        <Styled.GridElement>
          <Styled.LinkGrid>
            <Styled.Image src="/landing.img" />
          </Styled.LinkGrid>
          <Styled.Description>
            <Heading as="h4" size="small">
              Landing Page
            </Heading>
            <TextComponent>
              Neste site foi usado React.JS e Strapi
            </TextComponent>
          </Styled.Description>
        </Styled.GridElement>
      </Styled.Grid>
    </Styled.Container>
  );
};
