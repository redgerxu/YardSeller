import { goto } from '$app/navigation';
import { db } from '$lib/firebase.js';
import type { Listing } from '$lib/types.js';
import { doc, getDoc } from 'firebase/firestore';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const ref = doc(db, 'listings/' + params.slug);

	const snapshot = await getDoc(ref);

	if (snapshot.exists()) {
		const data = snapshot.data();

		return { ...data, uid: snapshot.id } as Listing;
	} else {
		goto('/404');
	}
}
