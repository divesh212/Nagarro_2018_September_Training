const {
  Router
} = require('express')
const {
  Vendor
} = require('../db/index')

const route = Router()

route.get('/', async (req, res) => {

  // Vendor.findAll()
  //   .then((vendors) => {

  //   })
  //   .catch((err) => {

  //   })

  try {
    const vendors = await Vendor.findAll()
    res.status(200).json(vendors)
  } catch (e) {
    console.error(e)
    res.status(500).json({message: 'Error accessing database'})
  }

})

route.post('/', async (req, res) => {
  // ideally use try catch here too
  const newVendor = await Vendor.create({
    name: req.body.name
  })
  res.status(201).json({
    message: 'Vendor added',
    id: newVendor.id
  })
})

module.exports = route
