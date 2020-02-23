import React from "react";
import { Card } from "react-bootstrap";
import { usePalette } from "react-palette";

// https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
const HEX_TRANSPARENCY_PERCENTAGE = "66"; // => 40%

const PhotoInfo = props => {
    const { data, loading, error } = usePalette(props.url);

    return (
        <Card className="border-0">
            <Card.Img variant="top" src={props.url} alt={props.name} />
            <Card.ImgOverlay className="p-0 text-white font-weight-bold d-flex flex-column justify-content-end">
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
                    <Card.Title>Year: {props.year}</Card.Title>
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
    year: ""
};

export default PhotoInfo;
