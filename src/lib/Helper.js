const imageFromYT = (link) => {
    const signature = link.split("https://www.youtube.com/embed/").pop();
    const newLink = 'https://www.youtube.com/watch?v=' + signature
    const results = newLink.match('[\\?&]v=([^&#]*)');
    const video = (results === null) ? link : results[1];
    // console.log(video)
    return 'http://img.youtube.com/vi/' + video + '/0.jpg';
};

export default imageFromYT;