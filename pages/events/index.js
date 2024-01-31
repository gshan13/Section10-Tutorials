import {getAllEvents} from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import EventsSearch from './events-search';
import { useRouter } from 'next/router';
import Head from 'next/head';

function AllEventsPage(props) {
    const {events} = props;
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <>
            <Head>
                <title>All my events</title>
            </Head>
            <Head>
                <title>All Events</title>
                <meta 
                    name="description"
                    content="Find a lot of great events that allow yo uto evolve..."
                />
            </Head>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events} />
        </>
    );
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events: events,
        },
        revalidate: 60
    };
}

export default AllEventsPage;