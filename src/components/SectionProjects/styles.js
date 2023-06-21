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
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: ${theme.spacings.medium};
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${theme.spacings.huge};
    padding: 5rem;
    z-index: 2;

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
    overflow: hidden;
    transition: all 200ms ease-in-out;

    &:hover {
      transform: scale(1.03);
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
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    padding-top: 1rem;
    margin-top: -1rem;
    padding-bottom: 0.1rem;

    ${TextComponent} {
      font-size: ${theme.font.size.small};
      font-weight: 200;
    }

    ${Heading} {
      text-align: center;
    }
  `}
`;
