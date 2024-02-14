
  
  export interface ProductType {
    id: number;
    name: string;
    price: number;
    images: Images[];
    artikul:number;
    code:string,
  }

  export interface Product {
    currentPage?:number;
    products:ProductType[];
    totalPages?:number
  }

  export interface Images {
    id:number;
    image_url:string
  }