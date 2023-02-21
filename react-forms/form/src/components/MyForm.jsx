import "./MyForm.css"

export default function MyForm () {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" />
                </div>
                <label>
                    <span>E-mail: </span>
                    <input type="email" name="name" id="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}