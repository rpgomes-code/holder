# Start with Node.js as base image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Install system dependencies including OpenSSL for Prisma
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    curl \
    git \
    openssl \
    && rm -rf /var/lib/apt/lists/*

# Install Bun
RUN npm install -g bun
ENV PATH="/root/.bun/bin:${PATH}"

# Verify Bun installation
RUN bun --version

# Copy package files first (for better layer caching)
COPY package.json ./
COPY bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Set environment variables
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["bun", "run", "dev"]