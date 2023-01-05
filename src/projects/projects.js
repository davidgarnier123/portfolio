import React from 'react';
import Poc from '../poc/poc';

class Projects extends React.Component {
    render() {
        return <div className='h-max flex items-center pt-6 pb-6 flex-col' id="content">
            <h2 className='text-orange text-4xl justify-self-start mb-6'>Mes projets personnels</h2>
            <div className='flex lg:flex-row sm:flex-col flex-col justify-between'>
                <Poc id={1} title={'Automatisation aspirateur'} desc={'bla bla bla bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla'}></Poc>
                <Poc id={2} title={'Jeu asteroïdes'} desc={'bla bla bla bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla'}></Poc>
                <Poc id={3} title={'Grilles loto'} desc={'bla bla bla bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla'}></Poc>
            </div>
        </div>
            ;
    }
}

export default Projects;