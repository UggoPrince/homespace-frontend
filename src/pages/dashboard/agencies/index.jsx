// import { useState } from 'react';
// import Agencies from '../../../data/agency/Agencies';
// import { GET_USER_AGENCIES } from '../../../data/agency/queryString';
// import { CustomButton as Button } from '../../../components/Button';
// import useModal from '../../../components/Modal/useModal';
import AgencyBody from '../../agency/MyAgencyBody';

const MyAgencies = () => (
  <div className="w-full relative h-auto">
    <div className="w-full px-2 -mt-[23px]">
      <AgencyBody />
    </div>
  </div>
);
export default MyAgencies;
