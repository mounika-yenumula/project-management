export default function Tasks(){
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">New Task</h2>
            <input type="text" className="w-64 rounded-sm px-2 py-1 bg-stone-600" />
            <p className="text-stone-800 mb-4">
                No tasks yet
            </p>
            <ul></ul>
        </section>
    );
}