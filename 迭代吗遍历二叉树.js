function ddblqx(root) {
    const stack = []
    const arr = []
    stack.push(root)
    while(stack.length > 0) {
        const node = stack.pop()
        arr.push(node.val)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
    return arr
}

function ddblzx(root) {
    const stack = []
    const arr = []
    stack.push(root)
    let cur = root
    while(cur || stack.length > 0) {
        if (cur) {
            stack.push(cur.left)
            cur = cur.left
        } else {
            const node = stack.pop()
            arr.push(node.val)
            stack.push(node.right)
            cur = node.right
        }
    }
    return arr
}