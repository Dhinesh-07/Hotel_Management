# Build Stage
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .


# Build the application
RUN npm run build

# Production Stage
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Install serve globally to serve the built application
RUN npm install -g serve

# Copy the built files from the builder stage
COPY --from=builder /app/build ./build

# Expose the default port
EXPOSE 3000

# Serve the built files
CMD ["serve", "-s", "build"]