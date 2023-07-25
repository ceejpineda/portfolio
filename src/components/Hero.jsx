import React from 'react'
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';

const URL = {
  linkedin: 'https://www.linkedin.com/in/aldringuasa/',
  github: 'https://github.com/ishnoopy',
  email: 'mailto:aldringuasa@gmail.com',
  CV: 'https://drive.google.com/file/d/1_D-PrNVighAATzTdx1I4o1QA75vpKKgt/view?usp=sharing'
}


export default function Hero() {
  const techStack = [
    {name: "html-5", src: "/assets/icons/html-5.svg"},
    {name: "css-3", src: "/assets/icons/css-3.svg"},
    {name: "sass", src: "/assets/icons/sass.svg"},
    {name: "angular-icon", src: "/assets/icons/angular-icon.svg"},
    {name: "react", src: "/assets/icons/react.svg"},
    {name: "bootstrap", src: "/assets/icons/bootstrap.svg"},
    {name: "tailwindcss-icon", src: "/assets/icons/tailwindcss-icon.svg"},
    {name: "javascript", src: "/assets/icons/javascript.svg"},
    {name: "jquery", src: "/assets/icons/jquery.svg"},
    {name: "nodejs", src: "/assets/icons/nodejs.svg"},
    {name: "express", src: "/assets/icons/express.svg"},
    {name: "socket.io", src: "/assets/icons/socket.io.svg"},
    {name: "mocha", src: "/assets/icons/mocha.svg"},
    {name: "chai", src: "/assets/icons/chai.svg"},
    {name: "selenium", src: "/assets/icons/selenium.svg"},
    {name: "php", src: "/assets/icons/php.svg"},
    {name: "codeigniter-icon", src: "/assets/icons/codeigniter-icon.svg"},
    {name: "c-plusplus", src: "/assets/icons/c-plusplus.svg"},
    {name: "arduino", src: "/assets/icons/arduino.svg"},
    {name: "ruby", src: "/assets/icons/ruby.svg"},
    {name: "rails", src: "/assets/icons/rails.svg"},
    {name: "capybara", src: "/assets/icons/capybara.png"},
    {name: "rspec", src: "/assets/icons/rspec-svgrepo-com.svg"},
    {name: "docker", src: "/assets/icons/docker.svg"},
    {name: "dotnet", src: "/assets/icons/dotnet.svg"},
    {name: "java", src: "/assets/icons/java.svg"},
    {name: "flutter", src: "/assets/icons/flutter.svg"},
    {name: "python", src: "/assets/icons/python.svg"},
    {name: "git-icon", src: "/assets/icons/git-icon.svg"},
    {name: "github-icon", src: "/assets/icons/github-icon.svg"},
    {name: "github-actions", src: "/assets/icons/github-actions.svg"},
    {name: "firebase", src: "/assets/icons/firebase.svg"},
    {name: "mysql", src: "/assets/icons/mysql.svg"},
    {name: "mongodb", src: "/assets/icons/mongodb.svg"},
    {name: "postgresql", src: "/assets/icons/postgresql.svg"},
    {name: "sqlite", src: "/assets/icons/sqlite.svg"},
    {name: "postman", src: "/assets/icons/postman.svg"}
  ]

    return (
        <>
          <div id="hero" className='min-h-[90vh] lg:min-h-[85vh]  px-8 md:px-28 lg:px-20 pb-10'>
            <div className="prose prose-lg max-w-none mt-12 w-full flex flex-col text-center lg:text-left lg:flex-row lg:mt-24 lg:gap-x-3 min-h-[78vh] md:min-h-[62vh] lg:min-h-0">
              <div className='order-2 mt-8 lg:order-1'>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h1 className='text-4xl md:text-5xl lg:text-6xl'>Full-Stack Web Developer</h1>
                <p>Hi, I'm Ruel Aldrin Guasa. A passionate Full-Stack Web Developer based in Legazpi, Philippines. 📍</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='flex flex-col items-center'
              >
                <Button variant="contained" color='info'><a href={URL.CV} className='nav-link no-underline text-white' target='_blank'>View CV</a></Button>
                <div className="flex mt-2 w-full justify-center">
                  <a href={URL.linkedin} target='_blank'><LinkedInIcon fontSize="large" className='cursor-pointer opacity-90 hover:scale-110 hover:opacity-100' /></a>
                  <a href={URL.github} target='_blank'><GitHubIcon fontSize="large" className='cursor-pointer opacity-90 hover:scale-110 hover:opacity-100' /></a>
                  <a href={URL.email}><EmailIcon fontSize="large" className='cursor-pointer opacity-90 hover:scale-110 hover:opacity-100' /></a>
                </div>
                
              </motion.div>
              
              </div>
              <div className='flex justify-center order-1'>
                  <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1}}
                   transition={{ duration: 1 }}
                  >
                    <div className='hero-img aspect-square'></div>
                  </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-col lg:flex-row lg:mt-28">
                <h3 className='underline mt-14 font-bold text-xl lg:text-2xl lg:w-1/4'>Tech Stack</h3>
                <div className="flex flex-wrap justify-center mt-8 gap-4 lg:w-3/4">
                  {techStack.map((icon, index) => (
                    <img
                      src={icon.src}
                      alt={icon.name}
                      key={index}
                      className='aspect-square w-11 rounded-full bg-gray-200 border-2 border-gray-500 p-1 hover:scale-150 duration-200 shadow-md'
                    />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </>
      );
    }
