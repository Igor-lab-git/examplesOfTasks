"use client";
import React, {useEffect, useState} from 'react'
import {ButtonLikeOrDislike} from "@/shared/ui/ButtonLikeOrDislike";
import { useToggleLikeToTrackByIdMutation} from "@/store/redusers/melodiesStoreApi";

interface IReactionButtonLike {
    trackId: string;
    initialLike: boolean;
};

const ReactionButtonLike = ({trackId, initialLike = false}: IReactionButtonLike) => {
    const [toggleLike, {isLoading, isSuccess}] = useToggleLikeToTrackByIdMutation();

    const [isLiked, setIsLiked] = useState<boolean>(false);

    useEffect(() => {
        const getIsLiked = localStorage.getItem("like");
        if(getIsLiked) {
            setIsLiked(getIsLiked === "true")
        } else {
            setIsLiked(initialLike)
        }
    }, [trackId, isLiked])

    const handleToggleLike = async () => {
        const wasLiked = isLiked;
        setIsLiked(prev => !prev);
        let res = null;
        try {
            res = await toggleLike({trackId}).unwrap();
            localStorage.setItem("like", JSON.stringify(wasLiked));
            // console.log('✅ Лайк успешно отправлен!', res);
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
                onClick={handleToggleLike}>
                <ButtonLikeOrDislike isSuccess={isLiked}/>
            </button>
            <span>{isLoading ? "Like is Sending" : "Like is Send"}</span>
        </>

    )
};

export default ReactionButtonLike;

