import { auth, signOut } from '@/lib/auth';

export default async function SettingsPage() {
	const session = await auth();
	return (
		<div>
			{JSON.stringify(session)}
			<div>
				<form>
					<button>signOut</button>
				</form>
			</div>
		</div>
	);
}
