import styled, { css } from 'styled-components';
import { Container as Heading } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryColor};
    min-height: 100vh;
    width: 100%;
    display: grid;
    align-items: center;

    ${Heading} {
      padding-top: 4rem;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: ${theme.spacings.medium};

    ${Heading} {
      text-decoration-line: underline;
      color: ${theme.colors.white};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    max-width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: ${theme.spacings.large};
    padding: 2rem;
    overflow: hidden;
    justify-items: center;

    @media screen and (max-width: 1305px) and (min-width: 791px) {
      grid-template-columns: 1fr 1fr;
      padding: 2rem;
    }

    @media screen and (max-width: 790px) {
      grid-template-columns: 1fr;
    }

    @media screen and (max-width: 470px) {
      padding: 2rem;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.alternativeColor};
    padding: 5rem;
    box-shadow: 10px 5px 8px #00000040;
  `}
`;

export const LinkGrid = styled.a`
  ${({ theme }) => css``}
`;

export const Description = styled.div`
  ${({ theme }) => css`
  padding-top: 1rem;
  padding-bottom: 0.1rem;

  ${TextComponent} {
      font-size: ${theme.font.size.small};
      text-align: start;
    }

  `}
`;

export const Icons = styled.div`
  ${({ theme }) => css`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  `}
`;