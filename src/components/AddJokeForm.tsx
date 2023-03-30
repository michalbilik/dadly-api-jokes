import React, { useState } from "react";
import { Joke } from "../types/Joke";

interface AddJokeFormProps {
  onAddJoke: (joke: Joke) => void;
}

const AddJokeForm: React.FC<AddJokeFormProps> = ({ onAddJoke }) => {
  const [joke, setJoke] = useState<Joke>({
    id: 0,
    joke: "",
  });

  const handleJokeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJoke((prevJoke) => ({
      ...prevJoke,
      joke: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddJoke(joke);
    setJoke({
      id: 0,
      joke: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="flex items-center">
        <input
          type="text"
          value={joke.joke}
          onChange={handleJokeChange}
          placeholder="Enter a joke"
          className="w-96 p-2 mr-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:border-blue-300 dark:focus:border-blue-500"
        />
        <button type="submit" className="ml-auto whitespace-no-wrap">
          Add Joke
        </button>
      </div>
    </form>
  );
};

export default AddJokeForm;