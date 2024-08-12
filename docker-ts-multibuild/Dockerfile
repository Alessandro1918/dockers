# #Monostage (image size: 208.23 MB):
# FROM node:alpine

# WORKDIR /usr/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# CMD [ "npm", "run", "dev_ts" ]

# ------------------------------

#Multi stage (image size: 153.7 MB):

#1.Build stage:
FROM node:alpine AS build

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#2. Production stage:
FROM node:alpine AS production

WORKDIR /usr/app

COPY package*.json .

RUN npm install --only=production

# "build" is the name of my stage
# "./dist" is my output directory (set by the tsconfig.json file)
COPY --from=build /usr/app/dist ./
COPY .env ./

# tsconfig.json set my rootDir to "./", and
# after build, my "server.ts" is compile to "server.js".
# So, "npx tsx watch src/server.ts" => "node ./server.js"
CMD ["node", "./server.js"]
