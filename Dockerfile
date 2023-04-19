# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source code
COPY . .

# Set environment variables
ENV PORT=3000
ENV SECRET_KEY="xnd_development_C1tlrTFzsJDqMsF7z3Xv4orHqlDwWTWtLFPXqJKO3ZVXnX7kRSU5J2FfbIjom"
ENV XENDIT_URL="https://api.xendit.co"
ENV TOKEN_VERIFIKASI_CALLBACK="XCWHFQRuaOy0kV1f0UcW6x4lIs6cK8hIcsCDIGTPQoWMrsRM"

# Expose port
EXPOSE $PORT

# Start the app
CMD [ "npm", "start" ]
