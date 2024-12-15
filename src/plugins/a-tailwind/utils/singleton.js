const mapper = new WeakMap()
export const singleton =
  (target) =>
  (...props) => {
    if (!mapper.has(target)) {
      mapper.set(target, target.apply(null, props))
    }
    return mapper.get(target)
  }
