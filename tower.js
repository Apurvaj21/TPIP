const prompt=require("prompt-sync")()
const num = parseInt(prompt("Enter the number of disks:"));

if (num > 0) {
    towerOfHanoi(num, "A", "C", "B");
} else {
    console.log(" enter a positive number.");
}


function towerOfHanoi(n, source, destination, aux) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }
    towerOfHanoi(n - 1, source, aux, destination); //source to aux (destination as temporary)
    console.log(`Move disk ${n} from ${source} to ${destination}`);//source to destination
    towerOfHanoi(n - 1, aux, destination, source); //aux to destination (source as temporary)
}

