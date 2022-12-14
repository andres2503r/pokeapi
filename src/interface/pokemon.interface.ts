export interface IrootObject {
  result: Iresult[];
  key: number
  type: string,
  props: any
  status: boolean  
}
     
export interface Iresult {
  abilities: string[];
  height:    number;
  id:        number;
  img:       string;
  name:      string;
  types:     string[];
  weight:    number;
}