import {Link} from "react-router-dom";


export default function Post({ workout }){
    const tagArr = [];
    const splitTagArr = workout.tags.split("*");
    if (splitTagArr[0] != ""){
        splitTagArr.forEach((tag) =>{
            tagArr.push(tag);
        })
    }
    return(

            <div className="col-md-6 col-lg-3 col-sm-12 my-1">
                <div>
                    <div>
                        <Link to={`/blog/${workout._id}`}>
                            <img src={workout.image} className="img-fluid blog-image" alt=""/>
                        </Link>
                    </div>
                    {tagArr && tagArr.map(tag => (
                        <label className="blog-tag">{tag}</label>
                    ))}
                    <Link to={`/blog/${workout._id}`}>
                        <h4 className="text-black">{workout.title}</h4>
                    </Link>
                </div>
            </div>

    );
}