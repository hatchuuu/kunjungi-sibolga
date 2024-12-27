"use client";

const MapSibolga = ({link}) => {
    return (
        <div style={{ width: "100%", height: "60vh", position: "relative" }}>
            <iframe
                src={link}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default MapSibolga;
