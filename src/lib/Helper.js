const imageFromYT = (link) => {
    const signature = link.split("https://www.youtube.com/embed/").pop();
    const newLink = 'https://www.youtube.com/watch?v=' + signature
    const results = newLink.match('[\\?&]v=([^&#]*)');
    const video = (results === null) ? link : results[1];
    return 'http://img.youtube.com/vi/' + video + '/0.jpg';
};

const changeLinkForItem = (link) => link.replace(/watch/g, "embed")

export {imageFromYT, changeLinkForItem} ;