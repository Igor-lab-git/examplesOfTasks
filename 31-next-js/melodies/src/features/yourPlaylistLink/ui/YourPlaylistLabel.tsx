import React from 'react';

interface IYourPlaylistLabel {
    title: string
};

const YourPlaylistLabel = ({title}: IYourPlaylistLabel) => {
    return (
        <div>
            {title ? title : "New playlist"}
        </div>
    )
};

export default YourPlaylistLabel;
