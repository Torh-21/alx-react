import { shallow } from "enzyme";
import App from "./App";

const wrapper = shallow(<App />);

test("renders without crashing", () => {
    shallow(<App />);
});

test("renders App-header", () => {
    expect(wrapper.find("header.App-header").exists()).toEqual(true);
});
test("renders App-body", () => {
    expect(wrapper.find("main.App-body").exists()).toEqual(true);
});
test("renders App-footer", () => {
    expect(wrapper.find("footer.App-footer").exists()).toEqual(true);
});