import React from 'react';

class Stack extends React.Component {
    render() {
        return <div className='h-max flex items-center pt-6 pb-6 flex-col' id="content">
            <h2 className='text-orange text-2xl md:text-4xl justify-self-start mb-6 drop-shadow-subTitle'>
                Stack
            </h2>

            <div className='xl:w-3/5 lg:w-5/5 md:w-5/5 w-full flex-col md:flex-row bg-cliffordLight md:bg-clifford flex hover:border-orange md:border-2 duration-300 md:rounded-lg drop-shadow-shadow'>
                <div className='pb-8 pt-4 md:p-6 md:pt-2 lg:w-5/5 md:w-5/5 flex justify-evenly	'>
                    <div className='flex flex-col w-3/3'>
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
        </div>
            ;
    }
}

export default Stack;