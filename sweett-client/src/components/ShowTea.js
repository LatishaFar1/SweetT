import { Button} from '@mui/material';
import React, {useEffect, useState} from 'react'
import NewTea from './NewTea';

function ShowTea() {

    const [tea, setTea] = useState([{
        name: '',
        img: ''
    }]);


    useEffect(() => {
        fetch('/tea')
        .then(response => {
            if(response.ok){
                return response.json()
            }
        })
        .then(jsonResponse => setTea(jsonResponse));
    })



    //HIDE FORM

   const [hideForm, setHideForm] = useState(false);

   function handleForm(e){
    setHideForm(!hideForm);
   }


  return (
    <div>
            {tea.map(t =>
                <div key={t.id}>
                   
                    <br/>
                    <img className='tea-img' src={t.img}></img>
                    <h2>{t.name}</h2>
                </div>
            )}


        <div>
        <Button onClick={handleForm}>Don't see one you like? Submit a new one!</Button>
         
            {hideForm ? <NewTea/> : null}
        
     

        </div>

    </div>
  )
}

export default ShowTea