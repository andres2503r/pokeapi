import { FC } from "react"
import { Iresult, IrootObject } from "../../interface/pokemon.interface"

import styles from "../../styles/style.module.scss"

interface PageProps {
  data: Iresult[] 
  key: number
  type: string,
  props: any
}

export const Page: FC<PageProps>  = ({data} ) => {

  return (

    data.map((pokemon, index) => (
      <div key={index} >
        <button className={styles.btn} >
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
