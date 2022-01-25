// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = 'FILL_ME_IN'
    const CalculatorV2 = await ethers.getContractFactory("CalculatorV2")
    console.log("Preparing upgrade...")
    const calculatorV2Address = await upgrades.prepareUpgrade(proxyAddress, CalculatorV2)
    console.log("CalculatorV2 at:", calculatorV2Address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
