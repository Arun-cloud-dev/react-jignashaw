import ChildComponent from './ChildComponent'


function ParentComponent (){
    //Define props to be passed
const name = 'jignashaw';
const age = 25;
const year = 1995;


console.log('Props in ParentComponent:', { name, age, year });


return (
    <div>
        {/* Render children and pass props */}

        <ChildComponent name={name} age={year}/>
    </div>
)

}

export  default ParentComponent