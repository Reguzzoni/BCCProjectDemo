import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
  
  
const url = 
"https://drive.google.com/file/d/1riZodHv4C0O49QfGHWhVJNMqxd2F_-44/view?usp=sharing"

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