import React , {forwardRef} from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing, Footer } from '../../components';

const Services = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Pricing  />
    </div>
  )
});

export default Services;
