import { useEffect } from 'react';
import { ConnectButton } from 'arweave-wallet-kit';
import { useNavigate } from 'react-router-dom';

const Wallet = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const walletStrategy = localStorage.getItem('wallet_kit_strategy_id');
        if (!walletStrategy) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className='border border-[#a09e9e] rounded-xl p-1'>
            <ConnectButton
                accent="rgb(63, 63, 63,0 )"
                profileModal={false}
                showBalance={true}
            />
        </div>
    );
};

export default Wallet;
