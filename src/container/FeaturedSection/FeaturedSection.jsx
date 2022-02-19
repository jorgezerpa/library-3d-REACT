import React from 'react'

import Section from '../../components/Section/Section';

const FeaturedSection = ({books}) => {
  return (
    <Section books={books} sectionName='New'></Section>
  )
}

export default FeaturedSection