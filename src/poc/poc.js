import React from 'react';
import poc1 from '../assets/poc1.PNG';
import poc2 from '../assets/poc2.PNG';
import poc3 from '../assets/poc3.PNG';
import poc4 from '../assets/poc4.PNG';
import poc5 from '../assets/poc5.PNG';


class Poc extends React.Component {

  images = [
    {
      id: 1,
      img: poc1
    },
    {
      id: 2,
      img: poc2
    },
    {
      id: 3,
      img: poc3
    },
    {
      id: 4,
      img: poc4
    },
    {
      id: 5,
      img: poc5
    }
  ]

  render() {

    return <div data-observe className='delay-300 h-auto flex p-2 m-6 hover:border-orange duration-300 border-2 bg-cliffordLight md:bg-clifford hover:-translate-y-2 rounded-lg drop-shadow-[5px_5px_5px_rgba(6,6,6,0.75)] '>
      <div className="max-w-sm overflow-hidden ">
        <div className="font-bold text-xl mb-2 text-clair flex justify-between">{this.props.title} <a className='text-orange cursor-pointer hover:underline text-lg' href={this.props.github} target='_blank'>GitHub</a></div>
        <a href={this.props.link} target='_blank'><img className="w-full cursor-pointer rounded-lg" src={this.getImage(this.props.id)} alt="poc image" /></a>
        <div className='py-2 mt-2'>
          { this.props.technos.map( (item, i) => {
          return <span className='text-orange mr-5 border-orange border border-myWhite p-1 rounded-lg text-sm pl-2 pr-2 whitespace-nowrap' key={i}>
                    {item}
                </span>
            })
          }
        </div>
        <div className="px-6 py-3 flex flex-wrap">
          <p className="text-myWhite">
            {this.props.desc}
          </p>
        </div>
      </div>
    </div>
      ;
      
  }

  getImage = (id) => {
    return this.images.find((a) => a.id === id).img
  }
}

export default Poc;