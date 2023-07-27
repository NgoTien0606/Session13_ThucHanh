// Thực hành 2: đảo ngược mảng

const arr = "nguyen minh huy" // chuỗi cần đảo ngược

let doDaiMang = arr.length // lấy độ dài của chuỗi
let arr2 = "" // chuỗi kết quả; yuh hnim ....

// i = doDaiMang - 1: là giữ vị trí ở cuối chuỗi
// i -- : lùi dần về đầu chuỗi
// i >= 0 : vẫn còn chuỗi để lùi
for (let i = doDaiMang - 1; i >= 0; i--) {
    // thêm các phần tử cho chuỗi kết quả bằng các phần tử của chuỗi ban đầu
    // theo thứ tự từ cuối về đầu vì mình lặp từ cuối chuỗi về đầu chuỗi
    arr2 += arr[i]
}
console.log(arr2.split(""));
