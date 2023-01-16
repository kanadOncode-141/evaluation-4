import { render } from "@testing-library/react";
import Avatar from "./Avatar";
import ReactDOM from 'react'
import renderer from 'react-test-renderer'

describe("Avatar Component", () => {
  it("should render correctly", () => {
    render(<Avatar name="A B" />);
  });

  it("Should render without crasing", ()=>{
      const div = document.createElement('div')
      ReactDOM.render(<Avatar rightIcon='Avatar'></Avatar>,div)
  })
  it("Should render correctly with righticon copy", ()=>{
    const {getByTestId}= render(<Avatar rightIcon='copy' ></Avatar>)
    expect(getByTestId('Avatar')).toHaveTextContent('copy')
  })

  it("should render without crasing", ()=>{
    const div = document.createElement("div")
    ReactDOM.render(<Avatar leftIcon ='Avatar'></Avatar>);
  })
  it("should render avatar correctly with leftIcon copy",()=>{
    const {getByTestId}  = render(<Avatar leftIcon="copy"></Avatar>)
    expect(getByTestId("Avatar")).toHaveTextContent('copy')
  })
  it("should render without crasingn",()=>{
      const div = document.createElement('div');
      ReactDOM.render(<Avatar children='Avatar' ></Avatar>,div)
  })
  it("should render correctly with children copy", ()=>{
    const {getByTestId}= render(<Avatar children="copy"></Avatar>)
    expect(getByTestId("Avatar")).toHaveTextContent('copy')
  })
  it("shold render Avatar correctly with leftIcon add",()=>{
    const {getByTestId} = render(<Avatar leftIcon="add"></Avatar>)
    expect(getByTestId("Avatar")).toHaveTextContent("add")
  })
  it("mathch snapshot",()=>{
    const tree = renderer.create(<Avatar label="REMOVE"></Avatar>).toJSON()
    expect(tree).toMatchSnapshot()
  })
});
