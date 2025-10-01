import React from 'react';

const mockImages = [
    'asset/IMG_1.jpg',
    'https://via.placeholder.com/150?text=Image+2',
    'https://via.placeholder.com/150?text=Image+3',
];

const Gallery = ({ images = mockImages }) => {
    if (!images.length) {
        return <div>No images to display.</div>;
    }

    return (
        <div style={styles.gallery} className="gallery-responsive">
            {images.map((src, idx) => (
                <img
                    key={idx}
                    src={src}
                    alt={`Gallery item ${idx + 1}`}
                    style={styles.image}
                />
            ))}
            <style>{`
                .gallery-responsive {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    justify-content: center;
                }
                .gallery-responsive img {
                    width: 150px;
                    height: 150px;
                }
                @media (max-width: 600px) {
                    .gallery-responsive img {
                        width: 100px;
                        height: 100px;
                    }
                }
                @media (min-width: 601px) and (max-width: 900px) {
                    .gallery-responsive img {
                        width: 120px;
                        height: 120px;
                    }
                }
            `}</style>
        </div>
    );
};

const styles = {
    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
    },
    image: {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'width 0.2s, height 0.2s',
    },
};

export default Gallery;