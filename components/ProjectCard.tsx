// src/components/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  title: string;
  link: string;
  description?: string;
}

const ProjectCard = ({ title, link, description }: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-300 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-zinc-900 hover:shadow-md transition-shadow"
    >
      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h4>
      {description && <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>}
    </a>
  );
};

export default ProjectCard;
