import { render,cleanup, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";
import ReactDOM from 'react'

afterEach(cleanup)

describe("Pagination Component", () => {
    it("should render correctly", () => {
        render(<Pagination name="A B" />);
    });
    it("should render without crasing",()=>{
        const div = document.createElement('div')
        ReactDOM.render( <Pagination rightIcon="Pagination"></Pagination>,div)
    })
    it("should render Pagination correctly with righticon copy",()=>{
        const {getByTestId}= render( <Pagination rightIcon="copy"></Pagination>)
        expect( getByTestId('Pagination') ).toHaveTextContent('copy')
    })

});