export type Togo = {
  readonly id: number;
  done: boolean;
  location: string;
  position: {
    lat: number;
    lng: number;
  };
  tag: string;
};
