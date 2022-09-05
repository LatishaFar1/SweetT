import React, {useState} from 'react';

function NewTea() {

    const [form, setForm] = useState({
        name: '',
        img: ''
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
        console.log(form);
    }



  return (
    <div>
        <form>
            <div>
                <label> Tea name:</label>
                <input type='text' onChange={handleChange} name='name' value={form.name}></input>
            </div>

            <div>
                <label> Image URL:</label>
                <input type='text' onChange={handleChange} name='img' value={form.img}></input>
            </div>

            <button onClick={handleSubmit}>Submit Tea</button>
        </form>
    </div>
  )
}

export default NewTea