const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
   
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name:'user1',
            room: 'a'
        },{
            id: '2',
            name:'user2',
            room: 'b'
        },{
            id: '3',
            name:'user3',
            room: 'a'
        }]
    });
    it('Should add new user', () => {
    var users = new Users();
    var user = {
        id: '123',
        name: 'name',
        room: 'room'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
});
it('Should Find User', () => {
    var userId = '2'; 
    var user = users.getUser(userId);
    
    expect(user.id).toBe(userId);
});
it('Should not Find User', () => {
    var userId = '99';
    var user = users.getUser(userId);
    
    expect(user).toNotExist();
});
it('Should remove User', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
});

it('Should remove User', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
});

it('Should return room names for Node Course', () => {
    var userList = users.getUesrList('a');

    expect(userList).toEqual(['user1','user3']);
});
it('Should return room names for React Course', () => {
    var userList = users.getUesrList('b');

    expect(userList).toEqual(['user2']);
});
});