import React from "react";
import { Card } from "react-bootstrap";
import { usePalette } from "react-palette";

// https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
const HEX_TRANSPARENCY_PERCENTAGE = "80"; // => 50%

const PhotoInfo = props => {
    const { data, loading, error } = usePalette(props.url);

    return (
        <Card className={"border-0 " + props.containerClassName}>
            <Card.Img
                variant="top"
                src={props.url}
                alt={props.name}
                style={props.imgStyle}
                className={props.imgClassName}
            />
            <Card.ImgOverlay
                className={
                    "p-0 text-white font-weight-bold d-flex flex-column justify-content-end " +
                    props.imgOverlayClassName
                }
                style={props.imgOverlayStyle}
            >
                <div
                    className="p-3"
                    style={
                        !loading && !error
                            ? {
                                  backgroundColor:
                                      data.vibrant + HEX_TRANSPARENCY_PERCENTAGE
                              }
                            : {}
                    }
                >
                    <p>Year: {props.year}</p>
                    <Card.Title className="font-weight-bold">
                        {props.name}
                    </Card.Title>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
};

PhotoInfo.defaultProps = {
    url: "",
    name: "",
    year: "",
    imgClassName: "",
    imgStyle: {},
    imgOverlayClassName: "",
    imgOverlayStyle: {},
    containerClassName: ""
};

export default PhotoInfo;
