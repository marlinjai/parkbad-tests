# Contact Form Playwright Tests

End-to-end tests for the contact form on your NextJS project deployed on Vercel.

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Playwright Browsers
```bash
npm run test:install
```

### 3. Configure Base URL
Update the `PLAYWRIGHT_BASE_URL` in your environment or the playwright.config.ts file to point to your Vercel deployment.

## Running Tests

### Local Development
```bash
# Run all tests headless
npm test

# Run tests with browser UI visible
npm run test:headed

# Run tests in interactive UI mode
npm run test:ui

# Debug tests step by step
npm run test:debug
```

### View Test Reports
```bash
npm run test:report
```

## Test Coverage

The test suite covers:

- ✅ **Form Display**: Verifies all form fields are visible
- ✅ **Validation**: Tests empty field validation and email format validation
- ✅ **Submission**: Tests successful form submission
- ✅ **Loading States**: Verifies loading indicators during submission
- ✅ **Accessibility**: Checks form accessibility features
- ✅ **Mobile Responsiveness**: Tests form on mobile devices
- ✅ **Spam Prevention**: Tests rapid submission prevention

## GitHub Actions

The workflow runs automatically on:
- Push to main/master branch (tests production)
- Pull requests (tests preview deployments)
- Manual trigger with custom URL

### Setup GitHub Actions

1. **Update Production URL**: Edit `.github/workflows/playwright.yml` and replace `https://your-app.vercel.app` with your actual Vercel URL

2. **Vercel Integration**: The workflow automatically waits for and tests Vercel preview deployments on pull requests

## Environment Variables

- `PLAYWRIGHT_BASE_URL`: The base URL of your application to test

## Test Structure

```
tests/
├── contact-form.spec.ts    # Main contact form tests
```

## Configuration

The `playwright.config.ts` file includes:
- Multi-browser testing (Chrome, Firefox, Safari)
- Mobile device testing
- Screenshot/video capture on failures
- Test reporting in multiple formats

## Customizing Tests

To adapt tests for your specific contact form:

1. **Update Selectors**: Modify the CSS selectors in `contact-form.spec.ts` to match your form fields
2. **Update Routes**: Change the `/contact` route if your form is on a different page
3. **Update Validation**: Adjust validation test expectations based on your form's behavior
4. **Add Fields**: Add tests for any additional form fields you have

## Troubleshooting

### Tests Failing?
1. Check that your form selectors match what's in the tests
2. Verify your contact form route is accessible
3. Ensure form validation messages match the expected patterns
4. Check browser console for JavaScript errors

### GitHub Actions Failing?
1. Verify your Vercel production URL is correct
2. Check that your site is accessible publicly
3. Review the action logs for specific error messages

## Contributing

When adding new tests:
1. Follow the existing naming convention
2. Add descriptive test names
3. Include proper error handling
4. Test both positive and negative scenarios 