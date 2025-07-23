# Use the official lightweight Node.js image.
# https://hub.docker.com/_/node
FROM node:alpine

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package.json package-lock.json ./

# Install production dependencies.
RUN npm install --production

# Copy the local code to the container image.
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "start" ]
