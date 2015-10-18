angular.module('starter.services', [])

.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Tap hoa Thu Hong',
        lastText: '123 Nguyen Van Cu, Quan 5, Ho Chi Minh',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
        id: 1,
        name: 'Tap hoa Thu Hong',
        lastText: '123 Nguyen Van Cu, Quan 5, Ho Chi Minh',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
        id: 2,
        name: 'Tap hoa Thu Hong',
        lastText: '123 Nguyen Van Cu, Quan 5, Ho Chi Minh',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
        id: 3,
        name: 'Tap hoa Thu Hong',
        lastText: '123 Nguyen Van Cu, Quan 5, Ho Chi Minh',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
        id: 4,
        name: 'Tap hoa Thu Hong',
        lastText: '123 Nguyen Van Cu, Quan 5, Ho Chi Minh',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});