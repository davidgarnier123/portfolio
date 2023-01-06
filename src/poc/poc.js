import React from 'react';
import poc1 from '../assets/poc1.PNG';
import poc2 from '../assets/poc2.PNG';
import poc3 from '../assets/poc3.PNG';


class Poc extends React.Component {

  images = [
    {
      id : 1,
      img : poc1
    },
    {
      id : 2,
      img : poc2
    },
    {
      id : 3,
      img : poc3
    },
  ]

  render() {
    return <div className='h-max flex p-2 m-6 hover:border-orange duration-300 border-2 bg-clifford hover:-translate-y-2 rounded-lg drop-shadow-[5px_5px_5px_rgba(6,6,6,0.75)]'>
      <div class="max-w-sm overflow-hidden ">
        <div class="font-bold text-xl mb-2 text-clair flex justify-between">{this.props.title} <a className='text-orange cursor-pointer hover:underline text-lg'>GitHub</a></div>
        <a href={this.props.link} target='_blank'><img class="w-full cursor-pointer rounded-lg" src={this.getImage(this.props.id)} alt="poc image" /></a>
        <div class="px-6 py-4">
          <p class="text-myWhite">
            {this.props.desc}
          </p>
        </div>
      </div>
    </div>
      ;
  }

  getImage = (id) => {
    return this.images.find( (a) => a.id === id).img
  }
}

export default Poc;