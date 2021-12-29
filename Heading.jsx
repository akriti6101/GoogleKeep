import React from 'react';
import NotesIcon from '@material-ui/icons/Notes';
function Heading(){

       return (
           <>
             <div className="head">
             <h1 className="headh1"><NotesIcon  style={{fontSize : "40px",marginRight :"15px",marginLeft:"10px",marginTop:"15px"}}/></h1>
             <h1>Google Keep</h1>
              </div>
           </>
       );


}
export default Heading;