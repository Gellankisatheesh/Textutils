import React, {useState} from "react";

 export default function Textform (props){

    const handleUpClick =()=>{
        //console.log("uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Convert it into UpperCase !","success");
    }
    const handleLoClick =()=>{
        //console.log("uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Convert it into LowerCase !","success");
    }
    const handleClearClick =()=>{
        //console.log("uppercase was clicked"+text);
        let newText = '';
        setText(newText)
        props.showalert("Clear Text !","success");
    }
    const handleCopy =()=>{
        let text = document.getElementById("my-Box");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showalert("Copy Text !","success");
    }

    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert("Removes Extra Spaces ! ","success");
    }


    const handleOnChange =(event)=>{
        //console.log("on change");
        setText(event.target.value)
        
    }
    const [text,setText]= useState("")
    return (
        <>
        <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="my-Box"></label>
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color:props.mode === 'dark'?'white':'#042743'}} id="my-Box" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview !"}</p>
        
    </div>
    </>
    )
 }