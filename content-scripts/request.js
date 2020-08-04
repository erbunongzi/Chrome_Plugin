// const axios = require('axios');
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://pub-be.k8s-new.qunhequnhe.com',
    timeout: 1000,
    headers: {'pub-token': 'df58458b215dd98580f14cd4064d4d82'}
});

instance.get('/grey/api/plan/fc/plan-list',{
    params:{
        stage: 0,
        fc_ids: 'fc_91,fc_787',
        ldap: 'bingwa'
    }
}).then(res => {
    console.log(res);
})