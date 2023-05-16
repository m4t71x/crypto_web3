require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/srjkmaFHvbXEUIr63eAfQ0GJ57hsWo6f',
      accounts: ['205575a613ecb5ae7d3a9824bd535a02903e9fb6fb8148ad76e22d75900f111e']
    }
  }
}