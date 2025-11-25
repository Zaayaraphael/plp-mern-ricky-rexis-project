# Changelog

## [1.0.0] - Initial MVP Release

### Added - Backend

#### Infrastructure
- Express server with MongoDB connection
- JWT authentication with HTTP-only cookies
- Security middleware (Helmet, CORS, rate limiting)
- Global error handling
- Environment variable configuration

#### Models
- User model with roles, progress tracking, bookmarks
- Lesson model with content blocks (text, video, quiz)
- Resource model with tags and SDG categorization

#### Auth System
- POST /api/v1/auth/register - User registration with validation
- POST /api/v1/auth/login - Login with bcrypt password verification
- GET /api/v1/auth/me - Get current user (protected)
- POST /api/v1/auth/logout - Logout and clear cookie
- Rate limiting on auth endpoints (5 requests per 15 minutes)

#### Lessons
- GET /api/v1/lessons - List all published lessons with pagination
- GET /api/v1/lessons/:id - Get single lesson details
- POST /api/v1/lessons/:id/complete - Mark lesson complete/incomplete (protected)
- POST /api/v1/lessons - Create lesson (admin only)

#### Database Seeding
- Seed script with idempotent operations
- Admin user creation (admin@werp.local / Admin123!)
- Full "Digital Skills for Micro-Entrepreneurs" module with 5 lessons:
  1. Introduction to Digital Entrepreneurship
  2. Mobile Marketing Essentials
  3. Online Selling Platforms
  4. Financial Basics for Entrepreneurs
  5. Next Steps and Growth Strategies
- 10 sample resources covering various topics
- Each lesson includes text blocks and YouTube video embeds

### Added - Frontend

#### Core Setup
- React 18 + Vite development environment
- React Router for navigation
- TanStack Query for data fetching
- Tailwind CSS with custom theme (teal primary, coral accent)
- Inter font family

#### Authentication
- AuthContext with user state management
- Login page with form validation
- Register page with password requirements
- Automatic user fetch on app load
- Protected route handling

#### Pages
- Home page with hero section and feature cards
- Courses page showing available module + 3 "Coming Soon" modules
- CourseDetail page listing all lessons in a module
- LessonPage with full lesson content
- Login and Register pages

#### Components
- Header with navigation and auth status
- Footer with site links
- LessonPlayer with content block rendering:
  - Text blocks with HTML rendering
  - YouTube video embeds (responsive aspect ratio)
  - Quiz placeholders
  - Mark Complete button with state management
- Responsive card components

#### Features
- Mobile-first responsive design
- "Coming Soon" courses with grayscale images and disabled CTAs
- Progress tracking (mark lessons complete)
- YouTube video embeds
- Clean, accessible UI with proper semantics

### Security
- Bcrypt password hashing (12 rounds)
- JWT stored in HTTP-only cookies
- CORS restricted to client origin
- Helmet security headers
- Input validation with Joi
- Rate limiting on sensitive endpoints

### Documentation
- Comprehensive README with setup instructions
- API endpoint documentation
- Manual test plan (6 test scenarios)
- Deployment checklist
- Environment variable examples

## Acceptance Criteria Met

✅ Auth endpoints functional (register, login, getMe)
✅ HTTP-only cookie JWT storage
✅ One full course module with 5 lessons
✅ Lesson list and detail endpoints
✅ Progress tracking (mark complete)
✅ Resource model and seed data
✅ Mobile-first responsive design
✅ YouTube video embeds working
✅ "Coming Soon" courses visually distinct
✅ Clean code organization
✅ Security basics (bcrypt, JWT, Helmet, CORS, rate limiting)
✅ Seed script with sample data
✅ README with setup and run instructions

## Known Limitations (MVP Scope)

- Only one course module fully implemented
- Forum, mentors, events, stories endpoints not yet implemented
- No automated tests yet
- No bookmarking functionality yet
- No daily feed endpoint yet
- No skill pathways yet
- No file upload functionality
- No admin dashboard

## Next Planned Features

- Mentor matching system
- Events and workshops board
- Community forum (posts + comments)
- Success stories submission
- Safe-space directory
- Personalized daily feed
- Skill pathways with interactive checklist
- Bookmarking functionality
- Automated test suite
- Admin dashboard
