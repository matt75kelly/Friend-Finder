var Friend = require("./friend.js");

var FriendList = function(){
    this.friends = [];
    this.addFriend = (pal)=>{
        let friend = new Friend(pal.name, pal.url, pal.scores);
        this.friends.push(friend);
    }
    this.matchFriend = (friend)=>{
        var match;
        let lowestScore = 100;
        for(let i = 0; i < this.friends.length-1; i++){
            let score = this.friends[i].diffScore(friend);
            if(score < lowestScore){
                lowestScore = score;
                match = {
                    name: this.friends[i].name,
                    photo: this.friends[i].photoUrl
                }
            }
        }
        return match;
    }
    this.printFriends = ()=>{
        return console.log(this.friends);
    }
}

module.exports = FriendList;