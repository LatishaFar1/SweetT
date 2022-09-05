import React, {useEffect, useState} from 'react'

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

  return (
    <div>
            {tea.map(t =>
                <div>
                    <h2>{t.name}</h2>
                    <img src={t.img}></img>
                </div>
            )}

     

    </div>
  )
}

export default ShowTea