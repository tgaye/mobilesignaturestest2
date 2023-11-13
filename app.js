document.getElementById('connectWallet').addEventListener('click', async () => {
    if (window.ethereum) {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            // Handle the accounts
            // Enable the send message button
            document.getElementById('sendMessage').disabled = false;
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('MetaMask is not installed!');
    }
});

document.getElementById('sendMessage').addEventListener('click', async () => {
    if (!window.ethereum) return alert('Please connect to MetaMask.');

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Prompt user to sign a message
        const signature = await signer.signMessage("Hello World");
        console.log('Signed Message:', signature);
    } catch (error) {
        console.error(error);
    }
});
