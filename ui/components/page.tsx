import Head from 'next/head'
import Appbar from '@/components/appbar'
import BottomNav from '@/components/bottom-nav'
import { ZkShield } from 'zkshield'

interface Props {
	title?: string
	children: React.ReactNode
}

const Page = ({ title, children }: Props) => (
	<>
		{title ? (
			<Head>
				<title>Whisper Wallet | {title}</title>
			</Head>
		) : null}
<ZkShield  mainContainerClassName='login-main'
                innerContainerClassName='login-center'
				selectNetworkClassName='login-network'
                selectProviderClassName='login-provider'
                ignoreConnectForTesting={false}
                localAccount={'EKEnaPrfADEKKPAV5AT57sjD22qRQ7cuxEPGW9LafMwd638R2EUH'}
                >
		<Appbar />

		<main
			/**
			 * Padding top = `appbar` height
			 * Padding bottom = `bottom-nav` height
			 */
			className='mx-auto max-w-screen-md pt-20 pb-16 px-safe sm:pb-0'
		>
			<div className='p-6'>{children}</div>
		</main>

		<BottomNav />
		</ZkShield>
	</>
)

export default Page
