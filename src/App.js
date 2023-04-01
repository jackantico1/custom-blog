import githubLogo from './images/github-mark.png'
import linkedinLogo from './images/linkedinLogo.png'
import BlogCard from './components/BlogCard'

function App() {
  return (
    <div className="App">

      <div className='flex flex-row justify-end'>
        <img
          onClick={() => window.open("https://github.com/jackantico1","_self")}
          className='w w-12 h-12 m-3 hover:cursor-pointer' 
          src={githubLogo} alt="Logo" />
        <img
          onClick={() => window.open("https://www.linkedin.com/in/jackantico/","_self")}
          className='w w-12 h-12 m-3 mr-8' 
          src={linkedinLogo} alt="Logo" />
      </div>

      <div className='x mt-20 ml-20'>
        <h1 className="text-7xl font-bold">Hi, I'm Jack</h1>
        <h1 className="text-3xl">Welcome to my blog.</h1>
      </div>

      <div className='flex flex-row flex-wrap'>
       <BlogCard/>
       <BlogCard/>
       <BlogCard/>
       <BlogCard/>
      </div>

    </div>
  );
}

export default App;
