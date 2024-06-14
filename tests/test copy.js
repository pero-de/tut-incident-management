const cds = require('@sap/cds')
const { default: axios } = require('axios')

// const { GET, POST, DELETE, PATCH, expect } = cds.test(__dirname + '../../')
const { EXPECT } = cds.test(__dirname + '../../')
//const { GET, POST, DELETE, PATCH } = cds.test(__dirname + '../../')
//const { GET, POST, DELETE, PATCH } = cds.test(__dirname + '../../')

// jest.mock('axios', () => jest.fn());

axios.defaults.auth = { username: 'incident.support@tester.sap.com', password: 'initial' }

jest.setTimeout(11111)

describe('Test The GET Endpoints', () => {

  it('Should check Processor Service', async () => {
    const processorService = await cds.connect.to('ProcessorService')
    const { Incidents } = processorService.entities
    
    expect(await SELECT.from(Incidents)).to.have.length(4)
  })
})


/*
describe('Test The GET Endpoints', () => {
  it('Should check Processor Service', async () => {
    const processorService = await cds.connect.to('ProcessorService')
    const { Incidents } = processorService.entities
    expect(await SELECT.from(Incidents)).to.have.length(4)
  })

  it('Should check Customers', async () => {
    const processorService = await cds.connect.to('ProcessorService')
    const { Customers } = processorService.entities
    expect(await SELECT.from(Customers)).to.have.length(3)
  })

  it('Test Expand Entity Endpoint', async () => {
    const { data } = await GET`/odata/v4/processor/Customers?$select=firstName&$expand=incidents`
    expect(data).to.be.an('object')
  })
})

*/