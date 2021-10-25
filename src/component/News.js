import React from 'react'
import "../App.css"
import Carousel from './Carousel';

const News = ({article}) => {
    return (
        <div className="container" >
           <Carousel/>
            <h1 style={{"textAlign":"center","padding":"25px","fontWeight":"bold"}}>Top Sport News</h1>
          
            <div class="card-deck">
              <div className="row">
                
            
             {article.map((article,index)=>{
const{urlToImage,title,publishedAt,author,url}=article
      
      return(
        <div className="col-sm-4">
        <div class="card" style={{"marginBottom":"25px"}}>
        <img class="card-img-top" src={urlToImage} alt="Card image cap" style={{"width":"100%","height":"200px"}}/>
        <div class="card-body">
          <h4 class="card-title font-bold" style={{"width":"100%","height":"200px","overflow":"hidden"}}>{title}</h4>
          
          <p class="card-text"><small class="text-muted font-bold">{publishedAt}</small></p>
        <button className="btn btn-primary"  ><a href={url} style={{"color":"white"}}>READ MORE</a></button>
        </div>
      </div>
      </div>
      )
    })
    }
    </div>
    </div>
        </div>
    )
}

export default News
