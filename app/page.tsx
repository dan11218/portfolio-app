import Navbar from './navbar'
import Jumbotron from './jumbotron'
import Project from './project'
import { promises as fs } from 'fs';

async function getData() {
  const file = await fs.readFile(process.cwd() + '/app/project_data.json', 'utf8');
  const data = JSON.parse(file);
  if (!data) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return data
}

export default async function Home() {
  const data = await getData()
  return (
    <div className='flex-col justify-start items-start inline-flex w-full'>
      <Navbar></Navbar>
      <Jumbotron />
      {data.map((project: any) => (
        <Project 
        title={project.title} 
        description={project.description} 
        skills={project.skills} 
        image_url={project.image_url} 
        alignRight={project.id%2==0?true:false}
      />
      ))}
      <div className="bottom-0 h-[30px] text-center text-sm w-full bg-slate-300">Made with Next.js and Tailwind CSS by Danny Graugnard ©2023</div>
    </div>
  )
}
