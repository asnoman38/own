create.readonly = readonly
module.exports = create

function create(properties, isWritable) {
    if (properties !== Object(properties)) return null
    var ownProperties = {}
    var name
    for (name in properties)
    {
        if (properties.hasOwnProperty(name))
        {
            ownProperties[name] = {
                value: properties[name],
                enumerable: true,
                writable: (typeof isWritable === 'boolean') ? isWritable : true
            }
        }
    }
    return ownProperties
}

function readonly(properties) {
    return create(properties, false)
}
