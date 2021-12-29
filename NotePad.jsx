
import React, { useState } from 'react';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import  NoteItem from './NoteItem';
import './index.css';


function NotePad()
{  
     const [show,setShow]=useState(false);
      const[text,setText]=useState("");
      const [Item,setItem]=useState([]);
      const [title,setTitle]=useState("");

 function ChangeText(e)
 {
     setText(e.target.value);
 }
 function ChangeTitle(e)
 {
     setTitle(e.target.value);
 }
 function Revert()
 {
   
    setShow(!show);
    setText("");
    setTitle("");
 }
 function Set()
 {const OItem={
     fname : `${title}`
    , lname:   `${text}`
 };
       setItem((oldItem)=>{
           return [...oldItem,OItem]
        })
      
    setShow(!show);
    setText("");
    setTitle("");
 }

 function DelItem(id){
     const t=parseInt(id);
  
        setItem((oldItem)=>{
            return oldItem.filter((val,index)=>{
                 return index !==t ;
            });
        });
 }
    return (<>
          
            <div className='note' >
                  {show ? <input  type="text" placeholder='Title' value={title}  onChange={ChangeTitle} /> :"" }
                  <textarea  className="textNote"  onChange={ChangeText} onClick={ ()=>{setShow(true)} } placeholder='Write a note....' 
                  value={text}/>
                    
                  <NoteAddIcon style={{float: "right",fontSize:"35px",marginTop:"-10px",color:"blue"}} onClick={Set} />
            </div>
                 <div style={{height:"80px"}}></div>
            <div className='body' onClick={Revert} >
             {
                    Item.map((val,index)=>{
                        
                            return (
                               
                                  <div style={{display:"inline"}}><NoteItem  key={index} id={index} Notetitle={val.fname} Notetext={val.lname}
                                      onSelect={DelItem}
                                  />
                                  </div>);
                    })
             }
            </div>
            </>);

             
}
export default NotePad;