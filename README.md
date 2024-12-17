# poketpet-server
NodeJS Easy Start, My code sample

https://www.linkedin.com/in/volodymyr-malynovskyi-bb2a6b19b link to my LinkedIn profile 

# THIS IS BASIK EXAMPLE FOR NODE JS DEVELOPERS
## I hope it will be usefull)))
-----------------------------------------------

# API description

-----------------------------------------------

USERS

-----------------------------------------------

'/users' POST --- create new user

request model
{
"deviceID":1,
"email":"test667@test.com",
"phoneNumber":"123",
"firstName":"test1 name",
"lastName":"test last name",
"middleName":"test middle name",
"userAge":1,
"petIDs":["1234456","234324234","54676756765756"]
}

response model

{"deviceID":"1","email":"test667@test.com","petIDs":
["1234456","234324234","54676756765756"],"_id":"5db18b36d93d6533ccad8320",
"phoneNumber":"123","firstName":"test1 name","lastName":"test last name",
"middleName":"test middle name","userAge":1,"registrationDate":"2019-10-24T11:29:58.131Z","__v":0}

----------------------------------------------

'/users' PUT --- update user

request model

{
"id":"5db020e5b6f10c21585503f2",
"deviceID":1,
"email":"tes2t@test.com",
"phoneNumber":"123",
"firstName":"test1 name",
"lastName":"test last name",
"middleName":"test middle name",
"userAge":1,
"petIDs":["1234456","234324234","54676756765756"]
}

response model

{"result":"OK"}

----------------------------------------------

'/users?id=USER_ID' GET --- get user by id

response model

[{"deviceID":"1","email":"tes2t@te23st.com","petIDs":["1234456","234324234","54676756765756"],
"_id":"5db18ca7d93d6533ccad8321","phoneNumber":"123","firstName":"test1 name",
"lastName":"test last name","middleName":"test middle name","userAge":1,
"registrationDate":"2019-10-24T11:36:07.530Z","__v":0}]

-----------------------------------------------

'/users?id=USER_ID' DELETE -- remove user by id


response model

{"result":"OK"}

-----------------------------------------------

'/users/device?id=USER_DEVICE_ID' --- get user by device id

response model

[{"deviceID":"1","email":"tes2t@te23st.com","petIDs":["1234456","234324234","54676756765756"],
"_id":"5db18ca7d93d6533ccad8321","phoneNumber":"123","firstName":"test1 name",
"lastName":"test last name","middleName":"test middle name","userAge":1,
"registrationDate":"2019-10-24T11:36:07.530Z","__v":0}]

-----------------------------------------------

FAMILIES

-----------------------------------------------

'/families' POST --- create new family

request model

{
"ownerID": "123123",
"familyName": "test family",
"membersIDs": ["sdfbusdgf","3r3r","tertert"]
}

response model

{"ownerID":"123123","familyName":"test family","membersIDs":["sdfbusdgf","3r3r","tertert"],
"_id":"5db18df5d93d6533ccad8322","registrationDate":"2019-10-24T11:41:41.861Z","__v":0}

-----------------------------------------------

'/families' PUT --- update model

request model

{
"id":"5db06aae8bc59b1b0c30ec5c",
"ownerID": "12vfvfvf3123",
"familyName": "2222222test family",
"membersIDs": ["sdfbusdgf","3r3r","tertert"]
}

response model

{"result":"OK"}

-----------------------------------------------

'/families?id=FAMILY_ID' GET --- get family by id


response model

[{"ownerID":"123123","familyName":"test family","membersIDs":["sdfbusdgf","3r3r","tertert"],
"_id":"5db18f9cd93d6533ccad8323","registrationDate":"2019-10-24T11:48:44.473Z","__v":0}]

------------------------------------------------

'/families?id=FAMILY_ID' DELETE --- remove family by id

response model

{"result":"OK"}

------------------------------------------------

PETS

-----------------------------------------------

'/pets' POST --- create new pet

request model
{
"petName":1,
"petAge":2,
"petWeigh":43,
"petHeight":12,
" breed":"test last name",
"masters":["1234456","234324234","54676756765756"]
}


response model

{"petAge":2,"petWeigh":43,"petHeight":12,
"breed":"new Breed","masters":["1234456","234324234","54676756765756"],
"_id":"5db192cdd93d6533ccad8329","petName":"1",
"registrationDate":"2019-10-24T12:02:21.201Z","__v":0}

------------------------------------------------

'/pets' PUT --- update pet

request model

{
"id":"5db192cdd93d6533ccad8329",
"petName":"test212322@test.com",
"petAge":123,
"petWeigh":123,
"petHeight":12,
"breed":"test la222st name",
"masters":["1234456","234324234","54676756765756"]
}

reponse model

{"result":"OK"}

---------------------------------------------------

'/pets?id=PET_ID' GET --- get pet by id

response model

[{"petAge":123,"petWeigh":123,"petHeight":12,
"breed":"test la222st name","masters":["1234456","234324234","54676756765756"],
"_id":"5db192cdd93d6533ccad8329","petName":"test212322@test.com",
"registrationDate":"2019-10-24T12:02:21.201Z","__v":0}]

----------------------------------------------------

'/pets?id=PET_ID' DELETE --- remove pet by id

response model

{"result":"OK"}
