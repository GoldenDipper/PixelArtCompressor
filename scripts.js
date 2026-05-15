let original_art = [];
let compressed_art = [];
let colors = ["white", "black", "red", "green", "blue"];
let colorCount = [0,0,0,0,0];

let heart = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
[0,0,1,2,2,2,1,0,0,1,2,2,2,1,0,0],
[0,0,2,2,2,2,2,0,0,2,2,2,2,2,0,0],
[0,1,2,3,2,2,2,2,2,2,2,2,2,2,1,0],
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
        for(let j = 0; j < art[0].length; j++){
            
            output += art[i][j];
        }
        console.log(output);
        output = "";
    }
}
/*This function will count each color and set it in an array*/
function colorCounter(art){
    for(let i = 0; i < art.length; i++){
        for(let j = 0; j < art[0].length; j++){
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
function huffmanEncoding(symbolCount){

};

printArt(heart);

colorCounter(heart);