import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/Notesdisplay.css';


const Notesdisplay = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [notesindex, setnotesindex] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/Notes/${id}`)
            .then((response) => response.json())
            .then((data) => setnotesindex(data));
    }, [id]);


    if (!notesindex) {
        return <div>Loading...</div>;
    }

    const handleGoBack = () => {
        navigate('/Notes');
    };

    return (
        <>
            <div className='row' style={{ paddingBottom: '100px' }}>
                <div className='col-12'>
                    <h5 onClick={handleGoBack} className='notestitle text-center mt-5'>{notesindex.title}</h5>
                    <h6 className='noteshead  mt-3'>Formal wear only serves as the base - it’s the accessories you adorn that perfect the quintessential formal look. However, styling<br /> plays a massive role in the same. It should ideally have a little bit of everything to make your formal look a truly distinctive one.<br /> Here are a few tips on how you can style your formal wear: </h6>
                    <h6 className='tips mt-4'>Accessories For Men - Tips: </h6>
                    <ul className='ullistfornotes mt-4' >
                        <li><b>Pocket Squares</b> - These are a great, suave addition to your formal look. It’s not always necessary that your pocket square<br /> should match your formal wear - it just shouldn't clash with it drastically.</li>
                        <li><b>Cufflinks</b> - Cufflinks add a touch of class to your suit. Adding cufflinks to your shirt will keep it firm and in place as well.</li>
                        <li><b>Watches</b> - Your watch should be just as dressy as the suit your wear. Watches made from stainless steel are a great<br /> complement to your meeting look. </li>
                        <li><b>Tie Clip</b> - The best way to complete your formal look (and also keep your tie in place) is to go for a simple tie clip. It also<br /> works to keep your tie neat and wrinkle-free throughout the day!</li>
                        <li><b>Belt</b> - Leather belts are always a popular choice. An essential tip is to always match your belt with your formal shoes.</li>
                        <li><b>Footwear</b>- Footwear is arguably one of the most important pieces of clothing in an outfit for men. Always opt for leather or<br /> suede as it rounds off your formal look with a refined touch. </li>
                    </ul>
                    <h6 className='tips mt-4'> Accessories For Women - Tips:</h6>
                    <ul className='ullistfornotes mt-4' >
                        <li><b>Scarves</b> - TIf you’re feeling chilly or if the weather allows for it, it’s always good to wear a professional-looking scarf with a suit.<br /> Just keep in mind that the scarves you choose should be accessory ones, and not winter scarves. </li>
                        <li><b>Belt</b> - A thin belt accentuates any woman’s figure, so it’s essential for you to choose a slim one that is in a contrast colour<br />  from your outfit. The belt and shoe rule that is a must for men doesn’t usually apply for women, though. </li>
                        <li><b>Jewellery</b> - If you’re heading for any formal event, avoid wearing large costume jewellery. Earrings should be conservative <br /> and small. Necklaces are acceptable, as long as they are delicate or are pendants. An elegant watch is a must</li>
                        <li><b>Purse/Handbag</b> -  Always opt for a classy leather bag that can fit all your essentials like your laptop. This adds a touch of<br />  professionalism to your look.</li>
                        <li><b>Hosiery</b> -If you’re wearing hosiery, it should always suit your skin tone, and should not have any distracting patterns or<br /> designs.</li>
                    </ul>
                    <h6 className='tips mt-4'>Conclusion</h6>
                    <h6 className='noteshead mt-3'>For both men and women, getting your accessories right is an integral part of nailing the formal look. However, unless the base is <br /> right, the impact you create won’t be an effective one - start by finding customised workwear that complements your frame to a tee <br />at Acecraft! </h6>
                </div>
                <Commentbox />
            </div>
        </>

    );

}



const Commentbox = () => {

    const [count, setcount] = useState(0);

    const handlesubmit = (e) => {
        e.preventDefault();
        setcount((count) => count + 1);
    }

    return (
        <>
            <h2 className='comments ms-5 ps-5 mt-5 pt-5'>{count} &nbsp; Comment</h2>
            <div className="comment-box ms-5 ps-5 mt-5 pt-5">
                <form onSubmit={handlesubmit}>
                    <h2 className='leave'>Leave a Comment</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" placeholder="Your Comment" required></textarea>
                    </div>
                    <button className="post-button" type="submit" >Post Comment</button>
                </form>
            </div>
        </>
    );
};

export default Notesdisplay;
