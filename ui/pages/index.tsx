import Page from '@/components/page'
import Section from '@/components/section'
import Link from 'next/link'

const Index = () => (
	<Page>
		<Section>

			<div className="card bg-base-100 mb-4 shadow-xl">
				<div className="card-body">
					<h2 className="card-title">Passport</h2>
					<p>Digital passport</p>
					<div className="card-actions mt-2 justify-end">
						<Link className='link' href="/credential">View</Link>
					</div>
				</div>
			</div>
			<div className="card bg-base-100 mb-4 shadow-xl">
				<div className="card-body">
					<h2 className="card-title">BSc Computer Science</h2>
					<p>Bacholers Degree in Computer Science</p>
					<div className="card-actions mt-2 justify-end">
					<Link className='link' href="/credential">View</Link>
					</div>
				</div>
			</div>

			
			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					You do not have any credentials yet. Please request a credential from an issuer.
				</p>

			</div>
		</Section>
	</Page>
)

export default Index
