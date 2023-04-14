const hre = require('hardhat');

async function main() {
    const BlockFlicksContract = await hre.ethers.getContractFactory('BlockFlicks')
    const DeployContract = await BlockFlicksContract.deploy()

    await DeployContract.deployed()

    console.log('YouTube deployed to:', DeployContract.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
