import {Link} from "react-router-dom";


export default function SanityPost({ post }){
    return(

            <div className="col-md-6 col-lg-3 col-sm-12 my-1 py-3 postContainer">
                <div>
                    <div className="postImageContainer">
                        <Link to={`/blog/${post?.slug.current}`}>
                            <img src={post?.mainImage?.asset?.url} className="img-fluid blog-image" alt=""/>
                        </Link>
                    </div>
                        {post.tags?.map(tag => (
                            <label className="blog-tag">{tag}</label>
                        ))}
                    <Link to={`/blog/${post?.slug.current}`}>
                        <h5 className="text-black">{post.title}</h5>
                    </Link>
                </div>
            </div>

    );
}