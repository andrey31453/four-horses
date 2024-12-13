const addClasses = function (classes) {
  classes.split(' ').forEach((_class) => this.classList.add(_class))
}
const addOption = function ([key, value]) {
  if (key === 'class') {
    return addClasses.call(this, value)
  }
  this[key] = value
}
const addChild = (children, child) => children + child

export const defineTemplate = (target, options, children) => {
  const template = document.createElement(target)
  options && Object.entries(options).forEach(addOption, template)
  template.innerHTML = [children].flat().reduce(addChild, '')
  return template
}
