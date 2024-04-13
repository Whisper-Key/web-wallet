import Page from '@/components/page'
import Section from '@/components/section'

const Credential = () => (
	<Page>
		<Section>
			<div className='place-items-center text-center'>
				<h2 className='text-xl font-semibold center'>Passport</h2>
			</div>
			<div className="flex flex-col w-full mt-6">
				<div className="grid card mb-4 bg-base-300">
					<p className='font-bold'>First Name</p>
					<p>Anand</p>
				</div>
				<div className="grid card mb-4 bg-base-300">
					<p className='font-bold'>Last Name</p>
					<p>Singh</p>
				</div>
				<div className="grid card mb-4 bg-base-300">
					<p className='font-bold'>Number</p>
					<p>34622</p>
				</div>
				<div className="grid card mb-4 bg-base-300">
					<p className='font-bold'>Expiry Date</p>
					<p>2026-05-21</p>
				</div>
			</div>
		</Section>

	</Page>
)

export default Credential
