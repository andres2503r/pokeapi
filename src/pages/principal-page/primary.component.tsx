import { FC } from "react"
import { Iresult, IrootObject } from "../../interface/pokemon.interface"

  interface PageProps {
    data: Iresult[],
    key: number,
    type: string,
    props: any
  }

export const Page: FC<PageProps> = ({data}) => {


  return (
    data.map((pokemon, index) => (
      <div key={index}>
        <p>{pokemon.name}</p>
      </div>
    ))
  )

}
