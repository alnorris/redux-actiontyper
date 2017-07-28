module.exports = actionTyper = function actionTyper() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    return new Proxy({}, {
        get: function get(target, name) {
            return '' + prefix + name;
        }
    });
};
