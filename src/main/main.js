import React from 'react';
import './main.css';
import angular from '../assets/angular.png';
import typescript from '../assets/typescript.png';
import node from '../assets/node.png';
import express from '../assets/ExpressJS.png';
import js from '../assets/js.png';
import material from '../assets/material.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import elastic from '../assets/elastic.png';
import mongo from '../assets/mongo.png';
import socket from '../assets/socket.png';
import neo4j from '../assets/neo4j.png';
import d3 from '../assets/d3.png';
import cytoscape from '../assets/cytoscape.png';
import chartjs from '../assets/chartjs.png';


class Main extends React.Component {

  render() {

    const technos = [
      {
        name: 'HTML',
        img: html
      },
      {
        name: 'CSS',
        img: css
      },
      {
        name: 'JavaScript',
        img: js
      },
      {
        name: 'TypeScript',
        img: typescript
      },
      {
        name: 'Angular',
        img: angular
      },
      {
        name: 'Material-UI',
        img: material
      },
      {
        name: 'D3.js',
        img: d3
      },
      {
        name: 'Chart.js',
        img: chartjs
      },
      {
        name: 'Cytoscape',
        img: cytoscape
      },
      {
        name: 'Node.js',
        img: node
      },
      {
        name: 'Express.js',
        img: express
      },
      {
        name: 'Socket.io',
        img: socket
      },
      {
        name: 'Neo4J',
        img: neo4j
      },
      {
        name: 'ElasticSearch',
        img: elastic
      },
      {
        name: 'MongoDB',
        img: mongo
      }
    ]
    const download = () => {
      // using Java Script method to get PDF file
      fetch('CV.pdf').then(response => {
        response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'CV_David_GARNIER.pdf';
          alink.click();
        })
      })
    }
    return <div className='h-max flex justify-center items-center pt-6 pb-6 mt-10'>
      <div className='xl:w-3/5 lg:w-5/5 md:w-5/5  flex-col md:flex-col bg-cliffordLight md:bg-clifford flex duration-300 md:rounded-lg drop-shadow-shadow'>
        <div className='flex'>
          <div className='w-3/3 h-60 m-0 m-auto md:w-2/3 md:h-auto rounded-lg ' id="portrait"></div>
          <div className='flex justify-start flex-col p-6'>
            {/* <span className='text-3xl text-clair'>Bonjour,</span>
                    <p className='mt-6 text-clair'>Je suis David Garnier, Développeur Web Fullstack, passionné par les nouvelles technologies et leurs facultés à améliorer la productivité des entreprises. <br></br><br></br> 
                    Je suis actuellement à la recherche d'un nouvel emploi, n'hésitez pas à me contacter pour davantages d'informations.</p> */}
            <span className='text-3xl text-clair'>Bonjour,</span>

            <p className='mt-6 text-myWhite'>Je suis David Garnier, développeur web Fullstack passionné par les nouvelles technologies et leur impact sur la productivité des entreprises. Je suis à la recherche de nouvelles opportunités pour mettre en pratique mes compétences et continuer à apprendre. N'hésitez pas à me contacter pour plus d'informations.</p>
            <hr className='mt-6 mb-6'></hr>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
              <div className='flex'><span className='w-20 text-orange'>NOM :</span> <p className='text-clair font-bold'>David Garnier</p></div>
              <div className='flex'><span className='w-20 text-orange'>JOB :</span> <p className='text-clair font-bold'>Développeur WEB</p></div>
              <div className='flex'><span className='w-20 text-orange'>AGE :</span> <p className='text-clair font-bold'>29 Ans</p></div>
              <div className='flex'><span className='w-20 text-orange'>VILLE :</span> <p className='text-clair font-bold'>La Rochelle</p></div>
            </div>
            <p className='bg-orange w-full md:w-fit mt-8 text-center text-clair p-4 cursor-pointer rounded-lg duration-200 border-2 border-transparent hover:border-clair font-bold hover:-translate-y-2' onClick={download}>TELECHARGER CV</p>
          </div>
        </div>
        <div>
          <div className='pb-8 pt-4 md:p-6 md:pt-2 w-full flex'>
            <div className='flex flex-col w-full'>
              {/* <ul>
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
                        </ul> */}
              <div className='flex justify-evenly flex-wrap'>
                {technos.map((techno, index) => (
                  <div key={index} className='flex flex-col m-4 text-center group'>
                    <img src={techno.img} alt={techno.name} className='w-12 h-12 m-0 m-auto duration-500 group-hover:rotate-360'/>
                    <span className='text-clair duration-200 group-hover:translate-y-1'>{techno.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      ;
  }
}

export default Main;