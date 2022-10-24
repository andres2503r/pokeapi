import type { NextPage } from 'next'
import { FC, useEffect, useState } from 'react';
import { Iresult, IrootObject } from '../src/interface/pokemon.interface';
import { Page } from '../src/pages/principal-page/primary.component';



const pokemonURL = 'http://192.168.0.15:5002/api/pokemon'


const Home = () => {

  const [apidata, setapidata] = useState<IrootObject>({
    result: [] 
  })

  const getdata = async () => {
    await fetch(pokemonURL)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data)
      setapidata({
        result: data.result as Iresult[]
      })
    })
    .catch((error) => {
      console.log('error', error);
    })
  } 
  useEffect(() => {
    getdata();
  }, [])

  return (
    
    <div>
      <Page data={apidata.result} />
      <h1>hola</h1>
    </div>
  );
}
  
  

export default Home
