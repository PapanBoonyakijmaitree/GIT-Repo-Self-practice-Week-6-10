// จากไฟล์ html ที่กำหนดให้ สมมติว่าเรามี กล่องสี่เหลี่ยม อยู่ 1 อันในหน้าเว็บและมีปุ่ม 3 ปุ่ม แต่ละปุ่มเอาไว้เปลี่ยนสีของกล่องเป็นสีที่ต่างกัน
// • ปุ่มที่ 1 เปลี่ยนกล่องเป็น สีแดง
// • ปุ่มที่ 2 เปลี่ยนกล่องเป็น สีน้ำเงิน
// • ปุ่มที่ 3 เปลี่ยนกล่องเป็น สีเขียว
// • เขียน JavaScript ให้
// • เลือกกล่องและปุ่มทั้งหมด
// • เวลากดปุ่ม อ่านค่า data-color จากปุ่มนั้น
// • นำค่าที่ได้ไปเปลี่ยน background-color ของกล่องและแสดงค่าสี


// เลือกกล่องและปุ่ม
const box = document.getElementById('box');
const buttons = document.querySelectorAll('button');
const colorValue = document.getElementById('colorValue');

// วนลูปปุ่ม
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.getAttribute('data-color');
    
    // เปลี่ยนสีพื้นหลังของกล่อง
    box.style.backgroundColor = color;
    
    // เปลี่ยนข้อความในกล่องให้เป็นชื่อสี
    box.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    
    // แสดงค่าสีใน <p>
    colorValue.textContent = `Current color: ${color}`;
  });
});