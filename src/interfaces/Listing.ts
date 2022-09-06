export interface Listing {
  bathrooms: number;
  bedrooms: number;
  discountedPrice?: string;
  furnished: boolean;
  imgUrls: string[];
  location?: string;
  name: string;
  offer: boolean;
  parking: boolean;
  regularPrice: string;
  type: string;
  timestamp: any;
  userRef: string;
}
export interface Listings {
  id: string;
  data: Listing;
}
