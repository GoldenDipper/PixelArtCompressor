let original_art = [];
let compressed_art = [];
let colors = ["white", "black", "red", "green", "blue", "yellow"];
let colorCount = [0,0,0,0,0,0];

let heart = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
[0,0,1,2,2,2,1,0,0,1,2,2,2,1,0,0],
[0,0,2,2,2,2,2,0,0,2,2,2,2,2,0,0],
[0,1,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
[0,1,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
[0,1,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
[0,1,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
[0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0],
[0,0,0,1,2,2,2,2,2,2,2,2,1,0,0,0],
[0,0,0,0,2,2,2,2,2,2,2,2,0,0,0,0],
[0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0],
[0,0,0,0,0,1,2,2,2,2,1,0,0,0,0,0],
[0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];


function printArt(art){
    let output = "";
    for(let i = 0; i < art.length; i++){
        for(let j = 0; j < art[i].length; j++){
            
            output += art[i][j];
        }
        console.log(output);
        output = "";
    }
}
/*This function will count each color and set it in an array*/
function colorCounter(art){
    for(let i = 0; i < art.length; i++){
        for(let j = 0; j < art[i].length; j++){
            switch (art[i][j]) {
                case 0:
                    colorCount[0]++;
                    break;
                case 1:
                    colorCount[1]++;
                    break;
                case 2:
                    colorCount[2]++;
                    break;
                case 3:
                    colorCount[3]++;
                    break;
                case 4:
                    colorCount[4]++;
                    break;
                case 5:
                    colorCount[5]++;
                    break;
                default:
                    colorCount[0]++;
            }
        }
    }
    
    console.log(colorCount);
}

/*in this case, symbols are colors*/
function huffmanEncoding(symbolCount) {
    // === STEP 1: Create the initial leaf nodes ===
    let nodes = [];
    for (let i = 0; i < symbolCount.length; i++) {
        if (symbolCount[i] > 0) {
            nodes.push({
                color: colors[i], 
                freq: symbolCount[i], 
                left: null,  
                right: null  
            });
        }
    }
        console.log("Sorted Initial Nodes:", nodes); // (Optional check)
    // === STEP 2: Sort them from lowest to highest frequency ===
    nodes.sort((a, b) => a.freq - b.freq);


    // === STEP 3: Combine the smallest nodes into a Tree ===
    // This loop keeps running until only 1 single "Root" node is left in the array
    while (nodes.length > 1) {
        // 1. Pull out the two smallest nodes from the front
        let leftChild = nodes.shift();  
        let rightChild = nodes.shift(); 

        // 2. Build a parent node to hold them. 
        // Its frequency is the sum of both children!
        let parentNode = {
            color: null, // Intermediate branches don't have a specific color
            freq: leftChild.freq + rightChild.freq,
            left: leftChild,
            right: rightChild
        };

        // 3. Put this new parent back into the array
        nodes.push(parentNode);

        // 4. Re-sort the array so the next smallest nodes move to the front again
        nodes.sort((a, b) => a.freq - b.freq);
    }

    // The single node left in the array is now the crown/root of your completed tree!
    let huffmanTreeRoot = nodes[0];
    
    console.log("--- FINAL HUFFMAN TREE ---");
    console.log(huffmanTreeRoot);

    // === STEP 4: Walk the tree to generate the binary lookup table ===
    let huffmanLookupTable = {};

    // This is our recursive explorer function
    function generateCodes(node, currentCode) {
        // Safety check: if the branch is empty, stop
        if (!node) return;

        // If we found a color (a leaf node), save it to our dictionary!
        if (node.color !== null) {
            huffmanLookupTable[node.color] = currentCode;
            return; // We reached the end of this branch, turn around
        }

        // Otherwise, keep exploring!
        // Go Left and add a "0" to the path
        generateCodes(node.left, currentCode + "0");
        
        // Go Right and add a "1" to the path
        generateCodes(node.right, currentCode + "1");
    }

    // Start the explorer at the root node with an empty path string ""
    generateCodes(huffmanTreeRoot, "");

    console.log("--- FINAL BINARY TRANSLATION DICTIONARY ---");
    console.log(huffmanLookupTable);

    // We return the table so we can use it to compress the image array later
    return huffmanLookupTable;
}


printArt(heart);

colorCounter(heart);

huffmanEncoding(colorCount);
