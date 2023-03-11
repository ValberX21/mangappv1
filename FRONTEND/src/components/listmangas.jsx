import React,{Component} from 'react';
import { variable } from '../service/API';

export class ListMangas extends Component{
    constructor(props){
        super(props)

        this.state={
            mangas:[],
            Id_Manga:0,
            name_manga:"",
            author_manga:""
        }
    }

    refreshList(){
        fetch(variable.API_MANGAS +'mangas', {
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({mangas:data})
        })
    }

   

    componentDidMount(){
        this.refreshList();
    }

    render(){
        const{
            mangas
         }=this.state;

        return(
            <div>
            <h5>Manga list</h5>
            <table className="table table-striped">
                   <thead>
                        <th>
                            Id
                        </th>

                        <th>
                          Manga
                        </th>

                   </thead>
                   <tbody>
                       {mangas.map(emp=>
                        <tr key={emp.ID}>
                            <td>{emp.ID}</td>
                            <td>{emp.NAME}</td>                           
                        </tr>)}
                   </tbody>
               </table>
            </div>
        )
    }
}