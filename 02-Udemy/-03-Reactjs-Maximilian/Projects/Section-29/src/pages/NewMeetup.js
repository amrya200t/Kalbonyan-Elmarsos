import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

const NewMeetup = (props) => {
  const history = useHistory();
  const addMeetupHandler = (data) => {
    const sendRequest = async () => {
      const res = await fetch(
        "https://react-http-6e36b-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
    };

    try {
      sendRequest();
      history.push("/");
    } catch (error) {
      //
    }
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
