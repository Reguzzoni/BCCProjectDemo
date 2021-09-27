import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
  
  
const url = 
"http://www.africau.edu/images/default/sample.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  
export default function Test() {
  
  return (
    <>
    <div className="main" style={{ width: "100%", height: "100vh" }}>
    <iframe
            style={{ width: "100%", height: "100%" }}
            src={url}
            type='application/pdf'
            title='title'
          />
      </div>
    </>
  );
}