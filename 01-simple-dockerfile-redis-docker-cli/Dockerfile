# Use an exisiting docker image as base
FROM alpine

# Download and install depencency
RUN apk add --update redis

# Tell the image what to do when it starts as a container
CMD ["redis-server"]