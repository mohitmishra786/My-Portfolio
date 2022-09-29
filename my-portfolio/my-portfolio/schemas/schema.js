import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import pageInfo from './pageInfo'

import experience from './experience';
import pageInfo from './pageInfo';
import skill from './skill';
import social from './social';
import project from './project';



export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageInfo,
  ]),
});
