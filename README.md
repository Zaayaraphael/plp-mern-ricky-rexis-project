# Shepower Nexus Hub - Women Empowerment Resource Portal

A MERN stack web application providing learning resources, mentorship, and community support for women entrepreneurs.

## Features (MVP)

- ✅ User Authentication (JWT with HTTP-only cookies)
- ✅ Interactive Learning Module (Digital Skills for Micro-Entrepreneurs - 5 lessons)
- ✅ Lesson Progress Tracking
- ✅ Resource Library
- ✅ Mobile-first Responsive Design
- 🚧 Additional features in development

## Tech Stack

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt password hashing
- Joi validation
- Helmet, CORS, Rate limiting

**Frontend:**
- React 18 + Vite
- React Router
- TanStack Query (React Query)
- Tailwind CSS
- Axios

## Prerequisites

- Node.js 18+ 
- MongoDB (local or Atlas)
- npm or yarn

## Setup Instructions

### 1. Clone and Install

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 2. Environment Variables

Create `server/.env` file:

```env
MONGODB_URI=mongodb://localhost:27017/werp-portal
JWT_SECRET=your-super-secret-jwt-key-change-in-production
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:5173
PORT=5000
```

For MongoDB Atlas, use your connection string:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/werp-portal
```

### 3. Seed Database

```bash
cd server
node seed.js
```

This creates:
- Admin user (email: `admin@werp.local`, password: `Admin123!`)
- 5 lessons for "Digital Skills for Micro-Entrepreneurs" module
- 10 sample resources

### 4. Run Development Servers

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
Server runs on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```
Client runs on http://localhost:5173

### 5. Test the Application

1. Open http://localhost:5173
2. Register a new account or login with admin credentials
3. Navigate to Courses
4. Click on "Digital Skills for Micro-Entrepreneurs"
5. View lessons and mark them complete

## Project Structure

```
werp-portal/
├── server/
│   ├── src/
│   │   ├── config/         # Database connection
│   │   ├── controllers/    # Route handlers
│   │   ├── middleware/     # Auth, error handling
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # API routes
│   │   └── server.js       # Express app
│   ├── seed.js             # Database seeding
│   └── package.json
├── client/
│   ├── src/
│   │   ├── api/            # Axios instance
│   │   ├── components/     # React components
│   │   ├── contexts/       # Auth context
│   │   ├── pages/          # Page components
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## API Endpoints

### Auth
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/me` - Get current user (protected)
- `POST /api/v1/auth/logout` - Logout user

### Lessons
- `GET /api/v1/lessons` - Get all lessons
- `GET /api/v1/lessons/:id` - Get single lesson
- `POST /api/v1/lessons/:id/complete` - Mark lesson complete (protected)

## Testing

```bash
cd server
npm test
```

## Deployment Checklist

### Environment Variables (Production)
- Set `NODE_ENV=production`
- Use strong `JWT_SECRET` (32+ random characters)
- Set `MONGODB_URI` to production database
- Set `CLIENT_ORIGIN` to production frontend URL

### Security
- Ensure HTTPS is enabled
- Set secure cookie flags in production
- Enable CORS only for your domain
- Use environment variables for all secrets

### Recommended Hosting
- **Backend:** Render, Railway, Heroku
- **Frontend:** Vercel, Netlify
- **Database:** MongoDB Atlas

### Build Commands

**Server:**
```bash
npm start
```

**Client:**
```bash
npm run build
```

## Manual Test Plan

1. **Registration Flow**
   - Go to /register
   - Create account with name, email, password
   - Verify redirect to home page
   - Verify user name appears in header

2. **Login Flow**
   - Logout if logged in
   - Go to /login
   - Login with credentials
   - Verify redirect and authentication

3. **View Lessons**
   - Navigate to /courses
   - Click on available module
   - Verify 5 lessons are displayed
   - Click on a lesson

4. **Lesson Player**
   - Verify lesson title and description display
   - Verify YouTube video embeds and plays
   - Verify text content renders correctly

5. **Mark Complete**
   - Click "Mark as Complete" button
   - Verify button changes to "✓ Completed"
   - Verify progress is saved (refresh page)

6. **Coming Soon Courses**
   - Return to /courses
   - Verify 3 "Coming Soon" courses display
   - Verify they are visually distinct (grayscale)
   - Verify buttons are disabled

## Acceptance Criteria Status

✅ Auth endpoints functional with HTTP-only cookies
✅ One full module with 5 lessons populated
✅ Lesson progress tracking works
✅ Mobile-first responsive design
✅ YouTube video embeds working
✅ "Coming Soon" courses visually distinct
✅ Clean code organization
✅ Security basics implemented
✅ Seed script creates sample data

## Known Limitations (MVP Scope)

- Only one course module fully implemented
- No file upload functionality
- No payment processing
- No admin analytics dashboard
- No real-time chat
- Forum, mentors, events, stories endpoints not yet implemented

## Next Steps

- Implement remaining API endpoints (mentors, events, forum, stories)
- Add automated tests
- Implement bookmarking functionality
- Add daily feed endpoint
- Create skill pathways feature
- Build admin dashboard

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
