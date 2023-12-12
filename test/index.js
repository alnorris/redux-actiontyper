/* ACTION TYPER */

module.exports = actionTyper = (prefix = '') => {
    return new Proxy({}, {
        get(target, name) {
            return `${prefix}${name}`
        }
    })
}
