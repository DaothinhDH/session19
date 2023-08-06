let diembatdau = 0;
hour2.innerHTML = giaybatdau;
minute2.innerHTML = phutbatdau;
second2.innerHTML = giaybatdau;
let id;
id = setInterval(() => {
    if (giaybatdau == 0) {
        giaybatdau = 59;
        phutbatdau--;
    } else {
        giaybatdau--;
    }
    if (giaybatdau == 0 && giobatdau == 0 && phutbatdau == 0) {
        clearInterval(id);
    }
    hour2.innerHTML = giobatdau;
    minute2.innerHTML = phutbatdau;
    second2.innerHTML = giaybatdau;
    diem.innerHTML = diembatdau;
}, 1000)
let size;
document.getElementById("ga").addEventListener("mouseover", () => {
    ga.style.border = `10px solid black`;
})
document.getElementById("ga").addEventListener("mouseout", () => {
    ga.style.border = `1px solid black`;
})
ga.addEventListener("click", () => {
    diembatdau += 10;
    diem.innerHTML = diembatdau;
})
setInterval(() => {
    size = 100 + Math.floor(Math.random() * 100)
    document.getElementById("ga").style.width = `${size}px`;
    document.getElementById("ga").style.height = `${size}px`;
}, 3000)