var Friend = function(name, url, scores){
    this.name = name;
    this.photoUrl = url;
    this.scores = scores;
    this.diffScore = (friend)=>{
        let totalDiff = 0;
        for(let i = 0; i < friend.scores.length; i++){
            totalDiff += Math.abs(friend.scores[i] - this.scores[i]);
        }
        return totalDiff;
    };
    this.printFriend = ()=>{
        return console.log(this);
    }
    this.createRoute = (name)=>{
        let route = "";
        for(let j = 0; j < name.length; j++){
            if(name.charAt(j) === " "){
                route += "-";
            }
            else{
                route += name.charAt(j).toLowerCase();
            }
        }
        return route;
    }
    this.routeName = this.createRoute(name);
}

module.exports = Friend;