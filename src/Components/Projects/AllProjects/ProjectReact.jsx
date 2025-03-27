import React from 'react';

const ProjectReact = () => {
  const projects = [
    {
      title: "My X",
      liveUrl: "https://my-x-zeta.vercel.app/",
    },
    {
      title: "My Blog",
      liveUrl: "https://my-blog-sszt.vercel.app/",
    },
    {
      title: "My To Do",
      liveUrl: "https://my-to-do-ivory-two.vercel.app/",
    },
    {
      title: "Currency Converter",
      liveUrl: "https://currency-converter-one-lilac.vercel.app/",
    },
    {
      title: "My Profile",
      liveUrl: "https://my-profile-lime-theta.vercel.app/",
    },
    {
      title: "Password Generator",
      liveUrl: "https://password-generator-murex-six.vercel.app/",
    },
    {
      title: "Concept Coaching Classes",
      liveUrl: "https://ccc-six-chi.vercel.app/",
    },
    {
      title: "My React First",
      liveUrl: "https://demo-project-nine-theta.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      {projects.map((project, index) => (
        <div key={index} className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
          <iframe
            src={project.liveUrl}
            title={project.title}
            className="w-full h-[500px] border-none rounded-lg"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default ProjectReact;
