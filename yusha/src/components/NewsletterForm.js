import Swal from 'sweetalert2'
export default function NewsletterForm(){
    async function handleSubmit(e) {
        let form = document.getElementById('sheetdb-form');
        e.preventDefault();
        await fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        }).then(
            async response => response.json()
        ).then((html) => {
            // you can put any JS code here
            let timerInterval
            Swal.fire({
                icon: 'success',
                title: 'Thank you for joining the newsletter!',
                timer: 2000,
                timerProgressBar: false,
                showConfirmButton: false,
                didOpen: () => {
                    //Swal.showLoading()
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    //console.log('I was closed by the timer')
                }
            })
        });
    }

    return(
        <div>
            <section className="connect-us">
             <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 pt-lg-5 pt-4">
                        <div className="people-left">
                            <h2>People are at the heart of Yusha!</h2>
                            <p>Join our newsletter to keep up to date with all future releases, product updates, specials, and news
                                about Yusha!</p>
                            <div className="form">
                                <form
                                    action="https://sheetdb.io/api/v1/6en1ynd9h3yx2"
                                    method="POST"
                                    id="sheetdb-form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="form-left">
                                        <label htmlFor="">Enter your email.</label>
                                        <input name="data[email]" id="emailAdd" className="form-control" placeholder="johndoe@gmail.com"/>
                                        <p className="form-success">Thank you for subscribing!</p>
                                    </div>
                                    <div className="form-right">
                                        <button
                                            type="submit"
                                            className="submit cs-btn"
                                        >
                                            Subscribe
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="people-right d-lg-block d-none">
                            <img src="images/people-are-at.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
             </div>
            </section>
        </div>
    );
}