import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ImageWithFallback = (props) => {
    const [url, setUrl] = useState(props.imageUrl);

    const fallbackUrl = props.fallbackUrl || "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"

    const handleError = (e) => {
        setUrl(fallbackUrl);
    };

    return (
        <img src={url} className={props.classList} onError={handleError} alt={props.alt} />
    );
};

ImageWithFallback.propTypes = {
    imageUrl: PropTypes.string,
    fallbackUrl: PropTypes.string,
    alt: PropTypes.string,
    classList: PropTypes.string
};

export default ImageWithFallback;
