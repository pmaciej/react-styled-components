import React , {forwardRef}from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing, Footer } from '../../components';

const Products = forwardRef((props, ref) => {
  return (
    <div ref={ref} >
      <InfoSection {...homeObjTwo}  />
    </div>
  )
})

export default Products