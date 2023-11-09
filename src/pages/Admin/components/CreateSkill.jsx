import { useState } from "react";
import axios from "axios";

const CreateSkill = () => {
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState(0);

  const addSkill = async (e) => {
    e.preventDefault();
    if (skill === "" || level === 0) {
      alert("Please fill all the fields");
      return; // exit the function to avoid making the api call
    }
    if (level >= 1 && level <= 5) {
      try {
        const res = await axios.post(
          "https://mern-portfolio-yt-backend.vercel.app/api/addSkill",
          {
            skill,
            level,
          }
        );
        alert(res.data.message);
        setSkill("");
        setLevel(0);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Level should be between 1 and 5");
    }
  };

  return (
    <div className="p-4 backdrop-blur-3xl rounded-md w-full lg:w-fit mx-auto">
      <h1 className="text-3xl lg:text-5xl text-white my-5">Create Skill</h1>
      <form className="flex flex-col gap-3" onSubmit={addSkill}>
        <input
          type="text"
          name="skill"
          id="skill"
          placeholder="Enter New Skill"
          className="bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradient-text"
          onChange={(e) => setSkill(e.target.value)}
          value={skill}
        />
        <input
          type="tel"
          name="level"
          id="level"
          placeholder="Not more than 5"
          required
          className="bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradient-text"
          onChange={(e) => setLevel(e.target.value)}
          value={level}
        />
        <button
          type="submit"
          className="bg-purple-500 px-3 py-2 border rounded-full mx-auto w-[40vw] lg:w-[10vw] font-bold text-xl"
        >
          Add skill
        </button>
      </form>
    </div>
  );
};

export default CreateSkill;
