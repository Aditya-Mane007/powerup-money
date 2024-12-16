// export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://powerup.onerooftechnologiesllp.com";
export const BASE_URL = "https://powerup.onerooftechnologiesllp.com"

export async function fetchImageUrlById(imageId) {
    try {
        const response = await fetch(`${BASE_URL}/wp-json/wp/v2/media/${imageId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const imageData = await response.json();
        return imageData.media_details.sizes.full.source_url;
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
}


export const handleCategoryData = async (categoryId) => {

    try {
        const getCategoryData = await fetch(`${BASE_URL}/wp-json/wp/v2/posts?categories=${categoryId}&page=1&per_page=9`)
        const categoryData = await getCategoryData.json()

        const imagesId = [categoryData[0].asf.thumbnail_media.thumbnail_media, categoryData[1].asf.thumbnail_media.thumbnail_media, categoryData[2].asf.thumbnail_media.thumbnail_media,]

        const images = []

        imagesId.forEach(async (id) => {
            const data = await fetchImageUrlById(id)
            images.push(data)
        })


        return [categoryData, images]
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
}