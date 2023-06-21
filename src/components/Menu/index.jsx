import { useState } from 'react';
import * as Styled from './styles';

export const Menu = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button visible={visible} onClick={() => setVisible(true)}>
        {' '}
        {visible ? (
          <Styled.CloseIcon src="/bx-x.svg" alt="Close menu" />
        ) : (
          <Styled.MenuIcon src="bx-menu.svg" alt="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <Styled.LogoContainer>
          <Styled.LogoLink>João Pedro</Styled.LogoLink>
        </Styled.LogoContainer>
        <Styled.NavBar>
          <Styled.Navlinks>Sobre</Styled.Navlinks>
          <Styled.Navlinks>Projetos</Styled.Navlinks>
          <Styled.Navlinks>Contato</Styled.Navlinks>
        </Styled.NavBar>
      </Styled.Container>
    </>
  );
};
