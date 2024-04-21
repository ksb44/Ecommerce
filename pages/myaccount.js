import React, { useEffect } from 'react';
import Router from 'next/router';
function myaccount() {
 useEffect(()=>{
    if(!localStorage.getItem('accessToken')){
      Router.push('/')
    }
 })
    return (
        <div>accoutn page</div>
    )
}
export default myaccount;