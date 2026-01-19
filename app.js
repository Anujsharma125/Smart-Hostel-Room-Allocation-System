function showSection(id) {
  document.getElementById("student").style.display = "none";
  document.getElementById("admin").style.display = "none";
  document.getElementById(id).style.display = "block";
}

// Student Registration
document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const student = {
    name: document.getElementById("sName").value,
    email: document.getElementById("sEmail").value,
    gender: document.getElementById("sGender").value,
    year: document.getElementById("sYear").value,
    allocated: null
  };
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
  alert("Student registered!");
  document.getElementById("statusBox").innerText = "No allocation yet.";
});

// Admin: Add Hostel
document.getElementById("hostelForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let hostels = JSON.parse(localStorage.getItem("hostels")) || [];
  hostels.push({ name: document.getElementById("hostelName").value, policy: document.getElementById("policy").value });
  localStorage.setItem("hostels", JSON.stringify(hostels));
  loadHostels();
});

// Admin: Add Room
document.getElementById("roomForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let rooms = JSON.parse(localStorage.getItem("rooms")) || [];
  rooms.push({
    hostelName: document.getElementById("roomHostel").value,
    roomNumber: document.getElementById("roomNumber").value,
    capacity: document.getElementById("capacity").value,
    occupancy: 0
  });
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

// Allocation Logic
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

  document.getElementById("allocBox").innerHTML = students.map(s => `${s.name} → ${s.allocated}`).join("<br>");
}