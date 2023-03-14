import React,{Component} from "react";
import { ListMangas } from "./listmangas";
import { variable } from "../service/API";
export class Newmanga extends Component{
    
    constructor(props) {
        super(props);
        this.state={
            mangaName:"",
            mangaAuthor:"",
            mangaType:""
        }
    }
    sendData(){   
        if(this.state.fmangaName == "" || this.state.fmangaName == undefined){
            alert("Type manga's name please");
        }else if(this.state.fmangaAuthor == ""  || this.state.fmangaAuthor == undefined){
            alert("Type author's name please");
        }else if(this.state.fmangaType == "" || this.state.fmangaType == undefined){
            alert("Fill in the field type please");
        }else{
            fetch(variable.API_MANGAS+'mangas',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    NAME:this.state.fmangaName,
                    AUTHOR:this.state.fmangaAuthor,
                    STARS:5,
                    CATEGORY:this.state.fmangaType
                })
            })
            .then(res=>res.json())
            .then((result)=>{
                alert(result); 
                window.location.reload(true)             
            },(error)=>{
                alert(`Ops !, something went wrong  ${error}`);            
            })
        }
    }
     changeMangaName = (e) =>{
         this.setState({fmangaName:e.target.value});
     }
    changeMangaAuthor = (e) =>{
        this.setState({fmangaAuthor:e.target.value});
    }
    changeMangaType = (e) =>{
        this.setState({fmangaType:e.target.value});
    }   
    render(){
        const {
            fmangaName,
            fmangaAuthor,
            fmangaType  
        }=this.state;
        const data = 0;
        return(  
            <div className="parent">
                <div className="child">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="mangaName" value={fmangaName} onChange={this.changeMangaName} placeholder="name"></input>
                        <label htmlFor="mangaName">Manga name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="mangaAuthor" value={fmangaAuthor} onChange={this.changeMangaAuthor} placeholder="author"></input>
                        <label htmlFor="mangaAuthor">Author</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="mangaType" value={fmangaType} onChange={this.changeMangaType} placeholder="type"></input>
                        <label htmlFor="mangaType">Type</label>
                    </div>

                    <button className="w-10 btn btn-lg btn-success" onClick={()=>this.sendData()}>Register</button>    

                </div>
                {/* SECOND BLOCK */}
                <div className="child">
                  <ListMangas/>
                </div>
            </div>           
        )
    }
}
export default Newmanga