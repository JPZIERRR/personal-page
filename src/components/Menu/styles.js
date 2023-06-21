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

export const CloseIcon = styled.img`
  ${() => css``}
`;

export const MenuIcon = styled.img`
  ${() => css``}
`;
