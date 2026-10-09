import React from 'react';
import { Index } from '../components/Home';
import { RampDemo } from '../components/demo';
import { About } from '../components/about';


export function PageWrapper({ children }){
  // Reset scroll height to 0,0 on route navigation

    return(
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <main style={{ flex: '1 0 auto', paddingTop: '80px' }}>
        {children}
         </main>
            <Index />
            <About />
            <RampDemo />
        </div>


    )
}
    
