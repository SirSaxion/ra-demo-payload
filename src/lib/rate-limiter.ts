// Simple in-memory rate limiter for login attempts
// Production: Use Redis or a proper rate limiting service

interface LoginAttempt {
  count: number;
  resetAt: number;
}

const loginAttempts = new Map<string, LoginAttempt>();

// Default values (can be overridden by settings)
let MAX_ATTEMPTS = 5;
const WINDOW_MS = 60 * 1000; // 1 minute

// Function to update rate limit from settings
export function setRateLimit(attempts: number) {
  MAX_ATTEMPTS = attempts;
}

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, attempt] of loginAttempts.entries()) {
    if (now > attempt.resetAt) {
      loginAttempts.delete(ip);
    }
  }
}, 5 * 60 * 1000);

export function checkLoginRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetAt: number;
} {
  const now = Date.now();
  const attempt = loginAttempts.get(ip);

  // No previous attempts or window expired
  if (!attempt || now > attempt.resetAt) {
    loginAttempts.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return {
      allowed: true,
      remaining: MAX_ATTEMPTS - 1,
      resetAt: now + WINDOW_MS,
    };
  }

  // Within window, check if limit exceeded
  if (attempt.count >= MAX_ATTEMPTS) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: attempt.resetAt,
    };
  }

  // Increment count
  attempt.count += 1;
  loginAttempts.set(ip, attempt);

  return {
    allowed: true,
    remaining: MAX_ATTEMPTS - attempt.count,
    resetAt: attempt.resetAt,
  };
}

export function getClientIp(request: Request): string {
  // Try to get real IP from headers (for proxies/load balancers)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  // Fallback to a generic identifier
  return 'unknown';
}
