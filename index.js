/* ACTION TYPER */

modules.exports = actionTyper = (prefix) => {
    return new Proxy({}, {
        get(target, name) {
            return `${prefix}${name}`
        }
    })
}