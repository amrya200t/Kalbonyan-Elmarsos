import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const AllMeetups = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch(
        "https://react-http-6e36b-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await res.json();

      for (const key in data) {
        setMeetups((prevState) => [...prevState, { id: key, ...data[key] }]);
      }
      setIsLoading(false);
    };

    try {
      sendRequest();
    } catch (error) {
      //
    }
  }, []);

  useEffect(() => {
    console.log(meetups);
  }, [meetups]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* {isLoading && <p>Loading...</p>} */}
      <MeetupList meetups={meetups} />
    </section>
  );
};

export default AllMeetups;
