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
      color: ${theme.colors.mediumRed};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin: ${theme.spacings.large};
    gap: ${theme.spacings.xhuge};

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
    text-align: center;
    margin-left: 3rem;

    @media screen and (min-width: 769px) and (max-width: 1450px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 1050px) and (min-width: 769px) {
      grid-template-columns: 1fr;
    }

    @media screen and (max-width: 520px) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

export const GridTextElement = styled.p`
  ${({ theme }) => css`
    background-color: ${theme.colors.mediumRed};
    color: ${theme.colors.white};
    text-align: center;
    border-radius: 0.5rem;
    width: 13rem;
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
