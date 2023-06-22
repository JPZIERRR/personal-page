import { Footer } from '../src/components/Footer';
import { Menu } from '../src/components/Menu';
import { SectionAbout } from '../src/components/SectionAbout';
import { SectionContact } from '../src/components/SectionContact';
import { SectionProjects } from '../src/components/SectionProjects';

export default function Home() {
  return (
    <>
      <Menu />
      <SectionAbout id="sobre" />
      <SectionProjects id="projetos" />
      <SectionContact id="contato" />
      <Footer />
    </>
  );
}
