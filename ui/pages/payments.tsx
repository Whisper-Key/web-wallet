import Page from '@/components/page'
import PaymentList from '@/components/paymentList'
import Section from '@/components/section'

const Payments = () => (
	<Page>
		<Section>
			<div className='place-items-center text-center'>
				<h2 className='text-xl font-semibold center'>Payments</h2>
			</div>
			<PaymentList />
		</Section>
	</Page>
)

export default Payments
