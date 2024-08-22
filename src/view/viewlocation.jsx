import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ComponentLocation from "@/components/location/ComponentLocation";

export default function ViewSpecificLocation() {
    return (
        <>
          <main className='wrapper'>
                <Navbar /> 
                <ComponentLocation />
          </main>
          <Footer />
        </>
      );
}
