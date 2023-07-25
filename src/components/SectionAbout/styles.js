import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    width: 100%;
    background: ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;

    ${TextComponent} {
      color: ${theme.colors.white};
      font-weight: 100;
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: ${theme.spacings.large};
    gap: ${theme.spacings.xhuge};

    @media (max-width: 1230px) and (min-width: 769px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 500px) {
      & img {
        width: 30rem;
        height: 50rem;
      }
    }

    ${Heading} {
      margin-bottom: ${theme.spacings.xlarge};
    }

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }

    ${Heading} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const Text = styled.div`
  ${({ theme }) => css`
    text-align: center;
    ${TextComponent} {
      text-align: start;
    }

    @media ${theme.media.ltemedium} {
      margin-bottom: ${theme.spacings.large};
      margin-top: ${theme.spacings.huge};
    }
  `}
`;

export const GridText = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 3rem;

    @media screen and (min-width: 769px) and (max-width: 1450px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 520px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 470px) {
      margin-left: 0;
    }
  `}
`;

export const GridTextElement = styled.p`
  ${({ theme }) => css`
    background-color: ${theme.colors.mediumRed};
    color: ${theme.colors.white};
    border-radius: 0.5rem;
    width: 11.5rem;
  `}
`;
export const GridTextContainer = styled.div`
  ${({ theme }) => css`
    text-align: center;

    @media screen and (max-width: 1050px) and (min-width: 769px) {
      padding-top: 4rem;
    }
  `}
`;

export const Img = styled.img`
  ${({ theme }) => css`
    width: 45rem;
    height: 70rem;
  `}
`;

export const link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.mediumRed};
    text-decoration: none;
  `}
`;
