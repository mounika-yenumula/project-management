import image from '../assets/no-projects.png';
export default function NoProject({onSelect}){
    return(
        <div className="mt-24 text-center w-2/3"> 
        <img className="mx-auto h-16 w-16 object-contain" src={image} />
        <h2 className="text-xl text-stone-600 font-bold my-4">No project selected</h2>
        <p className="text-stone-700 mb-6">Select a project or get started with a new one </p>
        <p className="mt-8"> 
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={onSelect} > Create New Project</button>
        </p>
        </div>


    );
}