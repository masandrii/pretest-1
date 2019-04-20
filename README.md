# pretest-1-2
project pretest 

starting project 

```
npm init
```
create package.json

```
npm install --save express mysql body-parser
```
because I using express and mysql for restfull API

create database datacenter

and then
```
CREATE TABLE IF NOT EXISTS `production` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(100) NOT NULL DEFAULT '0'
  PRIMARY KEY (`id`)
)
```

for starting project 
```
node index
```

alert by : 
```
Server started on port 3838...
Mysql Connected...
```

for using API you can access by postman 

Insert Data 
```
http://localhost:3838/api/message/???
```

Insert Data (POST)
```
http://localhost:3838/api/message/???
```

Selected ALL Data (GET)
```
http://localhost:3838/api/production
```

Selected Data by ID (GET)
```
http://localhost:3838/api/production/??
```
