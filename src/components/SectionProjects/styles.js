import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryColor};
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;

    ${Heading} {
      padding-top: 5rem;
    }

    ${TextComponent} {
      color: ${theme.colors.white};
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${theme.spacings.large};
  `}
`;

export const LinkGrid = styled.a`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
  `}
`;
