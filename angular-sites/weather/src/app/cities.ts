//this is used for the Observable to map to - how the data should be formatted once recieved

export interface Cities {
    id: string,
    name: string,
    country: string,
    coord: {
      lon: string,
      lat: string
    }
  }