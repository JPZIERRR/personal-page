import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    width: 100%;
    background: ${theme.colors.primaryColor};
    display: flex;
    align-items: center;

    ${TextComponent} {
      color: ${theme.colors.mediumRed};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}
`;

export const Text = styled.div`
  ${({ theme }) => css`
    display: grid;
  `}
`;

export const GridText = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  `}
`;
