import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 15vh;
    border-top: 5px solid ${theme.colors.mediumRed};
    background: ${theme.colors.alternativeColor};
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;

    ${TextComponent} {
      font-size: ${theme.font.size.medium};
      font-weight: 100;
    }
  `}
`;
