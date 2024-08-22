import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Banner from '@/components/banner/banner';
import SourceImage1 from '@/assets/img/image-source1.webp';
import Dropdown from '@/components/dropdown/dropdown';

const arrayDropdowns = [
    {title: 'Fiabilité', text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'},
    {title: 'Respect', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'},
    {title: 'Service', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'},
    {title: 'Sécurité', text: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}
]


export default function About() {
    return (
      <>
      <div className="container">
        <main className='wrapper'>
            <Navbar />

            <div className='main-content__wrapper'>
                <Banner background={SourceImage1} />
                
                <div className='wrapper__about-dropdowns'>
                    {arrayDropdowns.map((data, index) => (
                        <Dropdown key={index} title={data.title} text={data.text} />
                    ))}
                </div>
            </div>

        </main>
        <Footer />
        </div>
      </>
    );
  }