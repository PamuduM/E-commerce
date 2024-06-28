import React from 'react';

interface FacebookPost {
    id: string;
    source: string;
    message: string;
    // Add more properties as needed based on the structure of your Facebook posts
}

interface Props {
    facebookPosts: FacebookPost[];
}

export function CustomerFeedback({ facebookPosts }: Props) {
    return (
        <div className="my-8 flex overflow-x-auto">
            {facebookPosts.map(post => (
                <div key={post.id} className="fb-post mx-4">
                    <img src={post.source} alt="Facebook post" className="w-full h-auto object-cover" />
                    <p className="mt-2">{post.message}</p>
                </div>
            ))}
        </div>
    );
}
