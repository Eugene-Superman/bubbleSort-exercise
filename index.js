const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            const currentValue = array[j];
            const nextValue = array[j + 1];
            if (currentValue > nextValue) {
                array[j] = nextValue;
                array[j + 1] = currentValue;
            }
        }
    }
}

bubbleSort(numbers);