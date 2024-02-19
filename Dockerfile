# Use an official Node.js runtime as the base image
FROM oven/bun

#SHELL ["/bin/bash", "-c"]





# Set the working directory in the container to /app
WORKDIR /app

COPY . .

RUN ["/bin/bash", "-c", "bun install postgres"]
RUN ["/bin/bash", "-c", "bun install"]

CMD ["/bin/bash", "-c", "bun index.js"]

# Install the dependencies in the package.json
#RUN ["/bin/bash", "-c", "bun index.js"]

# Copy the rest of your application's source files into the working directory

#
## Define the command to run your app (this will vary depending on how you usually start your app)
#RUN ["/bin/bash", "-c", "bun", "your-app.js"]