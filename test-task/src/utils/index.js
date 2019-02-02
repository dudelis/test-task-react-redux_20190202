export const getSampleData = (arrayLength, minHeight, maxHeight) => {
    const arr = [];
    for (var i = 0; i < arrayLength; i++){
        arr.push({
            height: getRandomNumber(minHeight, maxHeight),
            color: getRandomColor()
        });
    }
    return arr;
}

const getRandomNumber = (min, max) =>{
    return Math.floor((Math.random()* (max-min) + min));
}

const getRandomColor = () =>{
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}