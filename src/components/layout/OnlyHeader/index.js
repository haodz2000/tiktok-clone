import React from 'react';
import Header from '../components/Header';

const OnlyHeader = ({children}) => {
  return <div>
      <Header/>
      <div className='container'>
          <div className='content'>
            {children}
          </div>
      </div>
  </div>;
};

export default OnlyHeader;
