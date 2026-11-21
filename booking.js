/* ============================================================
   BOOKING LINK: the one place to change it.
   Every "Book a Call" / CTA link marked data-booking points here,
   and /book forwards here too.
   ============================================================ */
var BOOKING_URL = 'https://api.leadconnectorhq.com/widget/booking/Zh1Qe6Bh8UEWPYElT5A0';

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[data-booking]').forEach(function (a) {
    a.href = BOOKING_URL;
    a.removeAttribute('target'); // open in the same tab
  });
});
