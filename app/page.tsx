import Jumbotron from './jumbotron'
import Project from './project'
import { promises as fs } from 'fs';

// Get project data

async function getData() {
  const file = await fs.readFile(process.cwd() + '/app/project_data.json', 'utf8');
  const data = JSON.parse(file);
  if (!data) {
    throw new Error('Failed to fetch data')
  }
  return data
}

// Home page

export default async function Home() {
  const data = await getData()

  function isEven(number: number) {
    if (number % 2 == 0) {
      return true
    } else {
      return false
    }
  }

  return (
    <main className="flex-col justify-start items-start w-full bg-slate-50">
      <Jumbotron />
      <div className="px-[200px] py-[50px] flex flex-col items-center w-full">
        {data.map((project: any) => (
          <Project
          key={project.id} 
          title={project.title} 
          description={project.description} 
          skills={project.skills} 
          image_url={project.image_url}
          case_study_url={project.case_study_url}
          prototype_url={project.prototype_url} 
          alignRight={isEven(project.id)}
        />
        ))}
      </div>
      <p className="bottom-0 h-[30px] text-center text-sm w-full bg-slate-300">Made with Next.js and Tailwind CSS by Danny Graugnard ©2023</p>
    </main>
  )
}
