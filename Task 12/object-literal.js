var hotel = {                                       /* gọi biến */
    name : 'Quay',                                  /* có các phần tử */
    rooms : 40;
    booked : 25,
    checkAvailability : function (){                /* gọi 1 hàm = room - booked*/
        return this.rooms - this.booked;
    }
};
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRoom = document.getElementById('room');
elRoom.textContent = hotel.checkAvailability();
