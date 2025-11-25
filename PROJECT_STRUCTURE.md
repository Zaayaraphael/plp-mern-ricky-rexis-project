# Project Structure - Shepower Nexus Hub

## Directory Tree

```
werp-portal/
│
├── 📄 README.md                    # Main documentation
├── 📄 QUICKSTART.md                # 5-minute setup guide
├── 📄 TEST_PLAN.md                 # Manual testing scenarios
├── 📄 CHANGELOG.md                 # Version history
├── 📄 DELIVERY_SUMMARY.md          # What was delivered
├── 📄 PROJECT_STRUCTURE.md         # This file
├── 📄 .gitignore                   # Git ignore rules
├── 🔧 setup.sh                     # Setup script (Linux/Mac)
├── 🔧 setup.bat                    # Setup script (Windows)
│
├── 📁 server/                      # Backend (Node.js + Express)
│   ├── 📄 package.json             # Dependencies & scripts
│   ├── 📄 .env.example             # Environment variables template
│   ├── 🌱 seed.js                  # Database seeding script
│   │
│   └── 📁 src/
│       ├── 🚀 server.js            # Express app entry point
│       │
│       ├── 📁 config/
│       │   └── db.js               # MongoDB connection
│       │
│       ├── 📁 models/              # Mongoose schemas
│       │   ├── User.js             # User model (auth, progress, bookmarks)
│       │   ├── Lesson.js           # Lesson model (content blocks)
│       │   └── Resource.js         # Resource model (articles, guides)
│       │
│       ├── 📁 controllers/         # Business logic
│       │   ├── authController.js   # Register, login, getMe, logout
│       │   └── lessonController.js # List, detail, mark complete
│       │
│       ├── 📁 routes/              # API endpoints
│       │   ├── auth.js             # /api/v1/auth/*
│       │   └── lessons.js          # /api/v1/lessons/*
│       │
│       └── 📁 middleware/
│           └── auth.js             # JWT verification, role checks
│
└── 📁 client/                      # Frontend (React + Vite)
    ├── 📄 package.json             # Dependencies & scripts
    ├── 📄 index.html               # HTML entry point
    ├── 📄 vite.config.js           # Vite configuration
    ├── 📄 tailwind.config.js       # Tailwind theme
    ├── 📄 postcss.config.js        # PostCSS config
    │
    └── 📁 src/
        ├── 🚀 main.jsx             # React entry point
        ├── 📱 App.jsx              # Main app component with routes
        ├── 🎨 index.css            # Global styles + Tailwind
        │
        ├── 📁 api/
        │   └── axios.js            # Axios instance with interceptors
        │
        ├── 📁 contexts/
        │   └── AuthContext.jsx     # Auth state management
        │
        ├── 📁 components/          # Reusable components
        │   ├── Header.jsx          # Navigation + auth status
        │   ├── Footer.jsx          # Site footer
        │   └── LessonPlayer.jsx    # Lesson content renderer
        │
        └── 📁 pages/               # Page components
            ├── Home.jsx            # Landing page
            ├── Login.jsx           # Login form
            ├── Register.jsx        # Registration form
            ├── Courses.jsx         # Course listing
            ├── CourseDetail.jsx    # Lesson list for a course
            └── LessonPage.jsx      # Single lesson view
```

## File Purposes

### Root Level

| File | Purpose |
|------|---------|
| `README.md` | Complete documentation, setup, API reference, deployment |
| `QUICKSTART.md` | Fast 5-minute setup guide |
| `TEST_PLAN.md` | Manual testing scenarios and acceptance checklist |
| `CHANGELOG.md` | Feature list and version history |
| `DELIVERY_SUMMARY.md` | Overview of what was delivered |
| `.gitignore` | Files to exclude from Git |
| `setup.sh` / `setup.bat` | Automated setup scripts |

### Backend (`server/`)

#### Core Files
- `server.js` - Express app setup, middleware, routes, error handling
- `seed.js` - Database seeding with admin user, lessons, resources
- `.env.example` - Template for environment variables

#### Config
- `config/db.js` - MongoDB connection logic

#### Models (Mongoose Schemas)
- `User.js` - User authentication, roles, progress tracking, bookmarks
- `Lesson.js` - Lesson content with blocks (text, video, quiz)
- `Resource.js` - Articles, guides, opportunities with tags

#### Controllers (Business Logic)
- `authController.js` - Registration, login, JWT generation, validation
- `lessonController.js` - Lesson CRUD, progress tracking

#### Routes (API Endpoints)
- `auth.js` - Auth endpoints with rate limiting
- `lessons.js` - Lesson endpoints with protection

#### Middleware
- `auth.js` - JWT verification, role-based access control

### Frontend (`client/`)

#### Core Files
- `main.jsx` - React app initialization, providers
- `App.jsx` - Route configuration
- `index.css` - Global styles, Tailwind directives
- `index.html` - HTML template

#### Configuration
- `vite.config.js` - Dev server, proxy, build settings
- `tailwind.config.js` - Custom theme (colors, fonts)
- `postcss.config.js` - PostCSS plugins

#### API
- `api/axios.js` - Axios instance with credentials, error handling

#### Contexts
- `AuthContext.jsx` - Global auth state, login/logout functions

#### Components
- `Header.jsx` - Navigation bar with auth status
- `Footer.jsx` - Site footer with links
- `LessonPlayer.jsx` - Renders lesson content blocks, mark complete

#### Pages
- `Home.jsx` - Hero section, features, CTAs
- `Login.jsx` - Login form with validation
- `Register.jsx` - Registration form with validation
- `Courses.jsx` - Course cards (1 available + 3 coming soon)
- `CourseDetail.jsx` - List of lessons in a module
- `LessonPage.jsx` - Full lesson view with player

## Data Flow

### Authentication Flow
```
User → Register.jsx → api/axios.js → /api/v1/auth/register
                                    → authController.register()
                                    → User.create()
                                    → JWT cookie set
                                    → AuthContext updates
                                    → User logged in
```

### Lesson Viewing Flow
```
User → Courses.jsx → CourseDetail.jsx → LessonPage.jsx
                                       → api/axios.js
                                       → /api/v1/lessons/:id
                                       → lessonController.getLesson()
                                       → Lesson.findById()
                                       → LessonPlayer renders content
```

### Progress Tracking Flow
```
User clicks "Mark Complete" → LessonPlayer.jsx
                            → api/axios.js
                            → /api/v1/lessons/:id/complete
                            → auth middleware verifies JWT
                            → lessonController.markLessonComplete()
                            → User.progress updated
                            → UI updates
```

## Key Technologies by Layer

### Backend Stack
- **Runtime:** Node.js 18+
- **Framework:** Express 4
- **Database:** MongoDB + Mongoose
- **Auth:** JWT + bcrypt
- **Validation:** Joi
- **Security:** Helmet, CORS, rate-limit
- **Dev:** morgan (logging), dotenv

### Frontend Stack
- **Library:** React 18
- **Build Tool:** Vite 5
- **Routing:** React Router 6
- **Data Fetching:** TanStack Query
- **HTTP Client:** Axios
- **Styling:** Tailwind CSS 3
- **Fonts:** Google Fonts (Inter)

## Environment Variables

### Server (`.env`)
```env
MONGODB_URI=mongodb://localhost:27017/werp-portal
JWT_SECRET=your-secret-key
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:5173
PORT=5000
```

### Client
No environment variables needed for development (uses Vite proxy).

## Scripts

### Server
```bash
npm run dev    # Start dev server with watch mode
npm start      # Start production server
npm run seed   # Seed database
npm test       # Run tests (when implemented)
```

### Client
```bash
npm run dev      # Start dev server (port 5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

## API Routes

### Auth Routes (`/api/v1/auth`)
- `POST /register` - Create new user
- `POST /login` - Authenticate user
- `GET /me` - Get current user (protected)
- `POST /logout` - Clear auth cookie

### Lesson Routes (`/api/v1/lessons`)
- `GET /` - List all lessons (query: moduleId, page, limit)
- `GET /:id` - Get single lesson
- `POST /:id/complete` - Mark complete (protected)
- `POST /` - Create lesson (admin only)

## Database Collections

### users
- Authentication credentials
- User profile
- Progress array (lessonId, completed, completedAt)
- Bookmarks array
- Skill pathway progress

### lessons
- Title, slug, description
- Module association
- Content blocks array (type, order, content/videoUrl)
- Published status
- Order within module

### resources
- Title, slug, type (article/guide/opportunity/tool)
- Description, body (HTML)
- Tags, SDG tags
- External URL
- Published status

## Component Hierarchy

```
App
├── Header
│   └── (Auth status, navigation)
├── Routes
│   ├── Home
│   │   └── (Hero, features, CTAs)
│   ├── Login
│   │   └── (Login form)
│   ├── Register
│   │   └── (Registration form)
│   ├── Courses
│   │   └── (Course cards)
│   ├── CourseDetail
│   │   └── (Lesson cards)
│   └── LessonPage
│       └── LessonPlayer
│           ├── (Text blocks)
│           ├── (Video embeds)
│           └── (Mark complete button)
└── Footer
    └── (Site links)
```

## Security Layers

1. **Password Security:** bcrypt hashing (12 rounds)
2. **Token Security:** JWT in HTTP-only cookies
3. **Transport Security:** HTTPS in production
4. **Header Security:** Helmet middleware
5. **CORS:** Restricted to client origin
6. **Rate Limiting:** Auth endpoints (5 req/15min)
7. **Input Validation:** Joi schemas
8. **XSS Protection:** React escaping
9. **Injection Protection:** Mongoose parameterization

## Responsive Breakpoints

- **Mobile:** < 768px (default, single column)
- **Tablet:** 768px - 1279px (2 columns)
- **Desktop:** ≥ 1280px (3 columns)

## Color Palette

- **Primary (Teal):** #14b8a6 (600), #0d9488 (700)
- **Accent (Coral):** #f97316 (500), #ea580c (600)
- **Neutral:** Gray scale (50-900)
- **Success:** Green (for completed states)
- **Error:** Red (for error messages)

## Next Files to Add (Future Features)

When implementing remaining features, add:

```
server/src/
├── models/
│   ├── Mentor.js
│   ├── Event.js
│   ├── Post.js
│   ├── Story.js
│   ├── SafeContact.js
│   └── SkillPathway.js
├── controllers/
│   ├── mentorController.js
│   ├── eventController.js
│   ├── forumController.js
│   ├── storyController.js
│   └── feedController.js
└── routes/
    ├── mentors.js
    ├── events.js
    ├── forum.js
    ├── stories.js
    └── feed.js

client/src/
├── pages/
│   ├── Mentors.jsx
│   ├── Events.jsx
│   ├── Forum.jsx
│   ├── Stories.jsx
│   └── Profile.jsx
└── components/
    ├── MentorCard.jsx
    ├── EventCard.jsx
    ├── PostCard.jsx
    └── ProgressTracker.jsx
```

---

This structure provides a solid foundation for the MVP and is ready for expansion.
