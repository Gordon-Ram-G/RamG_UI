const userNickName=document.querySelector('#user_nickname');
const userImage=document.querySelector('#profile_image');

const NICKNAME_KEY = 'nickname';
const PROFILE_IMAGE_KEY = 'profile_image';

function get_query(){
    var url = document.location.href;
    var qs = url.substring(url.indexOf('?') + 1).split('&');
    for(var i = 0, result = {}; i < qs.length; i++){
        qs[i] = qs[i].split('=');
        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    }
    return result;
}


const savedNickname = localStorage.getItem(NICKNAME_KEY);
const savedProfileImage = localStorage.getItem(PROFILE_IMAGE_KEY);

if (savedNickname === null && savedProfileImage === null)
{
    const result = get_query();
    userNickName.innerText = result.nickname
    userImage.src = result.image_url;    
    localStorage.setItem(`nickname`,result.nickname);
    localStorage.setItem(`profile_image`,result.image_url);
}
else{
    userNickName.innerText = savedNickname;
    userImage.src = savedProfileImage;
}


