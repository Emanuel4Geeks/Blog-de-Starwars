import React, { useState, useEffect, useContext } from "react";

import "../../styles/notfound.css";
import { Context } from "../store/appContext";

import image404WebpV from "../../img/404v.webp";
import image404WebpH from "../../img/404h.webp";
import image404PngV from "../../img/404v.png";
import image404PngH from "../../img/404h.png";

export const NotFound = (props) => {
    const { actions } = useContext(Context)

    useEffect(() => {
        actions.showPageBgImage(false)
    }, [])

    return (
        <div className="notFound">
            <picture className="mx-auto">
                <source srcSet={image404WebpH} type="image/webp" media="(min-width: 768px)" />
                <source srcSet={image404WebpV} type="image/webp" media="(max-width: 767px)" />
                <source srcSet={image404PngH} type="image/png" media="(min-width: 768px)" />
                <source srcSet={image404PngV} type="image/png" media="(max-width: 767px)" />
                <img src={image404PngV} className="mx-auto w-75" alt="404 Page Not Found" />
            </picture>
        </div>
    );
};


