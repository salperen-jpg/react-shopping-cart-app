import React from 'react';
import Alert from './Alert';
import { useGlobalContext } from './context';

const SectionTitle = () => {
  const { alert } = useGlobalContext();
  return (
    <div className='section-title'>
      <h2>your bag</h2>
      <Alert />
      <div className='underline'></div>
    </div>
  );
};

export default SectionTitle;
