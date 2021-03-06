import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import localeString from './localeString';
import localeText from './localeText';

import person from './person';
import job from './job';
import personalProject from './personalProject';
import professionalProject from './professionalProject';
import company from './company';
import education from './education';
import volunteerWorkPosition from './volunteerWorkPosition';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
      localeString,
      localeText,
      person,
      job,
      professionalProject,
      personalProject,
      company,
      education,
      volunteerWorkPosition,
    ])
})
