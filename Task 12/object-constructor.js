var hotel = new Object();                               /* gọi 1 biến = */

hotel.name = 'Park';                         /* cách gọi theo kiểu khác */
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability() = function (){
    return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();