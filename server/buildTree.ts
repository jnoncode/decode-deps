interface TreeNode {
  name: string;
  children: TreeNode[];
}

const buildTree = (
  deps: { [key: string]: string[] },
  root: string
): TreeNode => {
  const node: TreeNode = { name: root, children: [] };

  if (deps[root]) {
    node.children = deps[root].map((child) => buildTree(deps, child));
  }

  return node;
};

export default buildTree;