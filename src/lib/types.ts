import type { DocumentReference } from 'firebase/firestore';

export interface Listing {
	itemName: string;
	description?: string;
	createdAt: Date;
	location: Location;
	photoURL: string;
	author: DocumentReference;
}

export interface Location {
	latitude: number;
	longitude: number;
	geohash: string;
}

export interface User {
	name: string;
	email: string;
	phoneNumber: string;
	listings: DocumentReference[];
	uid: string;
}
