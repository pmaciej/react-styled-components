import React , {forwardRef} from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing, Footer } from '../../components';

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Pricing  />
    </div>
  )
});

export default Home
