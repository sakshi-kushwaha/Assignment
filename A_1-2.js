// Write a implementation of getElementById, which perform the same basic tasks 
//as that of actual getElementById (dont use shortcuts like queryselector)

function getElementById(rootNode, id) {
  // Start searching from the given root node
  let currentNode = rootNode;

  // Define a helper function to perform depth-first search for the element with the given ID
  function dfsSearch(node, targetId) {
    // Check if the current node has the desired ID
    if (node.id === targetId) {
      return node;
    }

    // If the current node has child nodes, recursively search them
    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        const childNode = node.children[i];
        const result = dfsSearch(childNode, targetId);
        if (result !== null) {
          return result;
        }
      }
    }

    // If the desired node is not found in the current subtree, return null
    return null;
  }

  // Call the helper function to find the element with the given ID
  const resultNode = dfsSearch(currentNode, id);
  return resultNode;
}

// Usage example in a browser environment:
const targetElement = getElementById(document.body, "target-id");

// Usage example in a non-browser environment:
// Assuming you have a sample HTML structure for testing purposes
const { JSDOM } = require("jsdom");
const dom = new JSDOM("<!DOCTYPE html><div id='root'><div id='target-id'></div></div>");
const rootNode = dom.window.document.getElementById("root");
const targetElement = getElementById(rootNode, "target-id");

