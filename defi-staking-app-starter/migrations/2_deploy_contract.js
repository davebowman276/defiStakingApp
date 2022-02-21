const Tether = artifacts.require('Tether')
const RWD = artifacts.require('RWD')
const DecentralBank = artifacts.require('DecentralBank')

module.exports = async function(deployer, network, accounts){

    //Deploy mock tether contract and others
    await deployer.deploy(Tether)
    const tether = await Tether.deployed();


    await deployer.deploy(RWD)
    const rwd = await RWD.deployed()

    await deployer.deploy(DecentralBank, rwd.address, tether.address)
    const decentralBank = await DecentralBank.deployed()

    // transfer all rwd tokens to decentral bank

    await rwd.transfer(decentralBank.address, '1000000000000000000000000')

    //distribute 100 tether tokens to investor
    await tether.transfer(accounts[1], '1000000000000000000')

};