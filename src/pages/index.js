import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { GET_ENTRIES_QUERY } from '../utils/queries';

const Home = () => {
    // Create a query hook
    const { data, loading, error } = useQuery(GET_ENTRIES_QUERY);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {JSON.stringify(error)}</p>;
    }
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <ul>
                {
                    console.log(data)
                }
            </ul>
        </div>
    );
};

export default Home;
