export interface Images {
  status: boolean;
  data: Datum[];
}

export interface Image {
  status: boolean;
  data: Datum;
}

export interface Datum {
  _id: string;
  name: string;
  data: string;
  createdAt: string;
  updatedAt: string;
}
