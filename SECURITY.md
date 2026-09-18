# Security Policy

## Supported Versions

The following versions of this project are currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.2.x   | :white_check_mark: |
| 1.1.x   | :white_check_mark: |
| 1.0.x   | :x:                |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please report it responsibly.

### What to Report

- Security vulnerabilities in the code
- Data exposure risks
- Authentication/authorization issues
- Injection vulnerabilities (XSS, SQL, etc.)
- Dependency vulnerabilities
- Configuration issues

### How to Report

**DO NOT** create a public GitHub issue for security vulnerabilities.

Instead, please email us at: **security@solarnaija.com**

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if you have one)

### What to Expect

- **Acknowledgment**: Within 48 hours
- **Initial assessment**: Within 5 business days
- **Updates**: Regular updates on progress
- **Resolution**: We aim to fix critical issues within 7 days

### Disclosure Policy

- We follow responsible disclosure practices
- We will work with you to understand and validate the issue
- We will provide a timeline for fixing the issue
- We request that you do not publicly disclose the issue until we have had a chance to address it
- We will credit you in the security advisory (unless you prefer to remain anonymous)

## Security Best Practices

### For Contributors

1. **Keep dependencies updated**
   ```bash
   npm audit
   npm update
   ```

2. **Never commit secrets**
   - Use environment variables
   - Add sensitive files to `.gitignore`
   - Use `.env.local` for local development

3. **Validate user input**
   - Sanitize all form inputs
   - Use TypeScript for type safety
   - Validate on both client and server

4. **Use HTTPS**
   - All production deployments should use HTTPS
   - Redirect HTTP to HTTPS

5. **Keep credentials secure**
   - Never hardcode API keys
   - Use environment variables
   - Rotate keys regularly

### For Users

1. **Keep your browser updated**
2. **Use strong, unique passwords**
3. **Be cautious of phishing attempts**
4. **Report suspicious activity**

## Security Measures

### Implemented

- ✅ TypeScript for type safety
- ✅ Input validation on forms
- ✅ XSS prevention (React's built-in escaping)
- ✅ HTTPS-ready deployment configuration
- ✅ No hardcoded secrets
- ✅ Environment variable usage
- ✅ Cookie consent for privacy
- ✅ Secure form submission (Web3Forms)

### Planned

- [ ] Content Security Policy (CSP) headers
- [ ] Rate limiting on forms
- [ ] CAPTCHA for form submissions
- [ ] Security headers (X-Frame-Options, etc.)
- [ ] Regular dependency audits
- [ ] Automated security scanning

## Dependencies

We regularly audit dependencies for vulnerabilities:

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Fix vulnerabilities that may require breaking changes
npm audit fix --force
```

## Third-Party Services

This project uses the following third-party services:

- **Web3Forms** — Contact form submission
- **Google Analytics** — Traffic analytics (optional)
- **Vercel/Netlify** — Hosting and deployment
- **Jumia/Konga** — Affiliate links

Each service has its own security practices. We recommend reviewing their security documentation.

## Contact

For security concerns:
- **Email**: security@solarnaija.com
- **GitHub**: [@ericprince957-cloud](https://github.com/ericprince957-cloud)

---

Thank you for helping keep SolarNaija secure! 🔒
