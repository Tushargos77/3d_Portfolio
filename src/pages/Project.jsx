import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import { projects } from '../constants';

const Project = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 leading-8">
        <p>With a strong interest in modern web technologies and software
          engineering, I focus on developing applications that combine
          performance, usability, and clean architecture. I enjoy solving
          complex problems, exploring innovative ideas, and continuously
          improving my skills through real-world projects and hands-on
          experience. Your collaboration is highly valued!</p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-sm text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <div className='flex justify-center items-center flex-col text-center mt-16 mb-20'>
        <p className='font-semibold text-3xl sm:text-4xl sm:leading-snug'>
          Have a project in mind? <br />
          Let's build something <span className='blue-gradient_text font-semibold'>together!</span>
        </p>
        <Link
          to='/contact'
          className='btn mt-8'
        >
          Contact
        </Link>
      </div>
    </section>
  )
}

export default Project