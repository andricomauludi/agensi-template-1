# Use the official Nginx image as the base image
FROM nginx:alpine

COPY . /usr/share/nginx/html/

# Expose port 3001 (for your static content)
EXPOSE 3000

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
