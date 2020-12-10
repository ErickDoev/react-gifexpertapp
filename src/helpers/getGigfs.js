export const getGift = async(category) => {
    //const url = 'api.giphy.com/v1/gifs/search?q=Naruto&limit=10&api_key=FQ8JsFPPo0PskcEDjDqDDf31qVBdtNiB';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=FQ8JsFPPo0PskcEDjDqDDf31qVBdtNiB`;
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map(img => { 
        return{
            id: img.id,
            title: img.title,
            //url: img.images?.downsized_medium.url
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
}