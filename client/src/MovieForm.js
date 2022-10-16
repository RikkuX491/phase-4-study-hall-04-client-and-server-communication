function MovieForm({ updateFormData, handleSubmit }){

    return (
        <form onSubmit={handleSubmit}>
            <h1>Movie Form</h1>
            <label htmlFor="title">Title: </label>
            <input onChange={updateFormData} type="text" name="title"/><br/>
            <label htmlFor="quote">Quote: </label>
            <input onChange={updateFormData} type="text" name="quote"/><br/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default MovieForm;