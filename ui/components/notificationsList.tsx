import { useEffect, useState } from "react";
import Section from "./section";
import { AddressExtensions } from "@/modules/AddressExtensions";
import Link from "next/link";
import { title } from "process";


const NotificationsList = () => {
	const [notifications, setNotifications] = useState([]);
	const [requestReturned, setRequestReturned] = useState(false);
	const address = "B62qoQDqsgFc7aEToXe4wjxTeNCeNmzESXFiPd3sYs1MD7oZbyiPYEg";

	const messageTypes: any = {
		"issued": { title: "Credential Issued", getMessage: (notification: any) => `You have been issued a credential by ${notification.owner}` },
		"created": { title: "Credential Created", getMessage: (notification: any) => `You have been issued a created` },
		"escrow": { title: "Payment required", getMessage: (notification: any) => `Payment required for ${notification.credentialName}` },
	}

	const fetchNotifications = async () => {
		let apiURL = `${process.env.NEXT_PUBLIC_BASE_API}/api/inbox/${address}`;
	
		const response = await fetch(apiURL);
		const result = await response.json();
		setNotifications(result);
		setRequestReturned(true);
	}
	
	useEffect(() => {

		(async () => {
			await fetchNotifications();
		})();

	}, []);

	const setNotifcationsAsSeen = async (owner: string, notifcations: string[]): Promise<any> => {
        const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API}/api/inbox/seenby/${owner}`;
		console.log(notifcations);
        try {
            const response = await fetch(apiUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(notifcations),
			});
            return response.json();
        } catch (error) {
            console.error('Error updating profile information:', error);
            throw error;
        }
    };


	const clearNotifications = async () => {
		await setNotifcationsAsSeen(address, notifications.map((notification: any) => notification.id));
		await fetchNotifications();
	  };
	return (

		<Section>
                      <button onClick={clearNotifications} className="btn btn-xs">Clear</button>

			<div className="flex flex-col w-full mt-6">
				
				{notifications.map((notification: any, index: number) => (
					<div key={index} className="grid card">
						<h3 className='text-lg'>{notification.credentialName} {messageTypes[(notification.type as string)!].title}</h3>
						<p className='text-sm'> {messageTypes[(notification.type as string)!].getMessage(notification)}</p>
					<div className="card-actions mt-2">
						
						<p className='text-xs'> {new Date(notification.created.seconds * 1000).toDateString()}</p>
</div>
						<div className="divider"></div>
					</div>


				))}
				{requestReturned && notifications.length === 0 &&
					<div className='mt-2'>
						<p className='text-zinc-600 dark:text-zinc-400'>
							You do not have any new notifications.
						</p>

					</div>}
				{!requestReturned && notifications.length === 0 &&
					<div className='mt-2'>
						<p className='text-zinc-600 dark:text-zinc-400'>
							Loading notifications...
						</p>

					</div>}
			</div>
		</Section>

	)
}

export default NotificationsList;

