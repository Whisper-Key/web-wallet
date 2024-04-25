import { useEffect, useState } from "react";
import Section from "./section";
import { AddressExtensions } from "@/modules/AddressExtensions";
import Link from "next/link";
import ShortenedAddress from "./shortenedAddress";
import DateDisplay from "./dateDisplay";
import PaymentButton from "./paymentButton";


const PaymentList = () => {
	const [payments, setPayments] = useState([]);
	const [requestReturned, setRequestReturned] = useState(false);
	const address = "B62qoQDqsgFc7aEToXe4wjxTeNCeNmzESXFiPd3sYs1MD7oZbyiPYEg";

	useEffect(() => {

		(async () => {
			let apiURL = `${process.env.NEXT_PUBLIC_BASE_API}/api/escrow/owner/${address}`;

			const response = await fetch(apiURL);
			const result = await response.json();
			setPayments(result);
			setRequestReturned(true);
		})();

	}, []);
	return (
		<>
			<div className="flex flex-col w-full mt-6">

				{payments.map((payment: any, index: number) => (
					<div key={index} className="grid card">
						<h3 className='text-lg'>{payment.credential.credentialType} Credential</h3>
						<p className='text-sm'>Payment requested by issuer <ShortenedAddress address={payment.credential.issuer} /></p>
						<p className='text-sm'>{payment.paymentAmount ?? 0} MINA</p>
						<p className='text-sm'>Status: {payment.paymentStatus}</p>
						<p className='text-xs'>Requested on {new Date(payment.timestamp).toDateString()}</p>
						{payment.paymentStatus == 'processing' &&
						<div className="card-actions mt-2 justify-end">
							{/* <PaymentButton payment={payment} /> */}
							<button className='btn btn-sm btn-primary'>Pay</button>
						</div>}
						<div className="divider"></div>
					</div>

				))}
			</div>

			{requestReturned && payments.length === 0 &&
				<div className='mt-2'>
					<p className='text-zinc-600 dark:text-zinc-400'>
						You do not have any pending payments.
					</p>

				</div>}
			{!requestReturned && payments.length === 0 &&
				<div className='mt-2'>
					<p className='text-zinc-600 dark:text-zinc-400'>
						Loading payments...
					</p>

				</div>}
		</>

	)
}

export default PaymentList;
