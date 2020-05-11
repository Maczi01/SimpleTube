import imageFromYT from '../lib/Helper'

describe('should return image link for given video link', () => {
    it('return link with first frame', ()=>{
        expect(imageFromYT('https://www.youtube.com/embed/OFc28hTZQL0')).toBe("http://img.youtube.com/vi/OFc28hTZQL0/0.jpg")
    } )
});