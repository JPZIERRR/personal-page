import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import {
  useGithubAutomatedRepos,
  ProjectIcon,
  StackIcon,
} from 'github-automated-repos/index';
import { useEffect, useState } from 'react';

export const SectionProjects = () => {
  const { dataReposGithub } = useGithubAutomatedRepos();
  const [repository, setRepository] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/JPZIERRR/repos')
      .then(res => res.json())
      .then(data => setRepository(dataReposGithub(data, 'pinned')));
  }, [dataReposGithub]);

  return (
    <Styled.Container id="projetos">
      <Styled.Title>
        <Heading as="h2" size="big">
          Projetos
        </Heading>
      </Styled.Title>
      <Styled.Grid>
        {repository.map(item => {
          return (
            <Styled.GridElement key={item.id}>
              {/*Project Icon*/}
              {item.topics.map(icon => {
                return (
                  <ProjectIcon
                    key={icon}
                    className="project_Icon"
                    iconItem={icon}
                  />
                );
              })}
              {/*html Url*/}
              <Styled.LinkGrid href={item.html_url}>
                <Heading size="big">{item.name}</Heading>
              </Styled.LinkGrid>
              <Styled.Description>
                <TextComponent>{item.description}</TextComponent>
              </Styled.Description>

              <Styled.LinkGrid href={item.homepage}>
                <Heading size="small">Homepage</Heading>
              </Styled.LinkGrid>
              <Styled.Icons>
                {item.topics.map(icon => {
                  return (
                    <StackIcon
                      key={icon}
                      className="stack_Icon"
                      iconItem={icon}
                    />
                  );
                })}
              </Styled.Icons>
            </Styled.GridElement>
          );
        })}
      </Styled.Grid>
    </Styled.Container>
  );
};
