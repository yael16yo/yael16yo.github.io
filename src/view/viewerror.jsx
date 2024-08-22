import React from 'react';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Error from "@/components/error/error";

export default function ViewError() {

  return (
    <>
      <main className='wrapper'>
        <Navbar />
        <Error />
      </main>
      <Footer />
    </>
  );
}