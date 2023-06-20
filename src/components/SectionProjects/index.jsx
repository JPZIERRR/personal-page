import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const SectionProjects = () => {
  return (
    <Styled.Container>
      <Styled.Title>
        <Heading as="h2" size="big">
          Projects
        </Heading>
      </Styled.Title>
      <Styled.Grid>
        <Styled.LinkGrid>
          <Styled.Image />
        </Styled.LinkGrid>
        <Styled.LinkGrid>
          <Styled.Image />
        </Styled.LinkGrid>
        <Styled.LinkGrid>
          <Styled.Image />
        </Styled.LinkGrid>
        <Styled.LinkGrid>
          <Styled.Image />
        </Styled.LinkGrid>
        <Styled.LinkGrid>
          <Styled.Image />
        </Styled.LinkGrid>
        <Styled.LinkGrid>
          <Styled.Image />
        </Styled.LinkGrid>
      </Styled.Grid>
    </Styled.Container>
  );
};
