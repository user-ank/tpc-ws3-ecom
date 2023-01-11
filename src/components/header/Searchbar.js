import classes from './Searchbar.module.css'

function Searchbar(){

    return(

        <form className={classes.search} action="result.html">
            <img className={classes.searchIcon} src={require('../img/search.png')} alt=""/>
            <input name="query" className={classes.input} type="text" placeholder="Search..."/>
        </form>
    )
}

export default Searchbar;
