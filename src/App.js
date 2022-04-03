import React from 'react';
import './App.css';
import {QRCodeSVG,QRCodeCanvas} from 'qrcode.react';
const logo= require("./images/pollective.png")

function App() {
  let mainColor="#495371";
  const qrRef = React.useRef(null);
  function download(e,type){
    e.preventDefault();
    let canvas=qrRef.current.querySelector("canvas")
    if(type=="PNG"){
      let image=canvas.toDataURL("image/png")
      let anchor=document.createElement("a");
      anchor.href=image;
      anchor.download="qr-pollective.png"
      document.body.appendChild(anchor);
      anchor.click()
      document.body.removeChild(anchor)
      React.setUrl("")
    }else{
      var svg_data = document.getElementById("svg") //put id of your svg element here
      const svgXML = new XMLSerializer().serializeToString(svg_data);
      const dataUrl = "data:image/svg," + encodeURIComponent(svgXML);
    
      const anchor = document.createElement("a");
      anchor.href = dataUrl;
      anchor.download = `qr-code.svg`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      } 

  }
  return (
    <div className="App">
      <div className='container'  ref={qrRef}>
      <QRCodeCanvas level='H' className="canvasSVG"  fgColor='#495371' imageSettings={{
         src:logo,
         size:500,
         excavate:true,
         height:400*0.1,
         width:400*0.1
       } }
       value="https://www.youtube.com/watch?v=xvFZjo5PgG0" />
      <QRCodeSVG id="svg" className="canvasPNG" level='H' fgColor='#495371' imageSettings={{
         src:logo,
         size:500,
         excavate:true,
         height:400*0.1,
         width:400*0.1
       } }
       value="https://www.youtube.com/watch?v=xvFZjo5PgG0" />
{/*        <span className='poweredBy'>Powered By Pollective</span> */}
      </div>
      <button className='pngButton' onClick={(e)=>download(e,"PNG")}>Download As PNG</button>
      <button className='svgButton' onClick={(e)=>download(e,"svg")}>Download As SVG</button>

    </div>

  );
}

export default App;
