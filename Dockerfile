FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3002

# Command to run the app
CMD ["node", "index.js"]