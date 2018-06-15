const emptyFn = () => {}

const functionList = []

const _ = () => {}

const draw = (name) => (...args) => {
  const selected = functionList.find((item) => {
    if (item.name !== name) return false
    if (item.pattern.length === 0) return true
    if (item.pattern.some((m, i) => m === args[i])) return true
    return false
  })

  return selected.fn(...args)
}

const def = (name, pattern = [], fn = emptyFn) => {
  functionList.push({
    name,
    pattern,
    fn
  })

  return draw(name)
}

module.exports = { _, def, draw }
