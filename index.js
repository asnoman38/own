module.exports = exports = function (properties) {

    var ownProperties = {}
    var name

    for (name in properties)
    {
        if (properties.hasOwnProperty(name))
        {
            ownProperties[name] = {
                value: properties[name],
                enumerable: true,
                writable: true
            }
        }
    }

    return ownProperties
}
