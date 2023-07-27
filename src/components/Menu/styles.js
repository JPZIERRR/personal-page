import styled, { css } from 'styled-components';

const menuVisible = theme => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${theme.colors.mediumRed};
    position: fixed;
    width: 100%;
    height: 6rem;
    font-size: 1.8rem;
    z-index: 5;

    @media (max-width: 768px) {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible(theme)}

      display: flex;
      flex-direction: column;
    }

    @keyframes fadeWhite {
      100% {
        color: white;
      }
    }
    @keyframes glitch {
      0% {
        clip: rect(94px, 9999px, 87px, 0);
      }
      5% {
        clip: rect(39px, 9999px, 90px, 0);
      }
      10% {
        clip: rect(13px, 9999px, 99px, 0);
      }
      15% {
        clip: rect(69px, 9999px, 67px, 0);
      }
      20% {
        clip: rect(71px, 9999px, 53px, 0);
      }
      25% {
        clip: rect(67px, 9999px, 59px, 0);
      }
      30% {
        clip: rect(22px, 9999px, 14px, 0);
      }
      35% {
        clip: rect(69px, 9999px, 33px, 0);
      }
      40% {
        clip: rect(79px, 9999px, 81px, 0);
      }
      45% {
        clip: rect(33px, 9999px, 54px, 0);
      }
      50% {
        clip: rect(19px, 9999px, 96px, 0);
      }
      55% {
        clip: rect(51px, 9999px, 90px, 0);
      }
      60% {
        clip: rect(1px, 9999px, 58px, 0);
      }
      65% {
        clip: rect(80px, 9999px, 25px, 0);
      }
      70% {
        clip: rect(69px, 9999px, 75px, 0);
      }
      75% {
        clip: rect(11px, 9999px, 56px, 0);
      }
      80% {
        clip: rect(50px, 9999px, 97px, 0);
      }
      85% {
        clip: rect(75px, 9999px, 9px, 0);
      }
      90% {
        clip: rect(44px, 9999px, 72px, 0);
      }
      95% {
        clip: rect(50px, 9999px, 24px, 0);
      }
      100% {
        clip: rect(8px, 9999px, 35px, 0);
      }
    }
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css``}
`;

export const LogoLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 700;
    cursor: pointer;
  `}
`;

export const NavBar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.huge};
    cursor: pointer;

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      text-align: center;
      top: 4rem;
      gap: ${theme.spacings.huge};
    }
  `}
`;

export const Navlinks = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: block;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 0.15rem;
      top: 3rem;
      background: ${theme.colors.white};
      transition: all 200ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.white};
    border: none;
    display: none;
    border-radius: 0.8rem;
    pointer-events: ${visible ? 'none' : 'all'};

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    &:first-child {
      margin-right: 10px;
    }
    &:last-child {
      color: ${theme.colors.mediumRed};
      background-color: ${theme.colors.mediumRed};
      animation: fadeWhite 4s forwards;
      animation-delay: 2s;
      position: relative;
    }
    &:last-child:after {
      content: 'deepend';
      position: absolute;
      left: 2px;
      top: 2px;
      clip: rect(0, 900px, 0, 0);
      background-color: ${theme.colors.mediumRed};
      color: ${theme.colors.white};
      animation: glitch 3s infinite alternate-reverse;
      animation-delay: 4s;
    }
    &:last-child:before {
      content: 'deepend';
      position: absolute;
      left: -2px;
      top: -2px;
      clip: rect(0, 900px, 0, 0);
      background-color: ${theme.colors.mediumRed};
      color: ${theme.colors.white};
      animation: glitch 3s infinite alternate-reverse;
      animation-delay: 4s;
    }
  `}
`;

export const CloseIcon = styled.img`
  ${() => css``}
`;

export const MenuIcon = styled.img`
  ${() => css``}
`;
