var friendData = require("../data/friends");

module.exports= app=>{
    app.get("/api/friends", (req, res)=>{
        res.json(friendsData);
    });
    app.get("/api/friends/:friend", (req, res)=>{
        let friendRoute = req.params.friend;
        let isMatch = false;
        for(let i = 0; i < friendsData.length; i++){
            if(friendRoute === friendsData[i].routeName){
                isMatch = true;
                return res.json(friendsData[i]);
            }
        }
        if(!isMatch){
            return res.send("We could not find a friend by that name");
        }
    });

    app.post("/api/friends", (req, res)=>{
        // console.log(req.body);
        friendData.addFriend(req.body);
        friendData.printFriends();
        let match = friendData.matchFriend(req.body);
        console.log(match.name);
        res.json(match);
    })
};