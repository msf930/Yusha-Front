import '../index.css';
import '../style.css';
import '../media.css';
import Footer from "../components/Footer";
import NewsletterForm from "../components/NewsletterForm";

import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";


export default function PostPage() {
    const {id} = useParams();

    const [workoutInfo, setWorkoutInfo] = useState(null)

    useEffect(() => {
        fetch(`/api/workouts/${id}`)
            .then (response => {
            response.json().then(workoutInfo => {
                setWorkoutInfo(workoutInfo);
            });
        });

    }, []);
    if(!workoutInfo) return"";

    const stringArr = workoutInfo.body.split("*");
    const tagArr = workoutInfo.tags.split("*");

    return(
        <div>
            <section className="blog-page-container" >
                <div className="container">
                    <div className="row">
                        <a href="/blog" className="blog-page-btn">&lt; Blogs</a>
                        <img src={workoutInfo.image} alt={workoutInfo.title}/>
                        <div className="tag-group">
                            {tagArr && tagArr.map(tag => (
                                <label className="blog-page-tag">{tag}</label>
                            ))}
                        </div>
                        <h1 className="blog-page-title">{workoutInfo.title}</h1>
                        <div>
                            <div className="blog-page-info">
                                <h4>By: {workoutInfo.author}  |  {workoutInfo.date.slice(5,10) +"-" +  workoutInfo.date.slice(0,4)}</h4>
                            </div>
                            {stringArr.map(paragraph => (
                                <p>{paragraph}</p>
                            ))}
                            <a href={workoutInfo.link}>{workoutInfo.link}</a>
                        </div>

                    </div>
                </div>
            </section>

            <NewsletterForm />
            <Footer />

        </div>
    );
}