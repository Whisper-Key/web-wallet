import Page from '@/components/page'
import Section from '@/components/section'

const Profile = () => (
	<Page>
		<Section>
			<div className='place-items-center text-center'>
				<h2 className='text-xl font-semibold center'>Profile</h2>
			</div>
			<div className="flex flex-col w-full mt-6">
				<div className="grid card mb-2 bg-base-300">
					<h3 className='text-lg'>Address</h3>
					<p className='text-sm'>B62qoQDqsg...7oZbyiPYEg</p>
				</div>
				<div className="grid card bg-base-300">
					<h3 className='text-lg'>Balance</h3>
					<p className='text-sm'>325 MINA</p>
				</div>
				<div className="divider"></div>
			</div>
			<div className='place-items-center text-center'>
				<h2 className='text-xl font-semibold center'>Present Credential</h2>
			</div>
			<div className="flex flex-col w-full mt-6 place-items-center text-center">
				<div className="grid card bg-base-300">
					<div className="join">
						<input className="input input-bordered join-item" placeholder="Enter request ID" />
						<button className="btn join-item btn-primary">Scan</button>
					</div>
				</div>

			</div>
		</Section>

	</Page>
)

export default Profile
