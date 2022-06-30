import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

function NewMeetupPage() {
	const router = useRouter();

	async function addMeetupHandler(enteredMeetupData) {
		console.log(JSON.stringify(enteredMeetupData));
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			body: JSON.stringify(enteredMeetupData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log(response);
		const data = await response.json();
		router.push("/");
	}

	return (
		<>
			<Head>
				<title>Add new Meetup</title>
				<meta
					name="description"
					content="Create amazing networking opportunities"
				/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</>
	);
}

export default NewMeetupPage;
