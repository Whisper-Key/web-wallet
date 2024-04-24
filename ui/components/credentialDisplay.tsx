import { useEffect, useState } from "react";
import Section from "./section";
import { AddressExtensions } from "@/modules/AddressExtensions";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


const CredentialDisplay = () => {
	const [credential, setCredential] = useState([]);
	const [requestReturned, setRequestReturned] = useState(false);
	const [credentialType, setCredentialType] = useState('');
	const address = "B62qoQDqsgFc7aEToXe4wjxTeNCeNmzESXFiPd3sYs1MD7oZbyiPYEg";
	const searchParams = useSearchParams();
	const excludeKeys: string[] = ['hash', 'id'];

	useEffect(() => {

		(async () => {
			const type = searchParams.get('type');
			const id = searchParams.get('id');

			let apiURL = `${process.env.NEXT_PUBLIC_BASE_API}/api/credentials/named/${type}/${id}`;

			const response = await fetch(apiURL);
			const result = await response.json();
			setCredentialType(type!);
			setCredential(result);
			setRequestReturned(true);
		})();

	}, []);
	return (

		<Section>
			<div>
				<div className='place-items-center text-center'>
					<h2 className='text-xl font-semibold center'>{credentialType}</h2>
				</div>
				<div className="flex flex-col w-full mt-6">
					{credential != null &&
						<>
							{Object.keys(credential)
								.filter(key => !excludeKeys.includes(key))
								.map(key => (
									<div key={key} className="grid card mb-4">
										<p className='font-bold'>{key}</p>
										<p>{(credential as any)[key]}</p>
									</div>

								))}
						</>
					}

				</div>

				
			</div>
		</Section>

	)
}

export default CredentialDisplay
