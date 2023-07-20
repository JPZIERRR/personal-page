import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    flex-wrap: wrap;
    background-image: url('/background.jpg');
    opacity: 0.95;
    background-attachment: fixed;

    ${TextComponent} {
      font-size: 1.6rem;
      white-space: nowrap;
      overflow: hidden;
      width: 30em;
      animation: type 8s steps(60, end);

      @media screen and (max-width: 480px) {
        width: 15rem;
      }
    }

    ${TextComponent}:nth-child(2) {
      animation: type2 8s steps(60, end);
    }

    @keyframes type {
      from {
        width: 0;
      }
    }

    @keyframes type2 {
      0% {
        width: 0;
      }
      50% {
        width: 0;
      }
      100% {
        width: 100;
      }
    }

    @keyframes blink {
      to {
        opacity: 0;
      }
    }
  `}
`;

export const Descprition = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.alternativeColor};
    color: ${theme.colors.white};
    font-size: 2.4rem;
    margin-top: 7rem;
    padding: 2.5rem;
    transition: all 0.5s;
    position: relative;
    border: 1px solid #fff;
    @media screen and (max-width: 480px) {
      padding: 1.5rem;
    }
  `}
`;
