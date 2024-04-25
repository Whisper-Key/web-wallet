import Head from 'next/head'
import Appbar from '@/components/appbar'
import BottomNav from '@/components/bottom-nav'
import { ZkShield } from 'zkshield'
import { AddressExtensions } from '@/modules/AddressExtensions'

interface Props {
	address: string
}

const ShortenedAddress = ({ address }: Props) => (
	<>
		<span style={{ cursor: "pointer" }}>{AddressExtensions.getShortAddress(address)}</span>
	</>
)

export default ShortenedAddress;
