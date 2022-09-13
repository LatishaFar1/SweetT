import { Button} from '@mui/material';
import React, {useEffect, useState} from 'react'
import NewTea from './NewTea';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';

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
        <Grid container spacing= {4} className='all-tea'>
            {tea.map(t =>

                    <Grid item  md>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                        <CardMedia
                            component="img"
                            height="170"
                            src={t.img}
                            alt="tea photo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {t.name}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        </Card>
                    </Grid>
            
            )}

        </Grid>
    <div className="hide-form">
        <Button onClick={handleForm} className='hide-form-btn'  style={{
        borderRadius: 35,
        backgroundColor: '#2a2a2a',
        padding: '25px',
        fontSize: '18px',
        color:'#ffffff', 
        margin: '0 auto', 
        display: 'flex'
    }}>Don't see one you like? Submit a new one!</Button>
         
            {hideForm ? <NewTea/> : null}
        
     

        </div>

    </div>
  )
}

export default ShowTea