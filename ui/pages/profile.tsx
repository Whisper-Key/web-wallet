import Page from '@/components/page'
import Section from '@/components/section'
import { useEffect, useState } from 'react';


export default function Profile() {
	const [walletAddress, setWalletAddress] = useState('B62qoQDqsgFc7aEToXe4wjxTeNCeNmzESXFiPd3sYs1MD7oZbyiPYEg');

	
	  useEffect(() => {
		
		(async () => {
			if((window as any)!.zkshield!.connected!) {
				const address = await (window as any)!.zkshield!.address;
				setWalletAddress(address);
		  }
		})();
	  }, []);
	const tempAddress = 'B62qoQDqsgFc7aEToXe4wjxTeNCeNmzESXFiPd3sYs1MD7oZbyiPYEg';
	const shortenAddress = (address: string) =>  {
    
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
				<div className="grid card mb-2 bg-base-300">
					<h3 className='text-lg'>Address</h3>
					<p className='text-sm'>{shortenAddress(walletAddress)}</p>
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

	</Page>)
}