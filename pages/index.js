import { useState } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	return (
		<>
			<Head>
				<title>Connect</title>
				<meta
					name="description"
					content="Browse a huge list of highly active meetups"
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</>
	);
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	return { props: { meetups: dummyMeetUps } };
// }

export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://chinmay:chinmay@cluster0.m5uxu.mongodb.net/?retryWrites=true&w=majority"
	);
	const db = client.db();

	const meetupsCollection = db.collection("meetups");
	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	};
}

export default HomePage;
