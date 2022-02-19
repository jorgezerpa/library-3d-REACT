import React from 'react'

import Section from '../../components/Section/Section';

const FrontendSection = ({books}) => {
  return (
        <Section books={books} sectionName='Frontend'></Section>
  )
}

export default FrontendSection