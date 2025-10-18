// ฝึกใช้งาน classList และ method ต่าง ๆ (add, remove, toggle)
// • จากไฟล์ html ที่กำหนดให้ สมมติว่าเรามี กล่องสี่เหลี่ยม อยู่ 1 อันในหน้าเว็บและมีปุ่ม 3 ปุ่มสำหรับจัดการคลาสของกล่อง
// • ปุ่ม เพิ่มเส้นขอบ เพิ่ม class "bordered" ให้กับกล่อง
// • ปุ่ม ลบเส้นขอบ ลบ class "bordered" ออกจากกล่อง
// • ปุ่ม สลับเส้นขอบ ถ้ามีคลาส "bordered"
// • อยู่ - ลบออก, ถ้าไม่มี - เพิ่มเข้าไป

//ตรวจเลือด
//019
//Practice01


const addButton=document.getElementById('add')
addButton.addEventListener("click",() => {
    const box = document.getElementById("box");
    box.classList.add("bordered");
})

const removeButton=document.getElementById('remove')
removeButton.addEventListener("click",() => {
    const box = document.getElementById("box");
    box.classList.remove("bordered");
})

const toggleButton=document.getElementById('toggle')
toggleButton.addEventListener("click",() => {
    const box = document.getElementById("box");
    box.classList.toggle("bordered");
})
