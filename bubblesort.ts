//sort mixed numbers in ascending order
//the greatest number will "bubble up" to the end of the array
function bubbleSort(arr: number[]): number[] {

    //iterate every number in given array
    for (let i: number = 0; i < arr.length - 1; i++) {
        //inner loop doesn't need to access the greater numbers anymore because they are already sorted
        for (let j: number = 0; j < arr.length - i - 1; j++) {
            //if following number is lesser than j, switch positions
            if (arr[j] > arr[j + 1]) {
                // save j, which is greater than its follower, in a temporary variable to avoid losing it
                const temp: number = arr[j];
                // lesser number takes previous position
                arr[j] = arr[j + 1];
                // greater number takes following position
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

export { bubbleSort }