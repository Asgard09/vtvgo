document.addEventListener("DOMContentLoaded", function() {
    var dateElement = document.getElementById("date");
    var daysOfWeek = ["CN", "HAI", "BA", "TƯ", "NĂM", "SÁU", "BẢY"];
    
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0
    var year = currentDate.getFullYear();
    var dayOfWeek = currentDate.getDay();
    
    dateElement.textContent = daysOfWeek[dayOfWeek] + " - " + day + "/" + month + "/" + year;
});