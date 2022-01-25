async function main() {
    const CalculatorV2 = await ethers.getContractFactory("CalculatorV2")
    let calculator = await upgrades.upgradeProxy("0x75B4D2eD7c38756acBc0909AC94e90e238ED81Fc", CalculatorV2)
    console.log("Your upgraded proxy is done!", calculator.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
