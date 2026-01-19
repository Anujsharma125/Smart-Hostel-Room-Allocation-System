document.getElementById("hostelForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("hostelName").value;
  const policy = document.getElementById("policy").value;

  let hostels = JSON.parse(localStorage.getItem("hostels")) || [];
  hostels.push({ name, policy });
  localStorage.setItem("hostels", JSON.stringify(hostels));

  alert("Hostel added!");
  loadHostels();
});

document.getElementById("roomForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const hostelName = document.getElementById("roomHostel").value;
  const roomNumber = document.getElementById("roomNumber").value;
  const capacity = document.getElementById("capacity").value;

  let rooms = JSON.parse(localStorage.getItem("rooms")) || [];
  rooms.push({ hostelName, roomNumber, capacity, occupancy: 0 });
  localStorage.setItem("rooms", JSON.stringify(rooms));

  alert("Room added!");
});

function loadHostels() {
  let hostels = JSON.parse(localStorage.getItem("hostels")) || [];
  const select = document.getElementById("roomHostel");
  select.innerHTML = "";
  hostels.forEach(h => {
    const opt = document.createElement("option");
    opt.value = h.name;
    opt.textContent = h.name;
    select.appendChild(opt);
  });
}
loadHostels();

function runAllocation() {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  let rooms = JSON.parse(localStorage.getItem("rooms")) || [];

  students.forEach(s => {
    if (!s.allocated) {
      const room = rooms.find(r => r.occupancy < r.capacity);
      if (room) {
        s.allocated = `${room.hostelName} - Room ${room.roomNumber}`;
        room.occupancy++;
      } else {
        s.allocated = "No room available";
      }
    }
  });

  localStorage.setItem("students", JSON.stringify(students));
  localStorage.setItem("rooms", JSON.stringify(rooms));

  const box = document.getElementById("allocBox");
  box.innerHTML = students.map(s => `${s.name} → ${s.allocated}`).join("<br>");
}