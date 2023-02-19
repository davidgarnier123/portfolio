import React from 'react';
import { TypeAnimation } from 'react-type-animation';

class Header extends React.Component {
    render() {
      return <div className='h-max bg-clifford flex justify-center items-center flex-col pt-6 pb-6'>
          <h1 className='align-middle text-4xl md:text-5xl font-mono font-semibold text-orange drop-shadow-title'>David Garnier</h1>
          <p className='text-xl md:text-4xl text-clair mt-5' >
          <TypeAnimation
                    sequence={[
                        '',
                        500,
                        'Dé',
                        1000,
                        '<Développeur WEB/>',
                        2000,
                        '<Développeur WEB type="FullStack"/>',
                        2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                />
                </p>
        </div>;
    }
}

export default Header;