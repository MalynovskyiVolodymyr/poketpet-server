const chalk = require('chalk');

const TEST_REQUEST = 'user-friend-request';

var clients = [];

function addToStorageNewUser(data, socket){

    try{
        let user = JSON.parse(data);
        let findOne = false;
        user.socket = socket;

        clients.forEach((element, index) => {
            if(element.id == user.id && element.socket.id != socket.id){
                element.socket = socket;
                console.log(chalk.blue('user was updated'));
                findOne = true;
            }
        });

        if(findOne){

        }else{
            clients.push(user);
            console.log(chalk.yellow('new user was added'));
        }

    }catch(e){
        console.log(e);
    }
}

function catchErrors(data, callback, eventType){
    let tempData = null;
    try{
        tempData = JSON.parse(data);
    }catch(e){
        tempData = null;
    }

    callback(tempData, eventType)
}

function userFriendRequest(data, eventType){
    if(!data){
        return;
    }

    clients.forEach((e, i) => {
        if(e.id == data.id){
            e.socket.emit(eventType, JSON.stringify(data));
        }
    });
}

exports.initSockets = function(io){

    console.log('in init sockets');

    io.sockets.on('connection', function (socket) {
        chalk.yellow('connected');
        socket.on('connect-to-server', (data) => {
            chalk.yellow(data)
            addToStorageNewUser(data, socket);
        });

        socket.on('test-request', (data) => {
            catchErrors(data, userFriendRequest, TEST_REQUEST);
        });

    });
};