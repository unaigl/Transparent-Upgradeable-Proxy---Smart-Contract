async function main() {
    const Calculator = await ethers.getContractFactory("Calculator")
    console.log("Deploying Calculator, ProxyAdmin, and then Proxy...")
    const proxy = await upgrades.deployProxy(Calculator, [42], { initializer: 'initialValue' })
    console.log("Proxy of Calculator deployed to:", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
