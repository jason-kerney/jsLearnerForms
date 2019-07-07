function containsFunction({
    parentName = null,
    functionName = null
}) {

    function hasMatchingName(node, name) {
        return name === null
            || ( node.id && node.id.name === name);
    }

    function isMatchingFunction(node, name) {
        return node.type === 'FunctionDeclaration'
            && hasMatchingName(node, name);
    }

    let parentNode = null;

    function isMatchingVariableNode(node) {
        if (parentName === null && parentNode === null) {
            parentNode = node;
        } else if (parentName !== null && isMatchingFunction(node, parentName)) {
            parentNode = node;
        } else if (parentNode !== null && isMatchingFunction(node, functionName)) {
            return true;
        }

        return false
    }

    function clearParentNode(node) {
        if (node === parentNode) {
            parentNode = null;
        }
    }

    return {
        predicate: isMatchingVariableNode,
        onExit: clearParentNode
    };
}

module.exports = containsFunction;
