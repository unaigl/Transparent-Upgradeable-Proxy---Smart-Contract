const { expect } = require('chai')

let Calculator, calculator

// Start test block
describe('Calculator (proxy)', function () {
  beforeEach(async function () {
    Calculator = await ethers.getContractFactory("Calculator")
    calculator = await upgrades.deployProxy(Calculator, [42], { initializer: 'initialValue' })
  })
  it('getValue returns a value previously initialized', async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await calculator.getValue()).toString()).to.equal('42')
    expect(() => { calculator.increment() }).to.throw(TypeError)
  })
  it('upgrades', async function () {
    const CalculatorV2 = await ethers.getContractFactory("CalculatorV2")
    calculator = await upgrades.upgradeProxy(calculator.address, CalculatorV2)
    await calculator.increment()
    let result = await calculator.getValue()
    expect(result).to.equal(43)
  })
})
