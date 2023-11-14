let provider;
let signer;

document.getElementById('connectWallet').addEventListener('click', async () => {
  provider = new WalletConnectProvider.default({
    infuraId: "3bc53c38485841ce9cfa1f539ebc4cfc" // Replace with your Infura ID
  });

  await provider.enable();
  const web3Provider = new ethers.providers.Web3Provider(provider);
  signer = web3Provider.getSigner();

  document.getElementById('signMessage').disabled = false;
});

document.getElementById('signMessage').addEventListener('click', async () => {
  try {
    const response = await fetch('/api/createMessage', { method: 'POST' });
    const data = await response.json();
    const signature = await signer.signMessage(data.message);
    document.getElementById('signature').innerText = `Signature: ${signature}`;
  } catch (error) {
    console.error('Error:', error);
  }
});
