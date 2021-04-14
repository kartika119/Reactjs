
function Even() {

    var arr = [10, 3, 6, 9, 8, 4];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i] );
        }
    }
}
Even();

export default Even;