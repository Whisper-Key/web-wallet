import NotificationsList from '@/components/notificationsList'
import Page from '@/components/page'
import Section from '@/components/section'

const Inbox = () => (
	<Page>
		<Section>
			<div className='place-items-center text-center'>
				<h2 className='text-xl font-semibold center'>Notifications</h2>
			</div>
			<NotificationsList />
			
		</Section>

	</Page>
)

export default Inbox
