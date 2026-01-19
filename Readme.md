# Smart Hostel Room Allocation System

This is a simple web-based project to manage hostel rooms and allocate rooms to students.  
The main purpose of this project is to demonstrate hostel room allocation logic in a clear and beginner-friendly way.

---

## Features

- Student registration (Name, Email, Gender, Year)
- Add new hostels
- Add new rooms with capacity
- Auto allocation of rooms based on:
  - Gender policy of hostel
  - Room capacity (occupancy < capacity)
- Shows allocation status for each student
- Displays message if no room is available

---

## Technology Used

- HTML  
- CSS  
- JavaScript  

(No framework is used to keep the project simple and easy to understand)

---

## How It Works

1. Students register with their details.  
2. Admin adds hostels and rooms with capacity.  
3. All data is stored in browser LocalStorage.  
4. When allocation is run:
   - Gender policy and room capacity are checked
   - First suitable room is assigned
   - If no room is available, student status shows "No room available"

---

## How to Run the Project

1. Download or clone the repository  
2. Open `index.html` in any modern web browser  
3. Use **Student Portal** to register students  
4. Use **Admin Portal** to add hostels and rooms  
5. Click **Run Allocation** to assign rooms  

---

## Live Demo

Live URL: *(https://fantastic-kheer-4a4b60.netlify.app/)*

---

## GitHub Repository

Repo Link: *(Add your GitHub repo link here)*

---

## Demo Video

You can record and attach a short demo video showing how the project works.

---

## Note

This project is created as a **fresher-level assignment** to demonstrate:  
- Logic building  
- UI handling  
- LocalStorage usage  
- Basic deployment  