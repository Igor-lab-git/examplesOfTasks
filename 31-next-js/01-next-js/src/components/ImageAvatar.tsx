import React from 'react'
import Image from "next/image";
import avatar from "../../public/images/avatar-photo.jpg"

const ImageAvatar = () => {
    return (
        <div>
            <Image
                src={avatar}
                alt="avatar"
                width="400"
                height="700"
                style={{ width: '400px', height: 'auto' }}
                priority />
        </div>
    )
};

export default ImageAvatar;
