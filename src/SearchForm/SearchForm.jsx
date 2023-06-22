import { useState } from "react"

const SearchForm = ({setSubmittedAnimal}) => {

    const [animal, setAnimal] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        // inform the parent about submitted animal
        setSubmittedAnimal(animal)

        // clear the input field
        setAnimal('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Search anumal..."
                value={animal}
                onChange={(event) => setAnimal(event.target.value)}/>
            <br />
            <button type="submit">SEARCH</button>
        </form>
    )
}

export default SearchForm