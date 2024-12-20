import React from 'react';
import Image from 'next/image'; // Import Image from next/image

const Watches = () => {
    const watchData = [
        { id: 1, name: "Rolex", price: 12000, description: "Luxury Watch", Image: "/rolex.jpg" },
        { id: 2, name: "IWC", price: 13000, description: "Sporty Watch", Image: "/watches3.jpg" },
        { id: 3, name: "Citizen", price: 15000, description: "Luxury Watch", Image: "/watches2.jpg" },
        { id: 4, name: "Tempo", price: 11000, description: "Luxury Watch", Image: "/watch.jpg" },
        { id: 5, name: "Omax", price: 7000, description: "Classic Watch", Image: "/watches4.jpg" },
        { id: 6, name: "Rolex", price: 17000, description: "Luxury Watch", Image: "/watches6.jpg" },
    ];

    return (
        <div>
            <div className="watches">
                {watchData.map((watch) => (
                    <div key={watch.id} className="watch-card">
                        {/* Replace <img> with <Image /> */}
                        <Image 
                            src={watch.Image} 
                            alt={watch.name} 
                            className="watch-image"
                            width={500}   // Specify the width of the image
                            height={500}  // Specify the height of the image
                        />
                        <div className="watch-info">
                            <h3 className="watch-name">{watch.name}</h3>
                            <p className="watch-description">{watch.description}</p>
                            <div className="watch-price">${watch.price.toLocaleString()}</div>
                            <button className="add-to-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Watches;
