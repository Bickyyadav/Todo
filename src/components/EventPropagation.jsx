


export default function EventPropagation() {
const handleGrandParent = ()=>{
    console.log("grandParents");
}

const handleparent = ()=>{
    console.log("parent");
}

const handleChildClick = (event)=>{
    console.log(event);
    // if we write this then only child will render if not used then all will render in teh browser
    event.stopPropagation()
    
    console.log("childcalling");
    

}

  return (
    <section>
        <div className='g-div' onClick={handleGrandParent}>
            <div  className='p-div' onClick={handleparent} >
                <button className='c-div' onClick={handleChildClick}>
                    Child Div
                </button>
            </div>
        </div>
    </section>
  )
}
