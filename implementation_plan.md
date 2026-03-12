# To-Do App with Pomodoro Timer & Streaks

A feature-rich, single-page To-Do web application with an interactive homepage, task management, Pomodoro timer, streak tracking, and user profile.

## Tech Stack

- **Build**: Vite (vanilla JS) — fast dev server, zero config
- **Styling**: Vanilla CSS with CSS custom properties (dark mode, glassmorphism, micro-animations)
- **Persistence**: `localStorage` (no backend required)
- **Fonts**: Google Fonts (Inter)
- **Icons**: Inline SVGs

## Proposed Changes

### Project Initialization

#### [NEW] [package.json](file:///c:/Users/globa/Antigravity_projects/project_2/package.json)
Vite project initialized via `npx create-vite@latest ./ --template vanilla`

#### [NEW] [index.html](file:///c:/Users/globa/Antigravity_projects/project_2/index.html)
Root HTML with `<div id="app">`, Google Fonts link, meta tags for SEO.

---

### Design System

#### [NEW] [src/style.css](file:///c:/Users/globa/Antigravity_projects/project_2/src/style.css)
- CSS custom properties for colors, spacing, typography, border-radius
- Dark theme with deep navy/purple gradients
- Glassmorphism card styles (backdrop-filter, semi-transparent backgrounds)
- Smooth transitions and hover micro-animations
- Responsive grid layout utilities

---

### Core App & Navigation

#### [NEW] [src/main.js](file:///c:/Users/globa/Antigravity_projects/project_2/src/main.js)
- SPA router: hash-based navigation (`#home`, `#tasks`, `#timer`, `#profile`)
- Sidebar/menu bar with nav links and active state highlighting
- Initializes all modules on DOMContentLoaded

#### [NEW] [src/store.js](file:///c:/Users/globa/Antigravity_projects/project_2/src/store.js)
- Centralized localStorage read/write helpers
- Data models:
  - **Tasks**: `{ id, title, description, completed, createdAt, completedAt }`
  - **Timer Settings**: `{ workMinutes, breakMinutes, longBreakMinutes, sessionsBeforeLongBreak }`
  - **Streaks**: `{ currentStreak, longestStreak, lastActiveDate, dailyLog: { [date]: { tasksCompleted, pomodoroSessions } } }`
  - **Profile**: `{ name, email, avatarUrl, subscription: 'free' | 'pro' }`

---

### Homepage (Dashboard)

#### [NEW] [src/pages/home.js](file:///c:/Users/globa/Antigravity_projects/project_2/src/pages/home.js)
- Welcome greeting with user name from profile
- Summary cards: tasks completed today, active streak, Pomodoro sessions today
- Quick-action buttons: "Add Task", "Start Timer"
- Animated streak flame icon with counter
- Recent tasks list (last 5)

---

### Task Manager

#### [NEW] [src/pages/tasks.js](file:///c:/Users/globa/Antigravity_projects/project_2/src/pages/tasks.js)
- **Add**: Floating action button → modal with title + description fields
- **Edit**: Click task → inline edit or modal edit
- **Delete**: Swipe/button with confirmation
- **Complete**: Checkbox toggle with strike-through animation
- Filter tabs: All / Active / Completed
- Empty state illustration when no tasks

---

### Pomodoro Timer

#### [NEW] [src/pages/timer.js](file:///c:/Users/globa/Antigravity_projects/project_2/src/pages/timer.js)
- Circular progress ring (SVG) showing countdown
- Start / Pause / Reset controls
- Editable settings: work duration, short break, long break, sessions before long break
- Auto-switch between work → break → work cycles
- Audio notification on session end
- Session counter display
- Timer streak (consecutive days of completing at least one Pomodoro)

---

### Streak System

#### [NEW] [src/streak.js](file:///c:/Users/globa/Antigravity_projects/project_2/src/streak.js)
- Tracks two streak types:
  1. **Pomodoro streak**: consecutive days with ≥1 completed Pomodoro session
  2. **Task streak**: consecutive days with ≥1 completed task
- Day boundary detection (midnight rollover)
- Streak display component used on homepage and timer page
- Calendar heat-map style visualization (last 30 days)

---

### Profile Page

#### [NEW] [src/pages/profile.js](file:///c:/Users/globa/Antigravity_projects/project_2/src/pages/profile.js)
- Avatar display (editable via URL input or file upload to data URI)
- Name and email display/edit
- Subscription status badge (Free / Pro)
- Stats summary: total tasks completed, total Pomodoro sessions, longest streak
- Settings section for theme preferences

---

## Verification Plan

### Automated (Browser Testing)
I will use the browser subagent to verify each feature:

1. **Run dev server**: `npm run dev` in project directory
2. **Homepage**: Navigate to the app, verify greeting, summary cards render, quick-action buttons work
3. **Task CRUD**: Add a task via modal → verify it appears → edit the title → verify it updates → mark complete → verify strike-through → delete → verify removal
4. **Pomodoro Timer**: Navigate to timer → change work time to 1 min → start timer → verify countdown → verify break auto-starts
5. **Streaks**: Complete a task and Pomodoro session → verify streak counter increments on homepage
6. **Profile**: Navigate to profile → edit name/email → verify changes persist after page refresh
7. **Navigation**: Click each nav link → verify correct page renders

### Manual Verification (User)
- Visual review of the app's design, animations, and responsiveness
- Test on different screen sizes
