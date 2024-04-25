import Page from '@/components/page'
import Section from '@/components/section'
import ShortenedAddress from '@/components/shortenedAddress';
import { useEffect, useState } from 'react';


export default function Profile() {
	const [walletAddress, setWalletAddress] = useState('B62qoQDqsgFc7aEToXe4wjxTeNCeNmzESXFiPd3sYs1MD7oZbyiPYEg');


	useEffect(() => {

		(async () => {
			if ((window as any)!.zkshield!.connected!) {
				const address = await (window as any)!.zkshield!.address;
				setWalletAddress(address);
			}
		})();
	}, []);
	const tempAddress = 'B62qoQDqsgFc7aEToXe4wjxTeNCeNmzESXFiPd3sYs1MD7oZbyiPYEg';
	const shortenAddress = (address: string) => {

		const prefix = address.slice(0, 6);
		const suffix = address.slice(-6);

		return `${prefix} ... ${suffix}`;
	}
	return (

		<Page>
			<Section>
				<div className='place-items-center text-center'>
					<h2 className='text-xl font-semibold center'>Profile</h2>
				</div>
				<div className="flex flex-col w-full mt-6">
					<div className="grid card mb-2 ">
						<h3 className='text-lg'>Address</h3>
						<p className='text-sm'>
							<ShortenedAddress address={walletAddress} />
						</p>
					</div>
					<div className="grid card">
						<h3 className='text-lg'>Balance</h3>
						<p className='text-sm'>325 MINA</p>
					</div>
				</div>
				<div className="divider"></div>
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
				<div className="divider"></div>
				<div className='place-items-center text-center'>
					<h2 className='text-xl font-semibold center'>Notifications</h2>
				</div>
				<div className="flex flex-col w-full mt-6 place-items-center text-center">
					<div className="grid card">
						<div className='mb-4'>
							<select className="select select-bordered w-full max-w-xs">
								<option>Select a contact method</option>
								<option>SMS</option>
								<option>WhatsApp</option>
								<option>Email</option>
							</select>
						</div>
						<div className='mb-4'>
							<input className="input input-bordered join-item" placeholder="Enter email address" />
						</div>
						<div className='mb-4'>
							<input className="input input-bordered join-item" placeholder="Enter mobile number" />
						</div>
						<button className="btn btn-primary">Save</button>
					</div>

				</div>
			</Section>

		</Page>)
}