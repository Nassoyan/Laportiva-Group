export interface BrandType {
    id: number;
    name: string;
    image_url: string;
    createdAt?: Date;
    updatedAt?: Date;
    setBrandId?:(value:number) => void
  }