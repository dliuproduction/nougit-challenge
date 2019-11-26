import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { GET_ENTRIES_QUERY } from '../utils/queries';
import { Card, Filter, Layout } from '../components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const filterTasks = (tasks, filter) => {
    var filterTasks;
    if (filter === 'TRENDING') {
        filterTasks = tasks.filter(task => task.isTrending);
    } else if (filter === 'OPEN') {
        filterTasks = tasks.filter(task => task.status === 1);
    } else if (filter === 'CLOSED') {
        filterTasks = tasks.filter(task => task.status === 0);
    } else {
        filterTasks = tasks;
    }
    return filterTasks;
};

const Home = () => {
    const { data, loading, fetchMore, error } = useQuery(GET_ENTRIES_QUERY, {
        variables: { pageSize: 5, after: 0 }
    });
    const [filter, setFilter] = useState(null);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {JSON.stringify(error)}</p>;
    }

    const trackScrolling = () => {
        const trackedElement = document.getElementById('__next');
        var isBottom =
            trackedElement.getBoundingClientRect().bottom <= window.innerHeight;
        if (isBottom) {
            fetchMore({
                query: GET_ENTRIES_QUERY,
                variables: { pageSize: 5, after: data.getEntries.cursor },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    const previousEntries = previousResult.getEntries;
                    const newTasks = fetchMoreResult.getEntries.tasks;
                    const newCursor = fetchMoreResult.getEntries.cursor;
                    const newHasMore = fetchMoreResult.getEntries.hasMore;
                    return {
                        getEntries: {
                            cursor: newCursor,
                            hasMore: newHasMore,
                            tasks: [...previousEntries.tasks, ...newTasks],
                            __typename: previousEntries.__typename
                        }
                    };
                }
            });
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', trackScrolling);

        return () => {
            document.removeEventListener('scroll', trackScrolling);
        };
    }, [trackScrolling]);

    return (
        <React.Fragment>
            <Head>{library.add(faComment, faShare)}</Head>
            <Layout>
                <Filter filter={filter} setFilter={setFilter} />
                <ul>
                    {filterTasks(data.getEntries.tasks, filter).map(task => (
                        <Card task={task} />
                    ))}
                    {loading && `loading...`}
                </ul>
            </Layout>
        </React.Fragment>
    );
};

export default Home;
