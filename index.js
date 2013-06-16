module.exports = exports = function (properties) {
    
    var ownProperties = {},
        name;
    
    for (name in properties)
    {
        if (properties.hasOwnProperty(name))
        {
            ownProperties[name] = { value: properties[name], enumerable: true };
        }
    }
    
    return ownProperties;
};