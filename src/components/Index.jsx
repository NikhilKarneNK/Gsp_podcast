import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageWrapper } from '../layout/pageswaller';
import { Index } from './Home'; 
import { RampDemo } from './demo';
export function Myapp(){
    return(
         <Router> 
            <PageWrapper> 
                <Routes path="/" element={<Index />}></Routes> 
                <Routes path="/RapDemo" element={<RampDemo />}></Routes>    
            </PageWrapper>
        </Router>
     
        
    )
}