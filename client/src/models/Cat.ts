export interface Cat {
  id: string;
  name: string;
  breed: string;
  age: number;
  photo_url: string;
}

export interface NewCat {
  name: string;
  breed: string;
  age: number;
  photo_url: string;
}
export interface CatToCard {
  image: string;
  name: string;
  breed: string;
  age: number;
  id: string,
  handleDelete: (catId: string) => Promise<void>
}


