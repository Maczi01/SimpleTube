import React from 'react'
import ReactDOM from 'react-dom'
import Header from "../components/Header";

var root = null;
describe('render header properly', () => {

        beforeEach(() => {
            root = document.createElement('div');
            ReactDOM.render(<Header/>, root);
        });

        it('container should be nav', () => {
                expect(root.childNodes[0].nodeName).toEqual("NAV")
            }
        );

        it('title format equal to h1', () => {
                expect(root.childNodes[0].firstChild.nodeName).toEqual("H1")
            }
        );

        it('text title should be SimpleTube', () => {
            expect(root.childNodes[0].firstChild.textContent).toEqual("SimpleTube")
        });
    }
);