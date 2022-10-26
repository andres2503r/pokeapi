import { emit } from "process"
import { FC } from "react"
import { Iresult, IrootObject } from "../../interface/pokemon.interface"

import styles from "../../styles/style.module.scss"

interface PageProps {
  data: Iresult[] 
  key: number
  type: string
  props: any
  pokemondetails: Iresult
  status: boolean
}

export const Page: FC<PageProps>  = ({data, pokemondetails}  ) => {



  const emit = (term: Iresult) => {
    
    
    pokemondetails ?
    pokemondetails (term) :  
    alert ('not found')
    
  } 
  

  return (

    data.map((pokemon, index) => (
      <div key={index} >
        <button onClick={() => emit(pokemon)} className={styles.btn} >
          <>
            <img src={pokemon.img}/>
          </>
          
          <div className={styles.name} >
            {pokemon.name}
          </div>
        </button>
      </div>
    ))
  )

}
