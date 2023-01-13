import React from 'react';
import Poc from '../poc/poc';

class Projects extends React.Component {
    render() {
        return <div className='h-max flex items-center pt-6 pb-6 flex-col' id="content">
            <h2 className='text-orange text-4xl justify-self-start mb-6'>Mes projets personnels</h2>
            <div className='flex lg:flex-row sm:flex-col flex-col justify-between'>
                <Poc id={1} title={'Automatisation aspirateur'} desc={`Automatisation d'un robot aspirateur en lui définissant un parcours dans une grille`} link={'https://daga123-robot.web.app/'}></Poc>
                <Poc id={2} title={'Jeu asteroïdes'} desc={`Petit jeu en 2d avec la librairie Phaser`} link={'https://daga123-asteroids.web.app/'}></Poc>
                <Poc id={3} title={'Grilles loto'} desc={`Affichage des résultats du loto, génération de grille, grille parfaite. Les données sont scrappées sur un site`} link={'https://daga123-loto.web.app/'}></Poc>
                <Poc id={4} title={'Programme TV'} desc={'Affichage du programme TV sur différents créneaux horaires'} link={'https://daga123-tv.web.app/'}></Poc>
            </div>
        </div>
            ;
    }
}

export default Projects;