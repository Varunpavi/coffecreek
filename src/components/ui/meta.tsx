import Head from 'next/head'
import React from 'react'

function Meta({ title: currentPageTitle }:any) {
    return (
        <Head>
            <title>{`${currentPageTitle} ${"Coffee Creek"}`}</title>
        </Head>
    )
}

export default Meta