import React from 'react'
import { useEffect,useState } from 'react'

function Games() {


    const [personajes,setPersonajes]= useState([])

    useEffect(()=>{

        let controller = new AbortController()
    let options ={
        method: 'GET',
        headers: {
            'content_type':'application/json'
        },
        signal: controller.signal
    }

    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,183',options)
    .then(response => response.json())
    .then(data =>{

     console.log(data);
     setPersonajes(data)

    })
    .catch(err =>console.log(err))
    .finally(()=>controller.abort())


    },[])


  return (
   <> <section className='games'>
   {personajes.map(personaje=>{

    return <div key={personaje.id} className='contenedor__games'>
        <div className='games__foto'>
        <img className='games__img'  src={personaje.image} alt="personaje" />
        </div>
    <h1 className='games__h1'>{personaje.name}</h1>
    </div> 

    

   }) }
   </section>
   </>
  )
}

export default Games