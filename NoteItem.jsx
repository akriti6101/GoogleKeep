import './index.css';
import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
function NoteItem(props) {
    const css = {
        height: "100px",
        width: "300px",
        marginTop: "30px",
        marginLeft: "20px",
        borderRadius: "6px",
        boxShadow: "2px 2px 2px 2px dimgray",
        display: "inline-block",
      
    };
    const css1={
        height: "40px",
        width: "200px",
        marginLeft: "20px"
       
    }

    
    return (
        <div  style={css} >
           <input  value={props.Notetitle} style={css1}/><br/>
           <textarea value={props.Notetext}  style={{width:"200px", marginLeft: "20px"}}
           />
           <DeleteIcon style={{marginRight:"10px"}}  onClick={()=>{
               
                 props.onSelect(props.id);

           }} />
        </div>
    );
}
export default NoteItem;