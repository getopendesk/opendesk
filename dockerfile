# Build stage for client
FROM node:18-alpine as client-builder
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Build stage for landing
FROM node:18-alpine as landing-builder
WORKDIR /app/landing
COPY landing/package*.json ./
RUN npm install
COPY landing/ .
RUN npm run build

# Build stage for server
FROM node:18-alpine as server-builder
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app

# Copy built applications
COPY --from=client-builder /app/client/dist ./client/dist
COPY --from=landing-builder /app/landing/.next ./landing/.next
COPY --from=server-builder /app/server/dist ./server/dist

# Copy package.json files and install production dependencies
COPY client/package*.json ./client/
COPY landing/package*.json ./landing/
COPY server/package*.json ./server/

WORKDIR /app/client
RUN npm install --production

WORKDIR /app/landing
RUN npm install --production

WORKDIR /app/server
RUN npm install --production

# Set environment variables
ENV NODE_ENV=production
ENV CLIENT_PORT=5173
ENV LANDING_PORT=3000
ENV SERVER_PORT=8000

# Expose ports
EXPOSE 5173 3000 8000

# Start the applications
CMD ["sh", "-c", "cd /app/client && npm start & cd /app/landing && npm start & cd /app/server && npm start"]
