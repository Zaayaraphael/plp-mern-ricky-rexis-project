# Manual Test Plan - Shepower Nexus Hub MVP

## Prerequisites
- Server running on http://localhost:5000
- Client running on http://localhost:5173
- Database seeded with sample data

## Test Scenarios

### 1. User Registration Flow

**Steps:**
1. Navigate to http://localhost:5173
2. Click "Sign Up" button in header
3. Fill in registration form:
   - Name: "Test User"
   - Email: "test@example.com"
   - Password: "Test123!"
4. Click "Sign Up" button

**Expected Results:**
- ✅ Form validates input
- ✅ User is created in database
- ✅ User is automatically logged in
- ✅ Redirected to home page
- ✅ Header shows "Hi, Test User"
- ✅ "Logout" button appears in header

**Error Cases to Test:**
- Password less than 6 characters → Shows error message
- Email already exists → Shows "User already exists" error
- Invalid email format → Browser validation error

---

### 2. User Login Flow

**Steps:**
1. If logged in, click "Logout"
2. Click "Login" in header
3. Enter credentials:
   - Email: "admin@werp.local"
   - Password: "Admin123!"
4. Click "Login" button

**Expected Results:**
- ✅ User is authenticated
- ✅ Redirected to home page
- ✅ Header shows "Hi, Admin User"
- ✅ Auth state persists on page refresh

**Error Cases:**
- Wrong password → "Invalid credentials" error
- Non-existent email → "Invalid credentials" error
- Empty fields → Browser validation

---

### 3. View Courses and Lessons

**Steps:**
1. Click "Courses" in navigation
2. Observe course cards
3. Click on "Digital Skills for Micro-Entrepreneurs" card
4. Observe lesson list

**Expected Results:**
- ✅ One available course card displays with green "Available Now" badge
- ✅ Three "Coming Soon" courses display with grayscale images
- ✅ "Coming Soon" courses have disabled buttons
- ✅ Clicking available course navigates to course detail page
- ✅ Course detail shows 5 lessons numbered 1-5
- ✅ Each lesson card shows title, description, and duration

---

### 4. Lesson Player and Content

**Steps:**
1. From course detail page, click on "Introduction to Digital Entrepreneurship"
2. Observe lesson content
3. Scroll through all content blocks
4. Play the YouTube video

**Expected Results:**
- ✅ Lesson title and description display at top
- ✅ Module name and duration show below title
- ✅ Text content renders with proper HTML formatting
- ✅ YouTube video embeds in responsive container
- ✅ Video plays when clicked
- ✅ Content blocks appear in correct order
- ✅ "Mark as Complete" button visible (if logged in)

---

### 5. Progress Tracking (Mark Complete)

**Steps:**
1. Ensure you are logged in
2. Open any lesson
3. Scroll to bottom
4. Click "Mark as Complete" button
5. Observe button change
6. Refresh the page
7. Check button state

**Expected Results:**
- ✅ Button changes to "✓ Completed" with green background
- ✅ Button text updates immediately
- ✅ Progress persists after page refresh
- ✅ Clicking again toggles back to incomplete
- ✅ If not logged in, shows "Please login to track your progress" alert

**Database Verification:**
- Check user document in MongoDB
- Verify `progress` array contains entry with lessonId and completed: true

---

### 6. Responsive Design

**Steps:**
1. Open browser DevTools
2. Toggle device toolbar (mobile view)
3. Test at different breakpoints:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1280px)
4. Navigate through all pages

**Expected Results:**
- ✅ Mobile: Single column layout, hamburger menu (if implemented)
- ✅ Tablet: 2-column grid for cards
- ✅ Desktop: 3-column grid for cards
- ✅ All text is readable at all sizes
- ✅ Buttons and links are easily tappable on mobile
- ✅ Images scale appropriately
- ✅ No horizontal scrolling
- ✅ Navigation is accessible

---

## API Testing (Optional - Using Postman/curl)

### Test Auth Endpoints

```bash
# Register
curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"API Test","email":"api@test.com","password":"Test123!"}'

# Login
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -c cookies.txt \
  -d '{"email":"api@test.com","password":"Test123!"}'

# Get Me (requires cookie)
curl -X GET http://localhost:5000/api/v1/auth/me \
  -b cookies.txt
```

### Test Lesson Endpoints

```bash
# Get all lessons
curl http://localhost:5000/api/v1/lessons

# Get single lesson (replace ID)
curl http://localhost:5000/api/v1/lessons/[LESSON_ID]

# Mark complete (requires auth)
curl -X POST http://localhost:5000/api/v1/lessons/[LESSON_ID]/complete \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{"completed":true}'
```

---

## Acceptance Checklist

- [ ] User can register and login
- [ ] Auth persists across page refreshes
- [ ] One course module is fully available
- [ ] 5 lessons display in correct order
- [ ] Lesson content renders properly (text + video)
- [ ] YouTube videos embed and play
- [ ] Mark complete functionality works
- [ ] Progress persists in database
- [ ] "Coming Soon" courses are visually distinct
- [ ] "Coming Soon" course buttons are disabled
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] All links navigate correctly
- [ ] Logout clears auth state

---

## Performance Checks

- [ ] Page load time < 3 seconds
- [ ] No memory leaks (check DevTools)
- [ ] Images load efficiently
- [ ] API responses < 500ms
- [ ] No unnecessary re-renders

---

## Accessibility Checks

- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Semantic HTML used
- [ ] Alt text on images
- [ ] Color contrast meets WCAG AA
- [ ] Form labels properly associated

---

## Browser Compatibility

Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Security Checks

- [ ] Passwords are hashed in database
- [ ] JWT stored in HTTP-only cookie
- [ ] No sensitive data in localStorage
- [ ] CORS properly configured
- [ ] Rate limiting works on auth endpoints
- [ ] SQL injection not possible (using Mongoose)
- [ ] XSS protection (React escapes by default)

---

## Notes

- All tests should pass before considering MVP complete
- Document any bugs found during testing
- Create issues for any failed tests
- Retest after bug fixes
