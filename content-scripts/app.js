import { request } from './request'

window.onload = function(){
		
    const fetchBtn = document.getElementById('fetchBtn');
    const clearBtn = document.getElementById('clearBtn');

    const fcIdNode = document.getElementById('fc_id');
    const userIdNode = document.getElementById('user_ID');
    const tokenNode = document.getElementById('pub_token');
    const authorityNode = document.getElementById('authority');
    
    fetchBtn.onclick = async function(e){
        const fcIds = fcIdNode.value;
        const userId = userIdNode.value;
        const token = tokenNode.value;
        const data = await request(token,fcIds,userId);
        const arr = data.d;
        console.log(arr);
        handleAuthority(arr);
    }
    
    clearBtn.onclick = function() {
        fcIdNode.value = '';
        userIdNode.value = '';
        tokenNode.value = '';
    }

    function handleAuthority(arr) {
        const authArray = [];
        arr.forEach(item => {
            authArray.push(item.description);
        })
        const authString = authArray.join('   ');
        console.log(arr);
        authorityNode.innerHTML = authString;
    }
}