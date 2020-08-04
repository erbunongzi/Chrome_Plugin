// const axios = require('axios');
import axios from 'axios'

export function request(pubToken,fc_ids,userId) {
    const instance = axios.create({
        baseURL: 'http://pub-be.k8s-new.qunhequnhe.com',
        timeout: 1000,
        headers: {'pub-token': pubToken}
    });
    return instance.get('/grey/api/plan/fc/plan-list',{
        params:{
            stage: 0,
            fc_ids: fc_ids,
            ldap: userId
        }
    }).then(res => {
        console.log(res);
        return res.data;
    })
}

// instance.get('/grey/api/plan/fc/plan-list',{
//     params:{
//         stage: 0,
//         fc_ids: 'fc_91,fc_787',
//         ldap: 'bingwa'
//     }
// }).then(res => {
//     console.log(res);
// })