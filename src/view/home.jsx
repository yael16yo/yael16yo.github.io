import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Cards from '@/components/cards/cards';
import Banner from '@/components/banner/banner';
import SourceImage2 from '@/assets/img/image-source2.webp';

export default function Root() {
    return (
      <>
        <main className='wrapper'>
            <Navbar />
            <div className='main-content__wrapper'>
              <Banner title='Chez vous, partout et ailleurs' background={SourceImage2}/>
              <Cards />
            </div>
        </main>
        <Footer />
      </>
    );
  }