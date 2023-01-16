import Button from "./Button";

import { cleanup, getByTestId, render } from "@testing-library/react"
import { ReactDOM } from "react";
import React from "react";
import renderer from 'react-test-renderer'

afterEach(cleanup)

describe('Button Components', () => { 
    it("Should render Properly", () =>{
        render(<Button name = "A B"/>);
    })
    
    it("Should render without crasing",()=>{
        const div = document.createElement('div')
        ReactDOM.render(<Button rightIcon="button"></Button>, div)
    })

    it("should render button correctly with righticon copy",()=>{
        const {getByTestId}= render( <Button rightIcon="copy"></Button>)
        expect( getByTestId('button') ).toHaveTextContent('copy')
    })

    it("should render without crasing",()=>{
        const div = document.createElement('div')
        ReactDOM.render( <Button leftIcon="button"></Button>,div)
      })

    it("should render button correctly with leftIcon copy",()=>{
        const {getByTestId}= render( <Button leftIcon="copy"></Button>)
        expect( getByTestId('button') ).toHaveTextContent('copy')
    })

    it("should render without crasingn", ()=>{
        const div = document.createElement('div')
        ReactDOM.render( <Button children="button"></Button>,div)
    })
    
    it("should render button correctly with children copy",()=>{
        const {getByTestId}= render( <Button children="copy"></Button>)
        expect( getByTestId('button') ).toHaveTextContent('copy')
    })

    it("should render button correctly with leftIcon add",()=>{
        const {getByTestId}= render( <Button label="add"></Button>)
        expect( getByTestId('button') ).toHaveTextContent('add')
    })

    it("matches snapshot", ()=>{
        const tree = renderer.create(<Button label="REMOVE"></Button>).toJSON()
        expect(tree).toMatchSnapshot()
    })
 });
