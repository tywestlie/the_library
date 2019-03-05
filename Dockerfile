# base image
FROM node:9.6.1

# set working directory
WORKDIR /app

COPY . /app

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@1.1.1 -g

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NAME World

# start app
CMD ["npm", "start"]