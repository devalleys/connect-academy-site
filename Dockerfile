
# Build stage
FROM node:22.13.1-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN npx nx run connect-academy:build

# Production stage
FROM node:22.13.1-alpine AS runner

WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application from builder stage
COPY --from=builder /app/apps/connect-academy/.next ./.next
COPY --from=builder /app/apps/connect-academy/next.config.js ./
COPY --from=builder /app/apps/connect-academy/package.json ./
COPY --from=builder /app/apps/connect-academy/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Change ownership to nextjs user
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npx", "next", "start"]
