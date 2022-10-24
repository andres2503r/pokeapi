export interface IrootObject {
  result: Iresult[];
    
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