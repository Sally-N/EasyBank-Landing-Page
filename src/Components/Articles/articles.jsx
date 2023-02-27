import "./articles.css";
import imageOne from "../images/image-currency.jpg";
import imageTwo from "../images/image-restaurant.jpg";
import imageThree from "../images/image-plane.jpg";
import imageFour from "../images/image-confetti.jpg"

// eslint-disable-next-line no-unused-vars
const articlesContents = [
    {
        imgPath: imageOne,
        writer: "By Claire Robinson",
        heading: "Receive money in any currency with no fees",
        content: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
        alt: "blogImage"
    },
    {
        imgPath: imageTwo,
        writer: "By Wilson Hutton",
        heading: "Treat yourself without worrying about money",
        content: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
        alt: "blogImage"

    },
    {
        imgPath: imageThree,
        writer: "By Wilson Hutton",
        heading: "Take your Easybank card wherever you go",
        content: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
        alt: "blogImage"

    }, {
        imgPath: imageFour,
        writer: "By Claire Robinson",
        heading: "Our invite-only Beta accounts are now live!",
        content: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... ",
        alt: "blogImage"

    }
]


export const Articles = () => {
    return (
        <section className="container artclesSection">
            <h2>Latest Articles</h2>
            <div className="articles row">
                {articlesContents.map((article) =>
                (
                    <div key={article.heading} className="col articleSingle">
                        <div className="image">
                            <img src={article.imgPath} alt="" />
                        </div>
                        <div className="text">
                            <h6>{article.writer}</h6>
                            <h3> {article.heading}</h3>
                            <p> {article.content}</p>
                        </div>
                    </ div>
                ))
                }
            </div>
        </section>
    );
}