import Page from '@/components/page'
import Section from '@/components/section'

const Inbox = () => (
	<Page>
		<Section>
			<div className='place-items-center text-center'>
				<h2 className='text-xl font-semibold center'>Notifications</h2>
			</div>
			<div className="flex flex-col w-full mt-6">
				<div className="grid card bg-base-300">
					<h3 className='text-lg'>Credential Issued</h3>
					<p className='text-sm'>You have been issued a credential by Bob Hope</p>
				</div>
				<div className="divider"></div>
				<div className="grid card bg-base-300">
					<h3 className='text-lg'>Payment required</h3>
					<p className='text-sm'>You have been requested to pay for a credential issued by Bob Hope</p>
				</div>
			</div>
		</Section>

	</Page>
)

export default Inbox
