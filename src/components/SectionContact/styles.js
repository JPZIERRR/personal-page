import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 80vh;
    width: 100%;
    background: ${theme.colors.alternativeColor};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 2rem;

    ${TextComponent} {
      font-size: ${theme.font.size.medium};
      font-weight: 100;
    }
  `}
`;

export const ContactHeader = styled.div`
  ${({ theme }) => css``}
`;

export const ContactLinks = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 98rem;
    margin-top: 4rem;
    flex-wrap: wrap;
    gap: ${theme.spacings.huge};
    align-items: center;
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.size.medium};
    font-weight: 400;
    display: flex;
    align-items: center;
    text-shadow: 2px 2px 1px #1f1f1f;
    transition: all 200ms ease-out;

    &:hover {
      text-decoration-line: underline;
      transform: scale(1.1);
    }
  `}
`;

export const img = styled.img`
  ${({ theme }) => css`
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin: 1.5rem;
  `}
`;
