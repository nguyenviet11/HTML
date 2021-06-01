var hotel = {                           /* gọi biến */
    name : 'Park',
    rooms : 120,
    booked : 77
};

hotel.gym = true;                       /* biến = true*/
hotel.pool = false;                        /* biến = false */
delete hotel.booked;                    /* xoá booked */

var  elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');
elPool.className = hotel.pool;                                /* đổi tên thành hotel pool */

var elGym = document.getElementById('gym');
elGym.className = hotel.gym;                                    /* đổi tên thành hotel gym */