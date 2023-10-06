import '../index.css';
import '../style.css';
import '../media.css';
import Footer from "../components/Footer";
import NewsletterForm from "../components/NewsletterForm";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import client from "../client";
import { format } from "date-fns"
import BlockContent from "@sanity/block-content-to-react"


export default function PostPage() {

    const [singlePost, setSinglePost] = useState([])
    const { slug } = useParams()
    useEffect(() => {
        client.fetch(
            `*[slug.current == "${slug}"]{
        title,
        slug,
        tags,
        author,
        body,
        summary,
        categories,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
        )
            .then((data) => setSinglePost(data[0]))
            .catch(console.error)

    }, [])


    // const {id} = useParams();
    //
    // const [workoutInfo, setWorkoutInfo] = useState(null)
    //
    // useEffect(() => {
    //     fetch(`/api/workouts/${id}`)
    //         .then (response => {
    //         response.json().then(workoutInfo => {
    //             setWorkoutInfo(workoutInfo);
    //         });
    //     });
    //
    // }, []);
    // if(!workoutInfo) return"";
    if(!singlePost) return"";

    //const stringArr = workoutInfo.body.split("*");

    // const postTagArr = [];
    // const postSplitTagArr = workoutInfo.tags.split("*");
    // if (postSplitTagArr[0] != ""){
    //     postSplitTagArr.forEach((postTag) => {
    //         postTagArr.push(postTag);
    //     })
    // }

    return(
        <div>
            <section className="blog-page-container" >
                <div className="container">
                    <div className="row">
                        <a href="/blog" className="blog-page-btn">&lt; Blogs</a>
                        <img src={singlePost?.mainImage?.asset?.url} alt={singlePost.title}/>
                        <div className="tag-group">
                            {singlePost?.tags?.map(tag => (
                                <label className="blog-page-tag">{tag}</label>
                            ))}
                        </div>
                        <h1 className="blog-page-title">{singlePost?.title}</h1>
                        <div>
                            {singlePost?.publishedAt && (
                                <div className="blog-page-info">
                                    <h5>
                                    By {singlePost.author} on{" "} {format(new Date(singlePost.publishedAt), "dd MMMM yyyy")}
                                    </h5>
                                </div>
                            )}
                            <BlockContent
                                blocks={singlePost.body}
                                projectId="pnj4edkv"
                                dataset="production"
                            />
                        </div>

                    </div>
                </div>
            </section>
            <div id="signUp">
                <NewsletterForm />
            </div>
            <Footer />

        </div>
    );
}