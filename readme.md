# Fablead
A web app for seminars and teachers management. Build by React.

---
## Brief on File Structure
```
├── Dashboard
│   ├── Library
│   │   ├── AddLibraryPage.jsx
│   │   ├── LibraryDetails.jsx
│   │   └── LibraryPage.jsx
│   ├── Reminder
│   │   └── ReminderPage.jsx
│   ├── Scheduling
│   │   ├── Calendar
│   │   │   ├── Calendar.jsx
│   │   │   ├── MonthCalendar.jsx
│   │   │   └── YearCalendar.jsx
│   │   └── SchedulingPage.jsx
│   ├── Seminars
│   │   ├── AddSeminarPage.jsx
│   │   ├── Details
│   │   │   ├── AccountDetails.jsx
│   │   │   ├── AccountManagement.jsx
│   │   │   ├── BasicInfoPage.jsx
│   │   │   ├── ClassMaterial.jsx
│   │   │   ├── Events
│   │   │   │   ├── DraggableStudent.jsx
│   │   │   │   ├── DroppableSeat.jsx
│   │   │   │   ├── EventPreparation.jsx
│   │   │   │   ├── SeatBoard.jsx
│   │   │   │   ├── SeatingPlan.jsx
│   │   │   │   └── StudentContainer.jsx
│   │   │   ├── ItineraryManagement.jsx
│   │   │   ├── NotesTaking.jsx
│   │   │   ├── OnSiteTimeManagement.jsx
│   │   │   └── ScanQRCode.jsx
│   │   ├── SeminarList.jsx
│   │   └── SeminarListTablePagination.jsx
│   └── Teachers
│       ├── AddTeacher.jsx
│       └── TeacherPage.jsx
├── FooterBar.jsx
├── HeaderBar.jsx
├── LoginPage.jsx
├── MainPage.jsx
├── Redux
│   ├── Action
│   │   ├── authAction.jsx
│   │   ├── libraryAction.jsx
│   │   ├── messageAction.jsx
│   │   ├── reminderAction.jsx
│   │   ├── seatMapAction.jsx
│   │   ├── seminarAction.jsx
│   │   ├── studentContainerAction.jsx
│   │   └── teacherAction.jsx
│   ├── Constant
│   │   ├── ActionType.jsx
│   │   └── ServerConstant.jsx
│   ├── Reducer
│   │   ├── authReducer.jsx
│   │   ├── libraryReducer.jsx
│   │   ├── masterReducer.jsx
│   │   ├── messageReducer.jsx
│   │   ├── reminderReducer.jsx
│   │   ├── seatMapReducer.jsx
│   │   ├── seminarReducer.jsx
│   │   ├── studentContainerReducer.jsx
│   │   └── teacherReducer.jsx
│   └── Store
│       └── store.jsx
├── Seminar
│   └── AddSeatingPlan.jsx
├── Setting.jsx
├── favicon.png
├── index.ejs
└── index.jsx
```
The above diagram shows the complete file structure of fablead project. Basically there are 2 main folders, **Dashboard** and **Redux**. Dashboard stores all the frontend react component while Redux handles all the data inflow and outflow between the web client and database. In Dashboard folder, there are **5** main folders, which indicates the 5 main categories in the main page of the project(Seminars List, Scheduling Table, Teachers List, Library List, Reminder on upcoming events).

## Dashboard Folder
---

### **Seminar**
Default landing page after login will be a table / list showing all the seminars available. Seminar can be added by **Add Button** on top right corner. Each row of seminar can be clicked and user will be navigated to the seminar details' page. There are **7 tabs** for seminar details, which are written as 7 files in the **Dashboard/Seminars/Details** path. One of the most complex part will be the seminar events page, so an independent folder **Events** are set up for that part. Up till now, the **5** files in Events folder are for the **Seating Plan** function.

File | Usage
-----|------
DraggableStudent.jsx | Define the student component that can be dragged to the seating plan
DroppableSeat.jsx | Define the seats in the seating plan that students can be dropped on
SeatBoard.jsx | Container for all the seats
StudentContainer.jsx | Responsible for the Left side Expansion Panel that displays all students available to drag
SeatingPlan.jsx | The root component that wraps 1 SeatBoard and 1 StudentContainer

### **Scheduling**
The **Scheduling** folder stores all the files responsible for this part. Basically the scheduling page consists of a calendar on top and a table list at bottom. The **Calendar** component are written in seperate file, which can be modified for customization.

### **Teacher**
This part mainly consists of 2 components. One of them is a list displaying all the teachers in a contact list way. The right side bar acts like a phone book "Quick navigation" feature, which is **not yet implemented**. Top right corner "Add button" directs the user to a page that can add new teachers.

### **Library**
This part consists of 3 components. Main page will be a list that showing all the library (or should say all the general teaching materials for all seminars). User can view all the files related to the library upon clicking to the library on the list. Basically it acts like a file explorer.

### **Reminder**
This page contains a list that shows all the reminder about the upcoming seminars and upcoming events. Reminders can be dismissed.

### **Header and Footer Bar**
The **HeaderBar.jsx** and **FooterBar.jsx** in the root path are responsible for the header control bar and the footer navigation bar. Basically footer bar is mainly used for switching between the **5** components in dashboard. The header bar will control the titles and buttons to be displayed **according to the current URL path**.

## Redux Folder
---
To be finished

## Core Library
---
* Material UI (https://github.com/mui-org/material-ui)
* Redux (https://github.com/reduxjs/redux)
* React-Redux (https://github.com/reduxjs/react-redux)
* React DnD (https://github.com/react-dnd/react-dnd)
* React QR Reader (https://github.com/JodusNodus/react-qr-reader)

## Task List
- [ ] phone book feature in teachers page
- [ ] infinite scroll feature in teachers page
- [x] seating plan feature
- [ ] messenger feature in itinerary management page
- [ ] integrate frontend into redux

##### Last update on 14/8/2018 (Not Complete)