import { shallow } from "enzyme";
import Notifications from "./Notifications";

const wrapper = shallow(<Notifications />);

test("renders without crashing", () => {
    shallow(<Notifications />);
});
test("renders three list items", () => {
    expect(wrapper.find("li").children().length).toEqual(3);
});
test("renders the <p>", () => {
    expect(
        wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
    ).toBeTruthy();
});