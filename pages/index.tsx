import { useEffect, useState } from 'react';

import { Iresult, IrootObject } from '../src/interface/pokemon.interface'           ;
import { Page                 } from '../src/pages/principal-page/primary.component';
import styles from '../src/styles/style.module.scss'



const pokemonURL = 'http://192.168.0.15:5002/api/pokemon'


const Home = () => {

  const [apidata, setapidata] = useState<IrootObject>({
    result: [],
    key: 0, 
    type: '', 
    props:undefined,
    status: false

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
        props:undefined,
        status: true

      })

    })
    .catch((error) => {
      console.log('error', error);

    })
  } 
  useEffect(() => {
    getdata();
  }, [])

  const readPokemon = (data: Iresult) => {

    console.log(data, 'read pokemon success');

    return (
      <>
        <h1>{data.name}</h1>
      </>
    )
    
  }

  return (

    <>
      <div className={styles.container} >

        <div className={styles.bar} >
          <div className={styles.title} >
            pokedex
          </div>
          <div>
            <input type="text" placeholder="Buscar..." className={styles.inputText} />
          </div>
        </div>

        <div className={styles.secondContainer} >
          <div className={styles.list} >
            <Page data={apidata.result} key={0} type={''} props={undefined} pokemondetails={readPokemon} />
          </div>

          <div className={styles.containerCard} >
            <div className={styles.containerBackgroup} />

            <div className={styles.card} >
              
            </div>
          </div>
        </div>

      </div>
    </>
    
    // <div>
    //   <Page data={apidata.result} key={0} type={''} props={undefined} />
    // </div>
  );
}
  
  

export default Home
