require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember exchange grace only force spring'; 
let testAccounts = [
"0xccbbddc94e31c057fc54f3bcc1aebbed9fc2e9668c37f08d6672e1c24fb55f9d",
"0x56ce858fd1d2d4587aa38cccda0490c174d93e1f69c6762d32dd0ec75a96cdf4",
"0x3228cb5de0e3e4b0c41b65681c37f41c85fe12cbbd3c750125d1a50ba135e6f5",
"0xf2b179f76ed1f7e0212c5ab797e80beda0aea8c4a80cf4faf85dc175c83a164e",
"0xce1e7b1b13e439b7a5eed8d35e02eed5b89d2f434ccedd74ce15e9958837bd78",
"0xc470765c899d342cc5f2512f53f4679aceae7156a0b193e1508e6e81c4b5cc2d",
"0x4a827a281024cba67b3cc6bfc20d5db1661a47fd72d9f18f12e4ff36fd56cdac",
"0x59d0453cc6e08b9c950a4fd3ca11c687b563fb83a269e6449f5bf43fa64bd3c0",
"0xfefcddd5b26d4dbb2f4cb485f07bd5991b4f0e0078e48e55b4c295709f63b8cd",
"0x363a1a4a220b678b9bc516734b8dfb602a5b9925b1ace264e9802e4b32ef2241"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

