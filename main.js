let inputArr = process.argv.slice(2);
// console.log(inputArr);

let command = inputArr[0];
switch(command){
    case "tree":
        treeFn(inputArr[1])
        break;
    case "organise":
        organizeFn(input[1]);
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("Input the write command");
        break;


}

function treeFn(dirPath){
    console.log("Tree command implemented for",dirPath);
}
function organizeFn(dirPath){
    console.log("organize command implemented for",dirPath);
}
function helpFn(){
    console.log(`
    List of All the commands
        node main.js tree "directory"
        node main.js organize "directoryPath"
        node main.js help
    `);
}


