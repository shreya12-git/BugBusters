import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="mt-9 ml-8 mr-8 bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{project.description}</p>
        <div className="mt-4">
          <a
            href="#"
            className="inline-block bg-[#365486] text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/300',
    },
    // Add more projects as needed
    {
        id: 3,
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 4,
        title: 'Project 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 5,
        title: 'Project 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 6,
        title: 'Project 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://via.placeholder.com/300',
      },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
