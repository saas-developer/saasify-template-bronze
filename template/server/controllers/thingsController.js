const things = [
  { id: 1, name: 'Computer' },
  { id: 2, name: 'Laptop' },
  { id: 3, name: 'Tablet' }
]

exports.list = (req, res, next) => {
  res.send({
    things
  })
}

exports.get = (req, res, next) => {
  const id = req.params.id

  const thing = things.find((item) => {
    return item.id === parseInt(id, 10)
  })

  res.send({
    thing
  })
}
