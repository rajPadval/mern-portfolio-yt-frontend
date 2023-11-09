import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSkills } from "../../../redux/slices/userSlice";
import { MdDelete } from "react-icons/md";

const AllSkills = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.user.skills);

  const getSkills = async () => {
    const res = await axios.get(
      "https://mern-portfolio-yt-backend.vercel.app/api/getSkills"
    );
    const data = await res.data.skills;
    dispatch(setSkills(data));
  };

  const deleteSkill = async (id) => {
    const res = await axios.delete(
      `https://mern-portfolio-yt-backend.vercel.app/api/removeSkill/${id}`
    );
    const data = await res.data;
    alert(data.message);
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-3">
      {skills.map((skill) => {
        return (
          <div
            key={skills._id}
            className="flex justify-between items-center text-white px-3 py-2 border w-[80vw] lg:w-[30vw] rounded-full"
          >
            <span>{skill.skill}</span>
            <progress
              max={100}
              value={skill.level * 20}
              className="progress-bar"
            />
            <MdDelete
              className="hover:scale-125 transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500 "
              onClick={() => deleteSkill(skill._id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AllSkills;
