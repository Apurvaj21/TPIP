const num = 2; 
towerOfHanoi(num, "A", "C", "B");


function towerOfHanoi(n, source, destination, aux) {
   
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }

    // moving n-1 disks from source to aux using destination as temporary 
    towerOfHanoi(n - 1, source, aux, destination);

    // moving the nth disk from source to destination
    console.log(`Move disk ${n} from ${source} to ${destination}`);

    // moving n-1 disks from aux to destination using source as temporary
    towerOfHanoi(n - 1, aux, destination, source);
}


