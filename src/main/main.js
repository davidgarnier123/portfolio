import React from 'react';
import './main.css';

class Main extends React.Component {
    render() {
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
            <div className='xl:w-3/5 lg:w-5/5 md:w-5/5  flex-col md:flex-row bg-cliffordLight md:bg-clifford flex hover:border-orange md:border-2 duration-300 md:rounded-lg drop-shadow-[5px_5px_5px_rgba(6,6,6,0.75)]'>
                <div className='w-3/3 h-60 m-0 m-auto md:w-1/3 md:h-auto rounded-lg ' id="portrait"></div>
                <div className='flex justify-start flex-col p-6'>
                    <span className='text-3xl text-clair'>Bonjour,</span>
                    <p className='mt-6 text-clair'>Je suis David Garnier, Développeur Web Fullstack, passionné par les nouvelles technologies et leurs facultés à améliorer la productivité des entreprises. <br></br><br></br> 
                    Je suis actuellement à la recherche d'un nouvel emploi, n'hésitez pas à me contacter pour davantages d'informations.</p>
                    <hr className='mt-6 mb-6'></hr>
                    <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
                        <div className='flex'><span className='w-20 text-orange'>NOM :</span> <p className='text-clair font-bold'>David Garnier</p></div>
                        <div className='flex'><span className='w-20 text-orange'>JOB :</span> <p className='text-clair font-bold'>Développeur WEB</p></div>
                        <div className='flex'><span className='w-20 text-orange'>AGE :</span> <p className='text-clair font-bold'>29 Ans</p></div>
                        <div className='flex'><span className='w-20 text-orange'>VILLE :</span> <p className='text-clair font-bold'>La Rochelle</p></div>
                    </div>
                    <a className='bg-orange w-full md:w-fit mt-8 text-center text-clair p-4 cursor-pointer rounded-lg duration-200 border-2 border-transparent hover:border-clair font-bold hover:-translate-y-2' onClick={download}>TELECHARGER CV</a>
                </div>
            </div>
        </div>
        ;
    }
}

export default Main;