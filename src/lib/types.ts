import type { DocumentReference, Timestamp } from 'firebase/firestore';

export interface Listing {
	itemName: string;
	description?: string;
	createdAt: Timestamp;
	location: Location;
	photoURL: string;
	author: DocumentReference;
	uid: string;
}

export interface Location {
	latitude: number;
	longitude: number;
	geohash: string;
}

export interface User {
	name: string;
	email: string;
	phoneNumber: string | null;
	listings: DocumentReference[];
	uid: string;
}
