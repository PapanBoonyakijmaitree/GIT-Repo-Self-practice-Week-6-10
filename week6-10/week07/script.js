//	1.	เข้าถึง <h1 id="title"> แล้วเปลี่ยนข้อความเป็น "DOM Learning 🚀"
const title = document.getElementById("title");
title.textContent = "DOM Learning";

//	2.	นับจำนวน <p class="item"> ที่อยู่ใน <div id="container"> แล้ว log ออกมา
const container = document.getElementById("container");
const items = container.getElementsByClassName("item");
console.log("จำนวน <p class='item'> =", items.length);


// //	3.	ดึง attributes ของ <div id="container"> มาพิมพ์ชื่อ + ค่าออกมา
const containerAttrs = container.attributes;
  for (let i = 0; i < containerAttrs.length; i++) {
    console.log(`name=${containerAttrs[i].name}, value=${containerAttrs[i].value}`);
  }


// //	4.	เมื่อกดปุ่ม "Add Item" ให้สร้าง <p class="item"> ใหม่ เพิ่มเข้าไปใน #container ต่อท้าย
document.getElementById("btnAdd").addEventListener("click", () => {
  const newItem = document.createElement("p");
  newItem.className = "item";
  newItem.textContent = `Item ${items.length + 1}`;
  container.appendChild(newItem);
});

// //	5.	เมื่อกดปุ่ม "Remove Last Item" ให้ลบ <p class="item"> ตัวสุดท้ายออก
 document.getElementById("btnRemove").addEventListener("click", () => {
  if (items.length > 0) {
    container.removeChild(items[items.length - 1]);
  }
});