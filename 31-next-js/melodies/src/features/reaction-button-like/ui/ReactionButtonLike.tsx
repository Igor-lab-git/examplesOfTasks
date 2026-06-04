"use client";
import React, { useState} from 'react'
import {ButtonLikeOrDislike} from "@/shared/ui/ButtonLikeOrDislike";
import { useToggleLikeToTrackByIdMutation} from "@/store/redusers/melodiesStoreApi";

interface IReactionButtonLike {
    trackId: string;
    initialLike?: boolean;
};

const ReactionButtonLike = ({trackId, initialLike = false}: IReactionButtonLike) => {
    const [toggleLike, {isLoading, isSuccess}] = useToggleLikeToTrackByIdMutation();

    const [isLiked, setIsLiked] = useState<boolean>(initialLike);


    const handleToggleLike = async () => {
        const wasLiked = isLiked;
        setIsLiked(prev => !prev);
        let res = null;
        try {
            res = await toggleLike({trackId}).unwrap();
        } catch (e) {
            console.log(e);
            console.log(res);
            setIsLiked(wasLiked);
        }
    };

    console.log(isLoading, isSuccess, "ReactionButtonLike")
    return (
        <>
            <button
                type={"button"}
                title={"like or dislike"}
                aria-label="Лайкнуть трек"
                onClick={handleToggleLike}>
                <ButtonLikeOrDislike isSuccess={isLiked}/>
            </button>
        </>

    )
};

export default ReactionButtonLike;

