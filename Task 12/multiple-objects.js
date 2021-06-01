function Hotel(name, rooms , booked) {                  /* gọi 1 hàm làm khung để các giá trị truyền vào*/
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function (){
        return this.rooms - this.booked;
    };
};

var quayHotel = new Hotel('Quay',40,25);         /* gọi 1 biến và các dữ liệu để truyền vào hàm trên */
var parkHotel = new Hotel('Park',120,77);

var details1 = quayHotel.name + ' rooms: ';                     /* gọi 1 biến và gán n vào */
    details1 += quayHotel.checkAvailability();                  /* gán */

var elHotel1 = document.getElementById('hotel1');       /* gọi biến và địa chỉ để truyền sang html */
elHotel1.textContent = details1;                                /* câu lệnh thay đổi nội dung */

var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailability();

var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

