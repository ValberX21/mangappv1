import React,{Component} from "react";
import StarRating from "./starranking";

export class Newmanga extends Component{

    sendData(){
        alert(this.state.mangaName)
    }

    constructor(props) {
        super(props);
        this.state={
            mangaName:"",
            mangaAuthor:"",
            mangaType:""
        }
    }

    changeMangaName = (e) =>{
        this.setState({mangaName:e.target.value});
    }

    changeMangaAuthor = (e) =>{
        this.setState({mangaAuthor:e.target.value});
    }

    changeMangaType = (e) =>{
        this.setState({mangaType:e.target.value});
    }
    
    render(){
        const {
            mangaName,
            mangaAuthor,
            mangaType  
        }=this.state;

        return(  
            <div className="parent">
                <div className="child">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="mangaName" value={mangaName} onChange={this.changeMangaName} placeholder="name"></input>
                        <label for="mangaName">Manga name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="mangaAuthor" value={mangaAuthor} onChange={this.changeMangaAuthor} placeholder="author"></input>
                        <label for="mangaAuthor">Author</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="mangaType" value={mangaType} onChange={this.changeMangaType} placeholder="type"></input>
                        <label for="mangaType">Type</label>
                    </div>

                    <label >Rating</label>
                    <StarRating/>
                    
                            <button className="w-10 btn btn-lg btn-success" onClick={()=>this.sendData()}>Register</button>          
                </div>
{/* SECOND BLOCK */}
                <div className="child">
          
                </div>
            </div>           
        )
    }
}
export default Newmanga