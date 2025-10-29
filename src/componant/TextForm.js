//import React from 'react'
import React, {useState} from "react"
// import { Form } from "react-bootstrap"


export default function TextForm(props) {


   const CopyText=()=>{
 
     var text=document.getElementById("myBox")
     if(text.value.trim() === ""){
      props.showAlert("Textbox is empty","warning" );
      return;
     }    
     
     text.select();
     text.setSelectionRange(0, 9999);
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied Text to Clipboard", "success")
   }
   
  const handleUpClick= ()=>{
    
          
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert(" Converted to UpperCase", "success")

  }

  const handleloClick= ()=>{

    // console.log("handle low was cliked");
    let newText=text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("Converted to lowerCase", "success");
  }

const handleOnChange = (event)=> {
  console.log("on change");
  setText(event.target.value);
  }

  const ClearText= ()=>{
    
    let newText= ("");
    setText(newText)
     props.showAlert("Text Field is Clear", "success");

     
  }
      const ClearSpace=()=>{
    let newText= text.replace(/\s+/g,' ');
    setText(newText)
        props.showAlert("white spaces are Cleared", "success");
  }

  

const [text, setText] = useState("")



  
  
return (
<div className="container" >
        
    <div className="mb-3" >
        
    <h1  style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
       <textarea className="form-control"   value= {text} onChange={handleOnChange}  
          style= {{backgroundColor: props.mode==='light'?'white':'#0b1229', color:props.mode==='light'?'black':'white'}}
          id="myBox" rows="8" ></textarea>
    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary " onClick={handleloClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={ClearText}>ClearText</button>
    <button className="btn btn-primary " onClick={CopyText}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={ClearSpace}>Clear WhiteSpaces</button>

    
</div>
     <div style={{color: props.mode==='dark'?'white':'black'}}>
     <h1>Summary of you text</h1>
     <p> {text.trim()===""?0 : text.trim().split(" ").length} words and {text.length} characters</p>
    <p> {0.08 * text.split(" ").length} minut to read</p>
    
    <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing to preview it here "}</p>

      </div>
      </div>



  )

 
}
