import Head from 'next/head'
import Appbar from '@/components/appbar'
import BottomNav from '@/components/bottom-nav'
import { AddressExtensions } from '@/modules/AddressExtensions'
import EscrowWorkerClient from '@/modules/payments/EscrowWorkerClient'
import {  } from 'o1js'
interface Props {
	payment: any
}

const PaymentButton = ({ payment }: Props) => {
	const transactionFee = 0.0001;
	const timeoutFn = (seconds: number) => {
		return new Promise(function (resolve: any) {
		  setTimeout(function () {
			resolve();
		  }, seconds * 1000);
		});
	  }
	  const payFee = async (payment: any) => {
		const zkAppAddress = payment.smartContractPublicKey
		console.log('Payment:', payment);
		console.log('zkappaddress', zkAppAddress);
		console.log('Preparing to do a transaction');
		if(zkAppAddress) {
		  console.log('Loading web worker...');
		  const zkappWorkerClient = new EscrowWorkerClient();
		  await timeoutFn(15);
	
		  console.log('Done loading web worker');
	
		  await zkappWorkerClient.setActiveInstanceToBerkeley();
	
		  const mina = (window as any).mina;
	
		  if (mina == null) {
			console.error('Mina extension not found');
			return;
		  }
	
		  const publicKeyBase58: string = (await mina.requestAccounts())[0];
		  const publicKey = PublicKey.fromBase58(publicKeyBase58);
	
		  console.log(`Using key:${publicKey.toBase58()}`);
	
		  console.log('Checking if fee payer account exists...');
	
		  const res = await zkappWorkerClient.fetchAccount({
			publicKey: publicKey!
		  });
		  const accountExists = res.error == null;
	
		  await zkappWorkerClient.loadContract();
	
		  console.log('Compiling zkApp...');
		  await zkappWorkerClient.compileContract();
		  console.log('zkApp compiled');
	
		  const zkappPublicKey = PublicKey.fromBase58(zkAppAddress);
	
		  await zkappWorkerClient.initZkappInstance(zkappPublicKey);
	
	
		  console.log('Creating a transaction...');
	
		  await zkappWorkerClient!.fetchAccount({
			publicKey: publicKey!
		  });
		  
		  await zkappWorkerClient!.depositTransaction(publicKey.toBase58());
	
		  console.log('Creating proof...');
		  await zkappWorkerClient!.proveUpdateTransaction();
	
		  console.log('Requesting send transaction...');
		  const transactionJSON = await zkappWorkerClient!.getTransactionJSON();
	
		  console.log('Getting transaction JSON...');
		  const { hash } = await (window as any).mina.sendTransaction({
			transaction: transactionJSON,
			feePayer: {
			  fee: transactionFee,
			  memo: ''
			}
		  });
	
		  const transactionLink = `https://berkeley.minaexplorer.com/transaction/${hash}`;
		  console.log(`View transaction at ${transactionLink}`);
	
		}
	
	  }
	
	return (
		<>
			<button onClick={() => payFee(payment)} className='btn btn-sm btn-primary'>Pay</button>
		</>)
}

export default PaymentButton;
