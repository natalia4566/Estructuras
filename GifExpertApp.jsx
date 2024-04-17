import {useState} from "react"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['first category' ])
  const [category, setcategory] = useState('')

  const onAddCategory = () =>{
    setCategories ( list => [...list, category])
    setCategory ('')
  }

  const onSetCategory = (evt) =>{
    setCategory ( evt.terget-value)
  }
  return (
    <>
     <h1 >GifExpert</h1>
        <input type="text" value={category}
          onchange={(event) => onSetCategory(event) } />
        <button onClick={() => onAddCategory()}> Add Category </button>
        <ol>
          {
            Categories.map(
              (category, key) =>
              {
                return <li key= {key}> { category}  </li>
              }
            )
          }
        </ol>
    </>
  )
}


  

 


