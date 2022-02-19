import React from 'react'

import Section from '../../components/Section/Section';

const BackendSection = ({books}) => {
  return (
  <Section books={books} sectionName='Backend'></Section>
  )
}

export default BackendSection