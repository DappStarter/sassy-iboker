require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture story raise sad hole impulse light army gauge'; 
let testAccounts = [
"0x5d6a2128cbe7571a343905c4d492f2471f95ffd2fdc75b326d83cbc824def2cb",
"0xa44d6ae769f68a7633f766a34175863f20f38b0cc615c834d4e55cc19db4c99b",
"0xd8d33100bb8c392892c1c01e011d3ef4771098139a37843845221f331e432238",
"0x53773bceabe593f1026e99df3c12c6f5136eb261b55a786f524fe3e9e282d6d5",
"0x5365625cce4cf09281b211eef553914f7297fd232941358429ca87893f78d217",
"0x056e7a357c00e1f37695e3421a38f4849a6cb43b2357c6b13da2d9e36b1ea88e",
"0x54492d2a3d5a2417b7a5c2b5bac66aabe706dcc3d6dfc5fd91d2baadd0f627c6",
"0xf3cc1726e0f60126b3ccbe4f8af6e3d28afb1d38483fa01a0ccaffa5c8346644",
"0x0264a8da8b153835c5e7d40ce0e21f11d2d27724b3d9e90a61d740229a5e3584",
"0x002c271632eae212f7aee5bd5739baa477481a9460d6acff9392ee266b4d03d6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
