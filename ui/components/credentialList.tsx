import { useEffect, useState } from "react";
import Section from "./section";
import { AddressExtensions } from "@/modules/AddressExtensions";
import Link from "next/link";


const CredentialList = () => {
	const [credentials, setCredentials] = useState([]);
	const [requestReturned, setRequestReturned] = useState(false);
	const address = "B62qrZhVxxpGGTjWXntrDh5qCC3kboUQ1zjnayYLppMZZ4vfdX8F3x5";

	useEffect(() => {

		(async () => {
			let apiURL = `${process.env.NEXT_PUBLIC_BASE_API}/api/credentials/owned/${address}`;

			const response = await fetch(apiURL);
			const result = await response.json();
			setCredentials(result);
			setRequestReturned(true);
		})();

	}, []);
	return (

		<Section>
			<div>
			{credentials.map((credential: any, index: number) => (
				<div key={index} className="card bg-base-100 mb-4 shadow-xl">
					<div className="card-body">
						<h2 className="card-title">{credential.credentialType}</h2>
						<p>{credential.description}</p>
						<div className="card-actions mt-2 justify-end">
							<Link className='link' href={`/credential?type=${credential.credentialType}&id=${credential.owner}`}>View</Link>
						</div>
					</div>
				</div>

			))}
			{requestReturned && credentials.length === 0 && 
			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					You do not have any credentials yet. Please request a credential from an issuer.
				</p>

			</div> }
			{!requestReturned && credentials.length === 0 && 
			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Loading credentials...
				</p>

			</div> }
			</div>
		</Section>

	)
}

export default CredentialList
