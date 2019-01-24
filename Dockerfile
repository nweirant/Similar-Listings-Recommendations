FROM node:8
WORKDIR /app
COPY package*.json ./
RUN npm install
ENV MONGO_URI=mongodb://talal:shadie12@54.175.166.47/homes
ENV REDIS_HOST=34.198.87.158
COPY . .
EXPOSE 9011
EXPOSE 6379
CMD ["npm", "start"]
