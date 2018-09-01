export const isLiked = (array, userName) => {
    if(array){
        for(let i=0;i<array.length; i++){
            if(array[i].userName === userName){
                return true;
            }
        }
        return false;
    }else{
        return false;
    }
}

export const likePost = (array, user) => {
    const time  = Date.now();
    const like = {
        id : user.userName+'&'+time.toString(),
        firstName : user.firstName,
        lastName : user.lastName,
        userName : user.userName,
        profileImage : user.profileImage,
        time: time
    }
    array.push(like);
}

export const dislikePost = (array, userName) => {
    let newArray = [];

    for(let i=0; i< array.length; i++){
        if(array[i].userName !== userName){
            newArray.push(array[i]);
        }
    }

    return newArray;
}