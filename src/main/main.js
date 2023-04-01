import React from 'react';
import './main.css';
import CytoscapeComponent from 'react-cytoscapejs';
import cytoscape from 'cytoscape';
import nodeHtmlLabel from 'cytoscape-node-html-label';
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
const cola = require('cytoscape-cola');
cytoscape.use(cola);

// Initialiser la librairie nodeHtmlLabel avec CytoscapeComponent
nodeHtmlLabel(cytoscape);

class Main extends React.Component {

  render() {

    const elements = [
      { data: { id: 'front', label: 'Stack', type: 'main', img: angular }, position: { x: 0, y: 0 } },

      // front
      { data: { id: 'angular', label: 'Angular', type: 'techno', img: angular } },
      { data: { id: 'js', label: 'JavaScript', type: 'techno', img: js } },
      { data: { id: 'ts', label: 'Typescript', type: 'techno', img: typescript } },
      { data: { id: 'material', label: 'Material UI', type: 'techno', img: material } },
      { data: { id: 'html', label: 'HTML', type: 'techno', img: html } },
      { data: { id: 'css', label: 'CSS', type: 'techno', img: css } },
      // back
      { data: { id: 'node', label: 'Node.js', type: 'techno', img: node } },
      { data: { id: 'express', label: 'Express.js', type: 'techno', img: express } },
      { data: { id: 'mqtt', label: 'MQTT', type: 'techno', img: angular } },
      { data: { id: 'mongo', label: 'MongoDB', type: 'techno', img: mongo } },
      { data: { id: 'elastic', label: 'ElasticSearch', type: 'techno', img: elastic } },
      { data: { id: 'socket', label: 'Socket.io', type: 'techno', img: socket } },


      // edges
      { data: { source: 'angular', target: 'front', label: 'Edge from Node1 to Node2' } },
      { data: { source: 'js', target: 'front', label: 'Edge from Node1 to Node2' } },
      { data: { source: 'ts', target: 'front', label: 'Edge from Node1 to Node2' } },
      { data: { source: 'material', target: 'front', label: 'Edge from Node1 to Node2' } },
      { data: { source: 'html', target: 'front', label: 'Edge from Node1 to Node2' } },
      { data: { source: 'css', target: 'front', label: 'Edge from Node1 to Node2' } },


      { data: { source: 'node', target: 'front', label: 'Edge from Node1 to Node2' } },
      { data: { source: 'express', target: 'front', label: 'Edge from Node1 to Node2' } },
      { data: { source: 'mqtt', target: 'front', label: 'Edge from Node1 to Node2' } },
      { data: { source: 'mongo', target: 'front', label: 'Edge from Node1 to Node2' } },
      { data: { source: 'elastic', target: 'front', label: 'Edge from Node1 to Node2' } },
      { data: { source: 'socket', target: 'front', label: 'Edge from Node1 to Node2' } },


    ];
    const layout = {
      name: 'cola',
      randomize: true,
      avoidOverlap: true,
      nodeSpacing: 100,
      edgeLength: 200,
    };

    const style = [
      {
        selector: 'node',
        style: {
          'background-color': 'transparent',
          'label': 'data(label)',
          'color': '#EE6C4D',
          'width': 'label',
          'height': 'label',
          'shape': 'round-rectangle',
          'padding': '5px',
          'background-opacity': '0'
        }
      },
      {
        selector: 'node[type="techno"]',
        style: {
          'background-image': 'data(img)',
          'background-fit': 'cover',
          'background-position': '50% 50%',
          'text-valign': 'bottom',
          'font-size': '45vw',
          'padding': '2%',
          'width': '100%',
          'height': '100%',
          'text-margin-y': '25px',
        }
      },
      {
        selector: 'node[type="main"]',
        style: {
          'label': '',
          'border-width': '0.2vw',
          'border-style': 'solid',
          'border-color': 'white',
          'background-color': '#141414',
          'background-opacity': '0',
          'color': 'white'
        }
      },

      {
        selector: ':active',
        style: {


        }
      },
      {
        selector: 'edge',
        style: {
          'curve-style': 'bezier',
          'line-color': '#ccc',
          'maximal': 100,
          'width': 0.5
        }
      },
      {
        selector: 'node:select',
        style: {
          'overlay-opacity': 0
        }
      }
    ];
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
              <CytoscapeComponent elements={elements} style={{ width: '100%', height: '400px' }} nodeHtmlLabel={nodeHtmlLabel} layout={layout} stylesheet={style} cy={(cy) => {
                // Enregistrer la reference cy
                this.cyRef = cy;
                cy.userZoomingEnabled(false);
                cy.userPanningEnabled(false);
                cy.boxSelectionEnabled(false);

                // Ajouter le hover event
                cy.on('mouseover', 'node', (event) => {
                  const node = event.target;
                  // node.css('border-color', 'red');
                  // node.css('border-width', '3px');
                  node.style('label', node.data('label'));
                });

                // Ajouter l'event hover off
                cy.on('mouseout', 'node', (event) => {
                  const node = event.target;
                  // node.css('border-color', 'black');
                  // node.css('border-width', '1px');
                  node.style('label', '');
                });

              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
      ;
  }
}

export default Main;