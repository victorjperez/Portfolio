import React from 'react';

import { Section, Title, NoPageBreak } from 'components/Section';
import PersonalProject from './PersonalProject';

import { preferredLanguage } from 'util/localize';

export default class PersonalProjects extends React.Component {

  render() {
    const { personalProjects: projects = [] } = this.props.person;

    if (projects.length === 0) {
      return false;
    }

    return (
      <Section allowPageBreak>
        <NoPageBreak>
          <Title>
            {{
              english: 'Projects & Publications',
              norwegian: 'Personlige prosjekter',
            }[preferredLanguage]}
          </Title>
          {projects.slice(0, 1).map(project =>
            <PersonalProject
              key={project._id}
              project={project}
            />
          )}
        </NoPageBreak>
        {projects.slice(1).map(project =>
          <PersonalProject
            key={project._id}
            project={project}
          />
        )}
      </Section>
    );
  }
}
