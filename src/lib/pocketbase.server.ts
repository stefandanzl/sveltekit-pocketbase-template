import { env } from '$env/dynamic/private';
import type { TypedPocketBase } from './types';
import PocketBase from 'pocketbase';
import { env as privateEnv } from '$env/dynamic/private';

// ***** SSR Only: Admin auth for privileged operations ***
export async function createAdminPb(): Promise<TypedPocketBase> {
	const adminPb = new PocketBase(env.PUBLIC_POCKETBASE_URL) as TypedPocketBase;

	const email = privateEnv.POCKETBASE_ADMIN_EMAIL;
	const password = privateEnv.POCKETBASE_ADMIN_PASSWORD;

	if (!email || !password) {
		throw new Error('POCKETBASE_ADMIN_EMAIL and POCKETBASE_ADMIN_PASSWORD must be set in .env for admin operations');
	}

	await (adminPb as any).collection('_superusers').authWithPassword(email, password);
	return adminPb;
}
// ***** End Admin Only ***
