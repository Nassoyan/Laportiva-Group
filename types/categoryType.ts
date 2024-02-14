
  
  export interface CategoryType {
    map(arg0: (cat: any) => import("react").JSX.Element): import("react").ReactNode;
    id: number;
    name: string;
    children?:[{id:number, name:string}]
  }