import { db } from '$lib/firebase';
import type { Listing } from '$lib/types.js';
import { collection, getDocs } from 'firebase/firestore';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	const listings = collection(db, 'listings');

	const q = url.searchParams.get('query');

	const docs = await getDocs(listings);

	const data = docs.docs
		.map((doc) => {
			const d = doc.data();

			return { ...d, uid: doc.id } as Listing;
		})
		.filter((listing) => listing.description && listing.description.includes(q ?? ''));

	return { data: data };
}
