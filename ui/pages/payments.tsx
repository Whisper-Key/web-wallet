import Page from '@/components/page'
import Section from '@/components/section'

const Payments = () => (
	<Page>
		<Section>
			<div className='place-items-center text-center'>
				<h2 className='text-xl font-semibold center'>Outstanding Payments</h2>
			</div>
			<div className="flex flex-col w-full mt-6">
				<div className="grid card bg-base-300">
					<h3 className='text-lg'>Passport Credential</h3>
					<p className='text-sm'>Payment requested by issuer Bob Hope</p>
					<div className="card-actions mt-2 justify-end">
						<button className='btn btn-sm btn-primary mt-2 justify-end'>Pay</button>
					</div>
				</div>
				<div className="divider"></div>
				<div className="grid card bg-base-300">
					<h3 className='text-lg'>BSc Computer Science Credential</h3>
					<p className='text-sm'>Payment requested by issuer John Doe</p>
					<div className="card-actions mt-2 justify-end">
						<button className='btn btn-sm btn-primary mt-2 justify-end'>Pay</button>
					</div>
				</div>
				<div className="divider"></div>
			</div>
		</Section>
		<Section>
			<div className='place-items-center text-center'>
				<h2 className='text-xl font-semibold center'>Completed Payments</h2>
			</div>
			<div className="flex flex-col w-full mt-6">
				<div className="grid card bg-base-300">
					<h3 className='text-lg'>Passport Credential</h3>
					<p className='text-sm'>Paid on 2024-04-23 at 10:22 AM</p>
					<p className='text-sm'>Sent to Bob Hope</p>
				</div>
				<div className="divider"></div>
				<div className="grid card bg-base-300">
					<h3 className='text-lg'>BSc Computer Science Credential</h3>
					<p className='text-sm'>Paid on 2024-04-23 at 1:31 PM</p>
					<p className='text-sm'>Sent to Bob Hope</p>
				</div>
				<div className="divider"></div>
			</div>
		</Section>
	</Page>
)

export default Payments
