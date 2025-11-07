export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface ButtonProps {
  label: string;
  style: string;
  onClick: () => void;
}

export interface PillProps {
  filter: string;
}

export interface DivideProps {
  style: string;
}

export interface NAVITEMSFIELD {
  title: string,
  imgsrc: string,
}

export interface FooterNavLinks {
  title: string,
  links: NavLinks[],
}

export interface NavLinks {
  text: string,
  link: string 
}
export interface SearchField {
  tag: string,
  label: string,
  placeholder: string,
  type: string;
}
export interface InputProps {
  label: string;
  style?: string;
  placeholder: string;
  type: string;
}

export interface ReviewsProp {
  avatar: string,
  name: string,
  comment: string,
  rating: number,
}

export interface FormDetailsProp {
  label: string
  type: string
}

export interface PaymentDetailsProp {
  placeholder: string
  type: string
}

export interface PropertyProps {
  id: number;
  reviews?: ReviewsProp[],
  description: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  }
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  }
  image: string;
  discount: string;
}