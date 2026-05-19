import React from 'react'
import HeroContainer from '../hero/HeroContainer'
import FilterContainer from '../ui/filters/FilterContainer'
import Browse from '../ui/browse/Browse'
import FeatureCrdas from '../ui/cards/FeatureCrdas'

const Home = () => {
  return (
    <>
    <HeroContainer/>
    <FilterContainer/>
    <Browse/>
    <FeatureCrdas/>
    </>
  )
}

export default Home