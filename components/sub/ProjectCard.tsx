import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
        />
        <div className="relative p-4 bg-[#030014] hover:bg-[#2A0E61] transition-colors duration-300">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300 line-clamp-3">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;