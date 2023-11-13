export default function Meme() {
    return (
        <div className="forum">
            <form className="form">
                <div className="form-text">
                    <input type="text" placeholder="upper text" className="input-text"/><br/>
                    <input type="text" placeholder="lower text" className="input-text"/><br/>
                </div>
                <input type="submit" className="button" value="Get a new meme image"/>
            </form>
        </div>
    )
}