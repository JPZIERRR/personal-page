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
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${theme.spacings.huge};
    padding: 5rem;
    overflow: hidden;

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
    transition: all 200ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  `}
`;

export const LinkGrid = styled.a`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    height: 39rem;
    width: 100%;
    border-radius: 50px;
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.alternativeColor};
    padding-top: 1rem;
    margin-top: 0;
    padding-bottom: 0.1rem;
    border-radius: 50px;

    ${TextComponent} {
      font-size: ${theme.font.size.small};
      font-weight: 200;
    }

    ${Heading} {
      text-align: center;
    }
  `}
`;
