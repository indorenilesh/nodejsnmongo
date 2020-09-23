FROM  amazonlinux

RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash # for node version 10.x
RUN yum -y install nodejs

RUN mkdir -p /app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 8000

ENTRYPOINT node index.js
