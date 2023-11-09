import React, { useState } from "react";
import { uploadImage } from "../../../helpers/uploadImage";
import axios from "axios";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedImg, setSelectedImg] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [hostedUrl, setHostedUrl] = useState("");

  const handleImg = (e) => {
    const file = e.target.files[0];
    setSelectedImg(file);
  };

  const addProject = async (e) => {
    e.preventDefault();

    if (!name || !desc || !selectedImg) {
      return console.log("Please fill all the required fields");
    }

    const uploadedImg = await uploadImage(selectedImg);

    if (!uploadedImg) {
      return console.log("image not uploaded");
    }

    try {
      const res = await axios.post("https://mern-portfolio-yt-backend.vercel.app/api/addProject", {
        name,
        desc,
        githubUrl,
        hostedUrl,
        secureUrl: uploadedImg.secureUrl,
        publicId: uploadedImg.publicId,
        deleteToken: uploadedImg.deleteToken,
      });
      alert(res.data.message);
      setName("");
      setDesc("");
      setSelectedImg("");
      setGithubUrl("");
      setHostedUrl("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-3 backdrop-blur-3xl rounded-md w-fit mx-auto ">
      <h1 className="text-3xl lg:text-5xl text-white mb-5">Create Project</h1>
      <form className="flex flex-col gap-3" onSubmit={addProject}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Project Name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradient-text"
        />
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="8"
          placeholder="Project Description"
          required
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="bg-transparent px-3 py-2 border rounded-lg w-full lg:w-[40vw] font-bold text-xl gradient-text"
        />
        <div>
          <label htmlFor="img" className="text-white text-xl gradient-text">
            Project Image :
          </label>
          <input
            type="file"
            name="img"
            id="img"
            accept="image"
            onChange={handleImg}
            required
          />
        </div>
        <input
          type="url"
          name="githubUrl"
          id="githubUrl"
          placeholder="Github Url"
          onChange={(e) => setGithubUrl(e.target.value)}
          value={githubUrl}
          className="bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradient-text"
        />
        <input
          type="url"
          name="hostedbUrl"
          id="hostedUrl"
          placeholder="Hosted Url"
          onChange={(e) => setHostedUrl(e.target.value)}
          value={hostedUrl}
          className="bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradient-text"
        />
        <button
          type="submit"
          className="bg-purple-500 px-3 py-2 border rounded-full mx-auto w-[40vw lg:w-[10vw] font-bold text-xl"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
