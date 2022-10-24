import type { NextPage } from 'next'
import { FC, useEffect, useState } from 'react';
import { Iresult, IrootObject } from '../src/interface/pokemon.interface';
import { Page } from '../src/pages/principal-page/primary.component';



const pokemonURL = 'http://192.168.0.15:5002/api/pokemon'


const Home = () => {

  const [apidata, setapidata] = useState<IrootObject>({
    result: [],
    key: 0, 
    type: '', 
    props:undefined 
  })

  const getdata = async () => {
    await fetch(pokemonURL)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data)
      setapidata({
        result: data.result as Iresult[],
        key: 0, 
        type: '', 
        props:undefined
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
      <Page data={apidata.result} key={0} type={''} props={undefined} />
      <h1></h1>
    </div>
  );
}
  
  

export default Home
