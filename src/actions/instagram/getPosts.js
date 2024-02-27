'use server';
import dotenv from 'dotenv';

dotenv.config();

export const getPosts = async () => {
    const urlBase = process.env.API_GRAPH_URL_BASE;
    const token = process.env.INSTAGRAM_TOKEN;
    const accountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
    const postLimit = process.env.INSTAGRAM_POSTS_LIMIT;
    const url = `${urlBase}/${accountId}/media?fields=id,media_type,media_url,like_count,comments_count,caption,media_product_type,permalink,owner{username,profile_picture_url},timestamp&limit=${postLimit}&access_token=${token}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const filteredData = data.data.filter(post => post.media_url);
            return filteredData;
        } else {
            console.error('Error al obtener los posts:', response.statusText);
            return [];
        }
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        return [];
    }
}

