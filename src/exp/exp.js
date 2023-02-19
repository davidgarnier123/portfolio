import React from 'react';
import { TypeAnimation } from 'react-type-animation';

class Exp extends React.Component {
    render() {
        return <div className='h-max flex justify-center items-center pt-6 pb-6 flex-col'>
            <h2 className='text-orange text-xl md:text-4xl justify-self-start pb-8 text-center drop-shadow-subTitle'>
                <TypeAnimation
                    sequence={[
                        '',
                        1000,
                        'Exp',
                        1000,
                        '<Expérience professionelle/>',
                        2000,
                        '<Expérience professionelle length="2"/>',
                        2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                />
            </h2>

            <div className='xl:w-3/5 lg:w-5/5 md:w-5/5 bg-clifford flex flex-col p-6 duration-300 hover:border-orange border-2 rounded-lg drop-shadow-[5px_5px_5px_rgba(6,6,6,0.75)]'>
                <div className='p-6 border-b-2 border-white'>
                    <h3 className='text-clair text-3xl mb-6'>Stage - 2019/2020</h3>
                    <div className='text-myWhite'>Dans le cadre de mon <a href="https://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers" target='_blanck' className='text-orange'>BTS Services informatiques aux organisations </a>
                        j'ai réalisé un stage de 10 semaines dans une <a className='text-orange'>startup à La Rochelle</a> en tant que développeur web.
                        <br></br>J'ai été intégré à un <a className='text-orange'>nouveau projet dans le domaine de la cybersécurité</a> qui avait pour objectif de protéger les données personnelles des utilisateurs.
                        <br></br>A partir d'une maquette j'avais pour mission de développer le front de la partie provisioning de la solution mais aussi de gérer la communication vers les différents logiciels qui gerent les différents paramètrages réseaux qui étaient développé par mes collègues backend.

                    </div>
                </div>

                <div className='p-6 border-b-2 border-white'>
                    <h3 className='text-clair text-3xl mb-6'>CDI - Juin 2020 à Février 2022</h3>
                    <div className='text-myWhite'>A la fin de mon BTS, j'ai commencé à chercher un poste de développer web et après avoir repris contacte avec l'entreprise dans laquelle j'ai effectué mon stage nous avons conclu un CDI ensemble. Cette aventure à durait presque deux ans mais l'entreprise à fermée ses portes en Février 2022.
                        <br></br><br></br>J'ai dans un premier temps continué de travailler sur le projet dans lequel j'avais effectué mon stage en ajoutant plein de fonctionnalités sur l'ensemble du projet avec nottament beaucoup de visualisation de données (graphiques, graphiques interactifs). J'ai participé également au développement du plugin pour navigateurs web lié à l'application.
                        <br></br>Je suis restais en quasi total autonomie sur ce projet pendant près d'un an.
                        <br></br><br></br>
                        Par la suite, j'ai rejoins le reste des développeurs sur le  <a className='text-orange'>projet principal</a> de l'entreprise dans le domaine du smart building. Une plateforme de service destinées aux résidents ainsi qu'aux gestionnaires des bâtiments.
                        <br></br>J'ai été affecté à une nouvelle application à destination des gestionnaires du bâtiments. Au vue des nouvelles fonctionallités j'ai dû faire évoluer la base de donnée ainsi que continuer de développer l'API qui été liée aux autres applications. il y avait à nouveau beaucoup de visualisation de données et des enjeux de performances avec beaucoup de données à traiter.


                    </div>


                </div>
                <div className='p-6 lg:w-3/5 md:w-5/5'>
                    <h3 className='text-clair text-2xl mt-6 mb-6'>Technologies utilisées :</h3>
                    <ul>
                        <span className='text-orange text-xl'>Front :</span>
                        <li className='ml-6 text-myWhite'>Framework Angular 10+</li>
                        <li className='ml-6 text-myWhite'>Javascript / Typescript</li>
                        <li className='ml-6 text-myWhite'>HTML / CSS</li>
                        <li className='ml-6 text-myWhite'>Visualisation de données : Chart.js / D3.js / Cytoscape.js</li>

                        <span className='text-orange text-xl'>Back :</span>
                        <li className='ml-6 text-myWhite'>NodeJS / ExpressJS</li>
                        <li className='ml-6 text-myWhite'>MQTT</li>
                        <li className='ml-6 text-myWhite'>ProtocolBuffer</li>
                        <li className='ml-6 text-myWhite'>ElasticSearch</li>
                        <li className='ml-6 text-myWhite'>Neo4j</li>
                        <li className='ml-6 text-myWhite'>WebSocket</li>

                        <span className='text-orange text-xl'>Environement de travail :</span>
                        <li className='ml-6 text-myWhite'>Debian</li>
                        <li className='ml-6 text-myWhite'>GitLab</li>
                        <li className='ml-6 text-myWhite'>AdobeXD</li>
                        <li className='ml-6 text-myWhite'>Trello / Slack</li>
                    </ul>
                </div>
            </div>
        </div>
            ;
    }
}

export default Exp;