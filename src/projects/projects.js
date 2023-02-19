import React from 'react';
import Poc from '../poc/poc';
import { TypeAnimation } from 'react-type-animation';

class Projects extends React.Component {
    render() {
        return <div className='h-max flex items-center pt-6 pb-6 flex-col' id="content">
            <h2 className='text-orange text-xl md:text-4xl justify-self-start mb-6 drop-shadow-subTitle'>
                <TypeAnimation
                    sequence={[
                        '',
                        1500,
                        'Pro',
                        1000,
                        '<Projets personnels/>',
                        2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                />
            </h2>
            <div className='flex lg:flex-row sm:flex-col flex-col justify-between'>
                <Poc id={1} title={'Automatisation robot'} desc={`Automatisation d'un robot aspirateur en lui définissant un parcours dans une grille`} link={'https://daga123-robot.web.app/'} technos={['Test technique', 'Angular']} github={'https://github.com/davidgarnier123/Robot'}></Poc>
                <Poc id={2} title={'Jeu asteroïdes'} desc={`Petit jeu en 2d avec la librairie Phaser`} link={'https://daga123-asteroids.web.app/'} technos={['Angular', 'Phaser']} github={'https://github.com/davidgarnier123/TV'}></Poc>
                <Poc id={3} title={'Grilles loto'} desc={`Affichage des résultats du loto, génération de grille, grille parfaite. Les données sont scrappées sur un site`} link={'https://daga123-loto.web.app/'} technos={['Angular', 'API REST', 'node.js']} github={'https://github.com/davidgarnier123/TV'}></Poc>
                <Poc id={4} title={'Programme TV'} desc={'Affichage du programme TV sur différents créneaux horaires'} link={'https://daga123-tv.web.app/'} technos={['Angular', 'API REST', 'node.js']} github={'https://github.com/davidgarnier123/TV'}></Poc>
            </div>
        </div>
            ;
    }
}

export default Projects;