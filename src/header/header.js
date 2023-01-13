import React from 'react';

class Header extends React.Component {
    render() {
      return <div className='h-max bg-clifford flex justify-center items-center flex-col pt-6 pb-6'>
          <h1 className='align-middle text-5xl font-mono font-semibold text-orange drop-shadow-title'>David Garnier</h1>
          <p className='text-3xl text-clair mt-5' >Développeur WEB</p>
        </div>;
    }
}

export default Header;