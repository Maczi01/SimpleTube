const imageFromYT = (link) => {
    const results = link.match('[\\?&]v=([^&#]*)');
    const video = (results === null) ? link : results[1];
    console.log(video)
    return 'http://img.youtube.com/vi/' + video + '/0.jpg';
};

export default imageFromYT;