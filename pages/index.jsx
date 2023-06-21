import { Menu } from '../src/components/Menu';
import { SectionAbout } from '../src/components/SectionAbout';
import { SectionProjects } from '../src/components/SectionProjects';

export default function Home() {
  return (
    <>
      <Menu />
      <SectionAbout />
      <SectionProjects />
    </>
  );
}
