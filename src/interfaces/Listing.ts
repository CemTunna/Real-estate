export interface Listing {
  bathrooms: number;
  bedrooms: number;
  discountedPrice: number;
  furnished: boolean;
  geolocation: {
    lat: number;
    lng: number;
  };
  imgUrls: string[];
  location: string;
  name: string;
  offer: boolean;
  parking: boolean;
  regularPrice: number;
  type: string;
  timestamp: any;
  id: string;
}
