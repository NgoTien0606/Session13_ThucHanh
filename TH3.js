// Thực hành 3: nhập từ khóa và tìm kiếm xem có trong mảng của mình hay không

// khai báo mảng các tên của mình
const arr = ["nam", "minh", "huy", "tuan", "anh"]

// người dùng nhập tên họ muốn
const namez = prompt("Nhap ten mot nguoi")

// dùng hàm indexOf để tìm kiếm vị trị của namez trong mảng arr
// nếu tìm thấy sẽ trả ra vị trí của namez trong mảng arr
// nếu không thấy sẽ trả ra -1
let index = arr.indexOf(namez)

// kiểm tra vị trí tìm thấy
// nếu khác -1 tức là tìm thấy thì in ra vị trí + 1 vì trong arr đánh chỉ số từ 0
// nếu = -1 tức là ko tìm thấy thì in ra không có
if (index != -1) {
    console.log("Vi tri ", index + 1);
} else {
    console.log("Khong co !");
}
