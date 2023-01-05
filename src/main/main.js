import React from 'react';
import './main.css';

class Main extends React.Component {
    render() {
      return <div className='h-max flex justify-center items-center pt-6 pb-6 mt-20'>
            <div className='xl:w-3/5 lg:w-5/5 md:w-5/5 bg-clifford flex hover:border-orange border-2 duration-300 rounded-lg drop-shadow-[5px_5px_5px_rgba(6,6,6,0.75)]'>
                <div className='w-2/3 rounded-lg' id="portrait"></div>
                <div className='flex justify-start flex-col p-6'>
                    <span className='text-3xl text-clair'>Bonjour,</span>
                    <p className='mt-6 text-clair'>Je suis David Garnier, Développeur Web Fullstack, passionné par les nouvelles technologies et leurs facultés à améliorer la productivité des entreprises. <br></br><br></br> 
                    Je suis actuellement à la recherche d'un nouvel emploi, n'hésitez pas à me contacter pour davantages d'informations.</p>
                    <hr className='mt-6 mb-6'></hr>
                    <div className='grid gap-4 grid-cols-2'>
                        <div className='flex'><span className='w-20 text-orange'>NOM :</span> <p className='text-clair font-bold'>David Garnier</p></div>
                        <div className='flex'><span className='w-20 text-orange'>JOB :</span> <p className='text-clair font-bold'>Développeur WEB</p></div>
                        <div className='flex'><span className='w-20 text-orange'>AGE :</span> <p className='text-clair font-bold'>29 Ans</p></div>
                        <div className='flex'><span className='w-20 text-orange'>VILLE :</span> <p className='text-clair font-bold'>La Rochelle</p></div>
                    </div>
                    <a className='bg-orange w-fit mt-8 text-center text-clair p-4 cursor-pointer rounded-lg duration-200 border-2 border-transparent hover:border-clair font-bold'>TELECHARGER CV</a>
                </div>
            </div>
        </div>
        ;
    }
}

export default Main;