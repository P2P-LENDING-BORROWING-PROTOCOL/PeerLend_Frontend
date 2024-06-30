const WalletConnected = ({ address, icon }) => {
    const formatAddress = (address) => {
        return `${address?.slice(0, 6)}...${address?.slice(-4)}`
    }
    return (
        <span className="flex items-center gap-1">
            <span className="w-6 h-6 rounded-full overflow-hidden">
                <img src={icon} alt="Icon" className="w-full h-full object-cover" />
            </span>
            <span className="text-gray-200">{formatAddress(address)}</span>
        </span>
    )
}

export default WalletConnected;