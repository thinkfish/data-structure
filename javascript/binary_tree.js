// simple binary tree

const root = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D'
        },
        right: {
            val: 'E'
        }
    },
    right: {
        val: 'C',
        right: {
            val: 'F'
        }
    }
}

// DFS，深放优先：三种方法遍历二叉树
// 1. 先序：  根结点 -> 左子树 -> 右子树
// 2. 中序：  左子树 -> 根结点 -> 右子树
// 3. 后序:   左子树 -> 右子树 -> 根结点 

function preOrder(root){
    // 递归边界，root为空
    if(!root){
        return
    }
    console.log('当前遍历的结点是:',root.val)
    // 遍历左子树
    preOrder(root.left)
    // 遍历右子树
    preOrder(root.right)
}

function treeNodesCount(root){
    if(!root) return 0
    return 1 + treeNodesCount(root.left) + treeNodesCount(root.right)
}

function inOrder(root){
    if(!root){
        return
    }

    inOrder(root.left)
    console.log('当前遍历的结点是:',root.val)
    inOrder(root.right)
}

function postOrder(root){
    if(!root){
        return
    }

    postOrder(root.left)
    postOrder(root.right)
    console.log('当前遍历的结点是:',root.val)
}

// BFS, 广度优先  
function BFS(root){
    const queue = [] // 初始化队列queue
    queue.push(root)
    while(queue.length){
        console.log('queue=>',queue)
        const top = queue[0]
        console.log(top.val)

        if(top.left){
            queue.push(top.left)
        }

        if(top.right){
            queue.push(top.right)
        }

        queue.shift()

    }
}