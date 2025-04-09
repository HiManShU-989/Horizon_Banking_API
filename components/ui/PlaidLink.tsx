import React, { use, useCallback, useEffect, useState } from 'react'
import { Button } from './button'
import {PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink} from 'react-plaid-link' // Ensure this is the correct package or path
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';

const PlaidLink = ({user,variant}:PlaidLinkProps) => {
    const router = useRouter();
    const [token, setToken] = useState('');
    useEffect(() => {
        const getLinkToken = async () => {
           const data =  await createLinkToken(user);
        setToken(data?.linkToken);
    }
    getLinkToken()
}
    ,[user]);
    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token:string) => {
            await exchangePublicToken({
                publicToken:public_token,
                user
            })
            router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    const config:PlaidLinkOptions = {
        token,
        onSuccess
    }
    const {open, ready} = usePlaidLink(config);
  return (
    <>
    {
        variant==='primary' ? (
            <Button
            onClick={()=>open()} 
            disabled={!ready}
            className='plaidlink-primary'>
                Connect Bank Account
            </Button>
        ) : variant === 'ghost' ? (
            <Button>
                Connect Bank Account
            </Button>
        ) : (
            <Button>
                Connect Bank Account
            </Button>
        )
    }
    </>
  )
}

export default PlaidLink
