import Head from 'next/head'
import Appbar from '@/components/appbar'
import BottomNav from '@/components/bottom-nav'
import { ZkShield } from 'zkshield'
import { AddressExtensions } from '@/modules/AddressExtensions'

interface Props {
	date: any
}

const DateDisplay = ({ date }: Props) => (
	<>
		{new Date(date.seconds * 1000).toDateString()}
	</>
)

export default DateDisplay;
