import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { GET_ENTRIES_QUERY } from '../utils/queries';
import { Card, Filter, Layout } from '../components';

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
        <Layout>
            <Filter />
            {data.getEntries.tasks.map(entry => (
                <Card task={entry} />
            ))}
        </Layout>
    );
};

export default Home;
