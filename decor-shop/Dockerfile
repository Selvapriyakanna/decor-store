FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for both client and server
COPY package.json ./
COPY src/client/package.json ./src/client/
COPY src/server/package.json ./src/server/

# Install dependencies for both client and server
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the client application
RUN npm run build --prefix src/client

# Expose the port the app runs on
EXPOSE 3000

# Start the server
CMD ["node", "src/server/src/index.js"]