export interface Image {
    id: string;
    url: string;
    width: number;
		height: number;
    favourite: boolean
  }

export interface Favorite {
    id: number;
    user_id: string;
    image_id: string;
    sub_id: string | null;
    created_at: string;
    image: {
      id: string;
      url: string;
    };
  }
  
