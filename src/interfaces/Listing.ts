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
  id?: string;
  userRef: string;
}
export interface Listings {
  listings: {
    id: string;
    data: Listing;
  }[];
}
