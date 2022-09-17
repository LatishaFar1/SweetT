import React, {useState} from 'react';
import axios from 'axios';
import {Button} from '@mui/material';

function NewTea() {

    const [form, setForm] = useState({
        name: '',
        img: ''
        // iced: ''
    })

    function handleChange(e){
        const { name, value} = e.target;

        setForm(prevForm => {
            return {
                ...prevForm, 
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        const newTea = {
            name: form.name,
            img: form.img,
            // iced: form.iced
        }

        axios.post('http://localhost:4000/new', newTea)
    }



  return (
    <div className='new-tea-form'>
        <form>
            <div>
                <label> Tea name:</label>
                <input type='text' onChange={handleChange} name='name' value={form.name}></input>
            </div>

            <div>
                <label> Image URL:</label>
                <input type='text' onChange={handleChange} name='img' value={form.img}></input>
            </div>

            {/* <div>
                <label> Is it iced?</label>
                <input type='checkbox' onChange={handleChange} name='iced' value={form.iced}></input>
            </div> */}
            
            <Button onClick={handleSubmit} className='button'>Submit</Button>
        </form>
    </div>
  )
}

export default NewTea